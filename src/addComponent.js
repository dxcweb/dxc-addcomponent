import { createRoot } from "react-dom/client";

const roots = {};
const _elements = {};

const _createRemoveHandler = (key) => () => {
  if (!roots[key]) return;
  roots[key].unmount();
  delete roots[key];
  _elements[key].parentNode.removeChild(_elements[key]);
  delete _elements[key];
};

export default function addComponent(callback) {
  const key = Symbol();
  _elements[key] = document.createElement("div");
  document.body.appendChild(_elements[key]);
  const element = callback(_createRemoveHandler(key));
  roots[key] = createRoot(_elements[key]);
  roots[key].render(element);
}
