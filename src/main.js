import "./style.css";
import { EditorState } from "prosemirror-state"
import { EditorView } from "prosemirror-view"
import { Schema, DOMParser } from "prosemirror-model"
import { schema } from "prosemirror-schema-basic"
import { addListNodes } from "prosemirror-schema-list"
import { exampleSetup } from "prosemirror-example-setup"
import spelling from "spelling";
import en_us from 'spelling/dictionaries/en_US'

import { simpleUserStory, complexUserStory } from "./user-stories";

const dict = new spelling(en_us);
dict.insert('is')

const mySchema = new Schema({
  nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block"),
  marks: schema.spec.marks
})

window.view = new EditorView(document.querySelector("#editor"), {
  state: EditorState.create({
    doc: DOMParser.fromSchema(mySchema).parse(document.querySelector("#content")),
    plugins: exampleSetup({ schema: mySchema })
  })
})

const stories = [
  simpleUserStory,
  complexUserStory,
];

const app = document.querySelector('#app');

const escapeRegExp = (string) => {
  return string.replace(/<(?:("[^"]*")|('[^']*')|([^'">]+))*>/g, ' ');
}

const printUserStory = () => {
  const { userStory, content, html, title } = getUserStory();

  const storyElement = document.querySelector('#newStory');
  storyElement.innerHTML = '';
  storyElement.innerHTML = html;

  checker(html);

  console.log('title:', title);
  console.log('content:', content);
  console.log('html:', html);
}

const printUserStoryButton = document.querySelector('#print');
printUserStoryButton.addEventListener('click', printUserStory);

stories.forEach((story) => {
  const storyElement = document.createElement('div');
  storyElement.classList.add('story');
  storyElement.innerHTML = story;
  app.appendChild(storyElement);
});

const getUserStory = () => {
  const userStory = document.querySelector('.ProseMirror'); 
  const content = userStory.textContent;
  const html = userStory.innerHTML;
  const title = document.querySelector('#title').value;

  return {
    userStory,
    content,
    html,
    title
  };
};

const checker = (html) => {
  const text = escapeRegExp(html);
  const wrongWords = [];

  text.match(/\b(\w+)\b/g).forEach((word, i) => {
    const checkWord = dict.lookup(word.toLowerCase());

    if (!checkWord.found && !(wrongWords || []).map(e => e.word.toLowerCase()).includes(word.toLowerCase())) {
      const obj = {
        word,
        suggestions: checkWord.suggestions
      }
      wrongWords.push(obj);
    }
  });

  fromNuclia()

  wrongWords.forEach((wordObj, i) => {
    const editor = document.getElementById("editor");
    const editorHtml = editor.innerHTML;

    const regex = new RegExp(wordObj.word, "gi");
    const newHtml = editorHtml.replace(regex, `<span class="underline" id="word-${i}">$&</span>`);
    editor.innerHTML = newHtml;

    const wordElements = document.querySelectorAll('#word-' + i);

    wordElements.forEach((wordElement, wordElIx) => {
      const tooltipEl = document.createElement('span');
      tooltipEl.innerHTML = `<span class="top">Word '${wordObj.word}' misspelled.</span><span class="bottom">${wordObj.suggestions.length ? 'Suggestions: ' + wordObj.suggestions.map(e => e.word).join(', ') : 'No suggested words'}.</span>`;
      tooltipEl.classList = 'tooltip';
      tooltipEl.id = `tooltip_${i}-${wordElIx}`;

      wordElement.appendChild(tooltipEl);
    });
  });
}

const fromNuclia = async () => {
  const fromServer = await fetch('http://localhost:5555/functions/nuclia', {mode: 'no-cors', method: 'get'})
  //const fromServer = await fetch('http://localhost:5555/functions/nuclia')
  const data = await fromServer.json();

  console.log(data)
  
  //return data
}
