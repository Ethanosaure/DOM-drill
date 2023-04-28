import { Fast_and_Furious_alert } from "./Fast_and_Furious_alert.js";
const ul = document.querySelector("ul");
const ul_children = ul.childNodes;
const body = document.querySelector("body");

for (const childs of ul_children) {
  body.addEventListener("keyup", (event) => {
    if (event.keyCode === 82) {
      ul_children.sort((a, b) => 0.5 - Math.random());
      console.log("r");
    }
  });
  if (childs.ELEMENT_NODE === 1) {
    if (childs.innerHTML === "Fast and Furious") {
      ul.prepend(childs);
      childs.classList.add("important");
      if (childs.className == "important") {
        childs.addEventListener("click", Fast_and_Furious_alert);
      }
    } else {
      for (const kid of ul_children) {
        if (
          kid.nodeType === Node.ELEMENT_NODE &&
          kid !== childs &&
          kid.isEqualNode(childs)
        ) {
          ul.removeChild(kid);
        }
      }

      childs.addEventListener("click", () => {
        alert(childs.innerHTML);
      });
    }
  }
}
