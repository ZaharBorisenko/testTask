let openItem = null;

document.querySelectorAll(".catalog__sidebar--item").forEach(function (item) {
  item.addEventListener("click", function () {
    const arrow = item.querySelector(".catalog__sidebar--arrow");
    const link = item.querySelector(".catalog__sidebar--link");
    const dropdown = item.querySelector(".catalog__sidebar--dropdown");
    const topSection = item.querySelector(".catalog__sidebar--top"); // Получаем элемент .catalog__sidebar--top

    const currentSrc = arrow.getAttribute("src");

    if (openItem && openItem !== item) {
      const openArrow = openItem.querySelector(".catalog__sidebar--arrow");
      const openLink = openItem.querySelector(".catalog__sidebar--link");
      const openDropdown = openItem.querySelector(
        ".catalog__sidebar--dropdown"
      );
      const openTopSection = openItem.querySelector(".catalog__sidebar--top"); // Получаем элемент .catalog__sidebar--top предыдущего элемента

      openArrow.setAttribute("src", "../img/icon/arrow-right.svg");
      openLink.style.color = "#262b38";
      openDropdown.style.display = "none";

      openTopSection.style.boxShadow = "";
      openTopSection.style.zIndex = "";

      openItem.classList.remove("open");
    }

    if (currentSrc === "../img/icon/arrow-right.svg") {
      arrow.setAttribute("src", "../img/icon/arrow-bottomActive.svg");
      link.style.color = "#5c94ff";
      dropdown.style.display = "block";

      topSection.style.boxShadow = "0px 16px 30px 0px rgba(0, 0, 0, 0.1)";
      topSection.style.zIndex = "10";
    } else {
      arrow.setAttribute("src", "../img/icon/arrow-right.svg");
      link.style.color = "#262b38";
      dropdown.style.display = "none";

      topSection.style.boxShadow = "";
      topSection.style.zIndex = "";
    }

    openItem = item.classList.contains("open") ? null : item;
    item.classList.toggle("open");
  });
});
