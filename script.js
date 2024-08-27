document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("img[data-src]");

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const loadImage = (image) => {
    image.src = image.getAttribute("data-src");
    image.onload = () => {
      image.classList.add("loaded");
    };
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const image = entry.target;
        loadImage(image);
        observer.unobserve(image);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, options);

  images.forEach((image) => {
    observer.observe(image);
  });
});
