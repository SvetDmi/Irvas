import { checkNumber } from "./utils";

const modalChangeState = (state) => {
  const balconForm = document.querySelectorAll(".balcon_icons_img"),
    balconWidth = document.querySelectorAll("#width"),
    balconHeight = document.querySelectorAll("#height"),
    balconType = document.querySelectorAll("#view_type"),
    balconProfile = document.querySelectorAll(".checkbox");

  checkNumber(balconHeight);
  checkNumber(balconWidth);

  function bindActionsModal(action, elem, prop) {
    elem.forEach((item, i = 0) => {
      item.addEventListener(action, () => {
        switch (item.nodeName) {
          case "SPAN":
            state[prop] = i + 1;
            break;

          case "INPUT":
            if (item.getAttribute("type") != "checkbox") {
              state[prop] = item.value;
            } else {
              i === 0 ? (state[prop] = "Холодное") : (state[prop] = "Теплое");
              elem.forEach((box, j) => {
                box.checked = false;
                if (i == j) {
                  box.checked = true;
                }
              });
            }
            break;
          case "SELECT":
            state[prop] = item.value;
            break;
        }
        console.log(state);
      });
    });
  }

  bindActionsModal("click", balconForm, "form");
  bindActionsModal("change", balconWidth, "width");
  bindActionsModal("change", balconHeight, "height");
  bindActionsModal("change", balconType, "type");
  bindActionsModal("change", balconProfile, "profile");
};
export default modalChangeState;
