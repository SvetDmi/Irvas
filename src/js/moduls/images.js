const images = () => {
  const imgPopup = document.createElement("div"),
    bigImg = document.createElement("img"),
    imgSection = document.querySelector(".works");

  imgSection.appendChild(imgPopup);

  imgPopup.classList.add("popup");
  imgPopup.style.display = "none";
  imgPopup.style.justifyContent = "center";
  imgPopup.style.alignItems = "center";

  imgPopup.appendChild(bigImg);

  imgSection.addEventListener("click", (e) => {
    e.preventDefault();

    let target = e.target;

    if (target && target.classList.contains("preview")) {
      imgPopup.style.display = "flex";

      document.body.style.overflow = "hidden";
      const path = target.parentNode.getAttribute("href");
      bigImg.setAttribute("src", path);
      bigImg.style.maxWidth = "80%";
      bigImg.style.maxHeight = "80%";
      bigImg.style.objectFit = "cover";
    }
    if (target && target.matches("div.popup")) {
      imgPopup.style.display = "none";
      document.body.style.overflow = "";
    }
  });
};
export default images;
