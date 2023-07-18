const buttonToggle = document.getElementById("toggle");
const todaysNews = document.querySelector(".news");
const toggleDate = document.getElementById("toggle-date");
const toggleDateOneContent = document.querySelector(".title-container");
const toggleDateNewest = document.getElementById("toggle-date-newest");
const toggleDateNewestContent = document.querySelector(
  ".newest-title-container"
);


function toggleElement(element, trigger) {
  if (element.style.display === "none") {
    element.style.display = "block";
    trigger.classList.add("rotated");
  } else {
    element.style.display = "none";
    trigger.classList.remove("rotated");
  }
}
buttonToggle.addEventListener("click", () => {
  toggleElement(todaysNews, buttonToggle);
});

toggleDate.addEventListener("click", () => {
  toggleElement(toggleDateOneContent, toggleDate);
});
toggleDateNewest.addEventListener("click", () => {
  toggleElement(toggleDateNewestContent, toggleDateNewest);
});

function marquee() {
  const el = document.querySelector(".marquee");
  const content = el.querySelector(".marquee-content");
  let html =
    content.offsetWidth < window.innerWidth
      ? content.innerHTML + content.innerHTML
      : content.innerHTML;
  content.innerHTML = html;
  const clone = content.cloneNode(true);
  clone.className = "marquee-content";
  clone.innerHTML = html;
  el.appendChild(clone);

  const resize = () => {
    el.style.setProperty("--width", content.offsetWidth);
  };

  new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        el.classList.remove("paused");
      } else {
        el.classList.add("paused");
      }
    });
  }).observe(el);

  el.onmouseenter = () => el.classList.add("paused");
  el.onmouseleave = () => el.classList.remove("paused");

  window.addEventListener("resize", resize());
}

marquee();

function styleSpans() {
  const spans = document.querySelectorAll(".marquee-content span");

  spans.forEach((span) => {
    const value = parseFloat(span.textContent);

    if (value > 0) {
      span.classList.add("positive");
    } else if (value < 0) {
      span.classList.add("negative");
    }
  });
}

styleSpans();


function openLink(url) {
  window.open(url, '_blank')
}