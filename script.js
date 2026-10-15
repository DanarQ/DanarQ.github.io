document.getElementById("year").textContent = new Date().getFullYear();

// The nav is a floating dock that only appears once you scroll past the intro
const dock = document.querySelector(".dock");
const onScroll = () => dock.classList.toggle("show", window.scrollY > 240);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// Highlight the dock link for the section in view
const links = [...dock.querySelectorAll("a")];
const sections = links.map((a) => document.querySelector(a.hash));
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      links.forEach((a) => a.classList.toggle("active", a.hash === "#" + e.target.id));
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  sections.forEach((s) => s && io.observe(s));
}

// The last section is short, so activate it when the page bottom is reached
window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
    links.forEach((a) => a.classList.toggle("active", a.hash === "#contact"));
  }
}, { passive: true });
