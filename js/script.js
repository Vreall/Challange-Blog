const links = document.querySelectorAll(".nav__linkContainer");
const burgerBtn = document.querySelector(".nav__burger");
const linksItems = document.querySelectorAll(".nav__link");
const arrows = document.querySelectorAll(".nav__arrow");

function show(item) {
  if (
    item.target.parentElement.nextElementSibling.classList.contains(
      "nav__subMenuItems--show"
    )
  ) {
    item.target.parentElement.nextElementSibling.classList.toggle(
      "nav__subMenuItems--show"
    );
    item.target.classList.toggle("nav__link--active");
    item.target.nextElementSibling.classList.toggle("nav__arrow--active");
    return;
  }
  links.forEach((link) => {
    link.nextElementSibling.classList.remove("nav__subMenuItems--show");
  });
  linksItems.forEach((linkItem) => {
    linkItem.classList.remove("nav__link--active");
  });
  arrows.forEach((arrow) => {
    arrow.classList.remove("nav__arrow--active");
  });

  item.target.parentElement.nextElementSibling.classList.toggle(
    "nav__subMenuItems--show"
  );
  item.target.classList.toggle("nav__link--active");
  item.target.nextElementSibling.classList.toggle("nav__arrow--active");
}

function menuDrop() {
  document
    .querySelector(".nav__linksContainer")
    .classList.toggle("nav__linksContainer--show");
  burgerBtn.classList.toggle("nav__burger--show");
}

links.forEach((item) => {
  item.addEventListener("click", show);
});
burgerBtn.addEventListener("click", menuDrop);


document.addEventListener('scroll', function (e) {
  // console.log("działa");
  const scrollPosition = window.scrollY;
  console.log(scrollPosition);
  if (scrollPosition > 0) {
    document.querySelector(".nav").classList.add("nav--scrolled");
  } else {
    document.querySelector(".nav").classList.remove("nav--scrolled");
  }
})