//sticky type for Navbar

const primaryHeader = document.querySelector(".navBar");
const scrollWatcher = document.querySelector(".info");

scrollWatcher.setAttribute("data-scroll-watcher", "");

const navObserver = new IntersectionObserver((entries) => {
  console.log(entries);
  primaryHeader.classList.toggle("sticking", !entries[0].isIntersecting);
});
navObserver.observe(scrollWatcher);
