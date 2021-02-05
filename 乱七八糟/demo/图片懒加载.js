(function lazyLoad() {
  const imageToLazy = document.querySelectorAll("img[src]");
  const loadImage = function (image) {
    image.setAttribute("src", image.getAttribute("src"));
    image.addEventListener("load", function () {
      image.removeAttribute("src");
    });
  };

  imageToLazy.forEach(function (image) {
    loadImage(image);
  });
})();
// 图片懒加载的进阶实现–滚动加载
(function lazyLoad() {
  const imageToLazy = document.querySelectorAll("img[src]");
  const loadImage = function (image) {
    image.setAttribute("src", image.getAttribute("src"));
    image.addEventListener("load", function () {
      image.removeAttribute("src");
    });
  };

  const intersectionObserver = new IntersectionObserver(function (
    items,
    observer
  ) {
    items.forEach(function (item) {
      if (item.isIntersecting) {
        loadImage(item.target);
        observer.unobserve(item.target);
      }
    });
  });

  imageToLazy.forEach(function (image) {
    intersectionObserver.observe(image);
  });
})();

function lazyLoad() {
  let images = document.querySelectorAll("img");
  function loadImage(img) {
    img.setAttribute("src", img.src);
    img.addEventListener("load", function () {
      img.removeAttribute("src");
    });
  }
  images.forEach((img) => {
    loadImage(img);
  });
}
