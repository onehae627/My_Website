// Header에 페이지 아래로 스크롤시 다크 스타일 적용
const header = document.querySelector(".header");
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  // 스크롤되는 Y좌표가 headerHeight보다 크다면 다른 스타일링
  console.log(window.scrollY);
  if (window.scrollY > headerHeight) {
    header.classList.add("header--dark");
  } else {
    header.classList.remove("header--dark");
  }
});

// Home 섹션을 아래로 스크롤시 투명하게 처리함
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  console.log(window.scrollY);
  home.style.opacity = 1 - window.scrollY / homeHeight;
});
