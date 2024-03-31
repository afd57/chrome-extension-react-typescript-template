import { createElement } from 'react';
import ReactDOM from 'react-dom';
import { Counter } from './buttonn';

const reactRenderDiv = document.createElement("div");
reactRenderDiv.id = 'buttonDiv'
document.body.appendChild(reactRenderDiv);

const getSelectedText = () => window.getSelection().toString();

function getMarkerPosition() {
  const rangeBounds = window
    .getSelection()
    .getRangeAt(0)
    .getBoundingClientRect();
  return {
    // Substract width of marker button -> 40px / 2 = 20
    left: rangeBounds.left + rangeBounds.width / 2 - 20,
    top: rangeBounds.top - 30,
    position: "absolute",
    display: rangeBounds.width === 0 ? "none" : "",
  };
}

function handleSelection() {
  console.log(getSelectedText());
  const pos = getMarkerPosition();
  if (getSelectedText().length === 0) {
    console.log("noting selected");
    const button1 = createElement(Counter, { style: pos });
    ReactDOM.render(button1, document.getElementById("buttonDiv"));
  } else {
    const button1 = createElement(Counter, { style: pos });
    ReactDOM.render(button1, document.getElementById("buttonDiv"));
  }
}

// Add event listeners
document.addEventListener('mouseup', handleSelection);
document.addEventListener('dblclick', handleSelection);