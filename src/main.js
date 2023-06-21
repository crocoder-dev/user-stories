import "./style.css";
import { EditorState } from "prosemirror-state"
import { EditorView } from "prosemirror-view"
import { Schema, DOMParser } from "prosemirror-model"
import { schema } from "prosemirror-schema-basic"
import { addListNodes } from "prosemirror-schema-list"
import { exampleSetup } from "prosemirror-example-setup"

import { simpleUserStory, complexUserStory } from "./user-stories";


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

stories.forEach((story) => {
  const storyElement = document.createElement('pre');
  storyElement.classList.add('story');
  storyElement.innerHTML = story;
  app.appendChild(storyElement);
});

