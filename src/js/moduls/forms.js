import { checkNumber, closeAllPopups } from "./utils";

const forms = (state) => {
  const allForms = document.querySelectorAll("form"),
    inputs = document.querySelectorAll("input"),
    phoneInputs = document.querySelectorAll('input[name="user_phone"]'),
    checkbox = document.querySelectorAll('input[type="checkbox"]');

  const message = {
    loading: "Идет загрузка данных",
    sucsess: "Спасибо! Скоро мы с вами свяжемся...",
    fail: "Что-то пошло не так, извините...",
  };

  checkNumber(phoneInputs);

  const postData = async (url, data) => {
    document.querySelector(".status").textContent = message.loading;
    let res = await fetch(url, {
      method: "POST",
      body: data,
    });
    return await res.text();
  };

  const clearInputs = () => {
    inputs.forEach((item) => {
      item.value = "";
    });
    checkbox.forEach((item) => {
      item.checked = false;
    });
  };

  allForms.forEach((item) => {
    item.addEventListener("submit", (e) => {
      e.preventDefault();

      let statusMessage = document.createElement("div");
      statusMessage.classList.add("status");
      item.appendChild(statusMessage);

      const formData = new FormData(item);
      if (item.getAttribute("data-calc") === "end") {
        for (let key in state) {
          formData.append(key, state[key]);
        }
      }
      postData("assets/server.php", formData)
        .then((res) => {
          console.log(res);
          statusMessage.textContent = message.sucsess;
          setTimeout(() => {
            closeAllPopups();
          }, 5000);
        })
        .catch(() => {
          statusMessage.textContent = message.fail;
        })
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove();
          }, 5000);
        });
    });
  });
};

export default forms;
