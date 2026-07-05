const config = window.CAPOWN_CONFIG || {};

const links = {
  admin: "https://dashboard.capown.net",
  github: config.githubUrl || "https://github.com/tappat225/CapOwn"
};

document.querySelectorAll("[data-admin-link]").forEach((link) => {
  link.href = links.admin;
  link.target = "_blank";
  link.rel = "noreferrer";
});

document.querySelectorAll("[data-github-link]").forEach((link) => {
  link.href = links.github;
  link.target = "_blank";
  link.rel = "noreferrer";
});

const menu = document.querySelector("[data-menu]");
const openButton = document.querySelector("[data-menu-open]");
const closeButton = document.querySelector("[data-menu-close]");
const menuLinks = document.querySelectorAll("[data-menu-link]");

const setMenu = (open) => {
  menu?.classList.toggle("is-open", open);
  document.body.classList.toggle("menu-open", open);
  menu?.setAttribute("aria-hidden", String(!open));
  openButton?.setAttribute("aria-expanded", String(open));
};

openButton?.addEventListener("click", () => setMenu(true));
closeButton?.addEventListener("click", () => setMenu(false));
menuLinks.forEach((link) => link.addEventListener("click", () => setMenu(false)));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenu(false);
  }
});
