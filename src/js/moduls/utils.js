const checkNumber = (elem) => {
  elem.forEach((item) => {
    item.addEventListener("input", () => {
      item.value = item.value.replace(/\D/, "");
    });
  });
};

const closeAllPopups = () => {
  const allPopups = document.querySelectorAll("[data-modal]");
  allPopups.forEach((item) => {
    item.style.display = "none";
    document.body.style.overflow = "";
  });
};

export { checkNumber, closeAllPopups };
