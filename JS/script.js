import { Fast_and_Furious_alert } from "./Fast_and_Furious_alert.js";
const ul = document.querySelector("ul");
const ul_children = ul.childNodes;
let index = ul_children.length ? ul_children : 0;

for (const childs of ul_children) {
  if (childs.ELEMENT_NODE === 1) {
    if (childs.innerHTML === "Fast and Furious") {
      ul.prepend(childs);
      childs.classList.add("important");
      console.log(childs.childNodes);
      if (childs.className == "important") {
        childs.addEventListener("click", Fast_and_Furious_alert);
      }
    } else {
      childs.addEventListener("click", () => {
        alert(childs.innerHTML);
      });
      if (.isEqualNode(childs)) {
        ul.removeChild();
      }
    }
  }
}
