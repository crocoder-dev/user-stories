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

  checker(content);
  console.log('title:', title);
  console.log('content:', content);
  console.log('html:', html);
}

const printUserStoryButton = document.createElement('button');
printUserStoryButton.innerHTML = 'Print User Story';
printUserStoryButton.addEventListener('click', printUserStory);
app.appendChild(printUserStoryButton);

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
  const errorsDiv = document.querySelector('.errors');
  text.trim().split(' ').forEach(word => {
    const clearedWord = word.replace('[^a-zA-Z0-9]', '')
    const checkWord = dict.lookup(clearedWord)
    if (!checkWord.found) {
      const pEl = document.createElement('p');
      pEl.innerText = `Warning => Word '${word}' misspelled. ${checkWord.suggestions.length ? 'Suggestions: ' + checkWord.suggestions.map(e => e.word).join(', ') : 'No suggestions'}.`;
      errorsDiv.appendChild(pEl);
      underlineWord(word);
    }
  })
}

function underlineWord(word) {
  const editor = document.getElementById("editor");
  const text = editor.innerHTML;
  const newText = text.replace(new RegExp('\\b' + word + '\\b', 'gi'), '<span class="red">$&</span>');
  editor.innerHTML = newText;
}
