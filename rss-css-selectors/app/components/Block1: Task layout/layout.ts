import { Layout } from "../../types/index";

export default function createLayout(level: string): Layout {
  const layout: Layout = {
    element: document.createElement("div"),
  };

  layout.element.innerHTML = level;

  return layout;
}
