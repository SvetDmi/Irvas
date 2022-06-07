import { closeAllPopups } from "./utils";

const modals = () => {
  function bindModal(
    triggerSelector,
    modalSelector,
    closeSelector,
    closeClickOverlay = true
  ) {
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector),
      scroll = calcScroll();

    trigger.forEach((element) => {
      element.addEventListener("click", (e) => {
        if (e.target) {
          e.preventDefault();
        }
        closeAllPopups();
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = `${scroll}px`;
        //или использовать класс из bootstap - document.body.classList.add("modal-open");
      });
    });

    close.addEventListener("click", () => {
      closeAllPopups();
      modal.style.display = "none";
      document.body.style.overflow = "";
      document.body.style.marginRight = `0px`;
      // document.body.classList.remove("modal-open");
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal && closeClickOverlay) {
        closeAllPopups();
        modal.style.display = "none";
        document.body.style.overflow = "";
        document.body.style.marginRight = `0px`;
        // document.body.classList.remove("modal-open");
      }
    });
  }

  function calcScroll() {
    let div = document.createElement("div");
    div.style.width = "50px";
    div.style.height = "50px";
    div.style.visibility = "hidden";
    div.style.overflowY = "scroll";
    document.body.appendChild(div);
    let scrollWight = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWight;
  }

  function showModalInTime(modalSelector, time) {
    setTimeout(() => {
      document.querySelector(modalSelector).style.display = "block";
      document.body.style.overflow = "hidden";
    }, time);
  }

  bindModal(
    ".popup_engineer_btn",
    ".popup_engineer",
    ".popup_engineer .popup_close"
  );

  bindModal(".phone_link", ".popup", ".popup .popup_close");

  bindModal(".popup_calc_btn", ".popup_calc", ".popup_calc_close");
  bindModal(
    ".popup_calc_button",
    ".popup_calc_profile",
    ".popup_calc_profile_close",
    false
  );
  bindModal(
    ".popup_calc_profile_button",
    ".popup_calc_end",
    ".popup_calc_end_close",
    false
  );

  // showModalInTime(".popup", 60000);
};

export default modals;
