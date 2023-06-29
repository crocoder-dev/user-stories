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

const printUserStory = () => {
  const { userStory, content, html, title } = getUserStory();

  const storyElement = document.querySelector('#newStory');
  storyElement.innerHTML = '';
  storyElement.innerHTML = html;

  checker(content);

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

const checker = (text) => {
  text.match(/\b(\w+)\b/g).forEach((word, i) => {
    const checkWord = dict.lookup(word);

    if (!checkWord.found) {

      const storyElement = document.querySelector('#newStory');
      const storyText = storyElement.innerHTML;
      const newText = storyText.replace(new RegExp(word, 'gi'), `<span class="underline" id="word-${i}">$&</span>`);
      storyElement.innerHTML = newText;

      // const wordEl = document.querySelector('#word-' + i);

      // const pEl = document.createElement('p');
      // pEl.innerText = `Word '${word}' misspelled. ${checkWord.suggestions.length ? 'Suggestions: ' + checkWord.suggestions.map(e => e.word).join(', ') : 'No suggested words'}.`;
      // pEl.classList = 'tooltip';
      // pEl.id = 'tooltip-' + i;

      // wordEl.appendChild(pEl);
      // wordEl.addEventListener('mouseover', () => showTooltip(i));
    }
  })
}

const showTooltip = (i) => {
  const tooltipEl = document.querySelector(`#tooltip-${i}`);
  tooltipEl.style.display = 'block';
}
