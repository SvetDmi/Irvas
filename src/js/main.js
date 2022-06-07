import "./slider";
import modals from "./moduls/modal";
import tabs from "./moduls/tabs";
import forms from "./moduls/forms";
import changeModalState from "./moduls/changeModalState";
import timer from "./moduls/timer";
import images from "./moduls/images";

window.addEventListener("DOMContentLoaded", () => {
  let modalState = {
    form: 1,
    width: 0,
    height: 0,
    type: "tree",
    profile: "не выбран",
  };

  let deadline = "2022-06-22";

  changeModalState(modalState);
  modals();
  tabs(".glazing_slider", ".glazing_block", ".glazing_content", "active");
  tabs(
    ".decoration_slider",
    ".no_click",
    ".decoration_content > div > div",
    "after_click"
  );
  tabs(
    ".balcon_icons",
    ".balcon_icons_img",
    ".big_img > img",
    "do_image_more",

    "inline"
  );
  forms(modalState);
  timer(".container1", deadline);
  images();
});
