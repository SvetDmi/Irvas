const tabs = (
  tabsSectionSelector,
  tabsSelector,
  tabsContentSelector,
  activeClass,
  display = "block"
) => {
  const tabsSection = document.querySelector(tabsSectionSelector),
    tabs = document.querySelectorAll(tabsSelector),
    tabsContent = document.querySelectorAll(tabsContentSelector);

  function hideTab() {
    tabsContent.forEach((item) => {
      item.style.display = "none";
    });
    tabs.forEach((item) => {
      item.classList.remove(activeClass);
      // item.children[index].classList.remove(activeClass);
    });
  }
  function showTab(i = 0) {
    tabsContent[i].style.display = display;
    // tabs[i].children[index].classList.add(activeClass);
    tabs[i].classList.add(activeClass);
    console.log(tabs[i]);
  }

  hideTab();
  showTab();

  tabsSection.addEventListener("click", (e) => {
    let target = e.target;

    if (
      (target && target.classList.contains(tabsSelector.replace(/\./, ""))) ||
      target.parentNode.classList.contains(tabsSelector.replace(/\./, "")) ||
      target.parentNode.parentNode.classList.contains(
        tabsSelector.replace(/\./, "")
      )
    ) {
      tabs.forEach((item, i) => {
        if (
          target == item ||
          target.parentNode == item ||
          target.parentNode.parentNode == item
        ) {
          hideTab();
          showTab(i);
        }
      });
    }
  });
};

export default tabs;
