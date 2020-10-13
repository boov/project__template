export default class Lightbox {
  constructor(element) {
    this.element = element;
    this.lightbox = null;
    this.open = false;
    this.validExtensions = [".jpg", ".jpeg", ".png"];

    this.addListener();
  }

  addListener() {
    this.validExtensions.forEach(extension => {
      if (this.getTarget().endsWith(extension)) {
        this.element.addEventListener("click", event => {
          event.preventDefault();
          this.handleClick();
        });
      }
    });
  }

  getTarget() {
    let firstChild = this.element.firstChild;
    let firstChildTag = firstChild.tagName;

    if (firstChildTag == "A") {
      return firstChild.getAttribute("href");
    } else if (firstChildTag == "IMG") {
      return firstChild.src;
    }
  }

  createElement(tag, className) {
    let element = document.createElement(tag);
    element.classList.add(className);
    return element;
  }

  handleClick() {
    if (this.open) {
      this.open = false;
      this.destroy();
    } else {
      this.open = true;
      this.create();
    }
  }

  create() {
    this.lightbox = this.createElement("div", "c_lightbox");
    this.lightbox.addEventListener("click", event => {
      this.handleClick();
    });

    let lightboxWindow = this.createElement("div", "c_lightbox__window");
    let lightboxClose = this.createElement("div", "c_lightbox__close");
    let lightboxImage = this.createElement("img", "c_lightbox__image");
    lightboxImage.src = this.getTarget();

    document.querySelector("body").appendChild(this.lightbox);

    this.lightbox.appendChild(lightboxWindow);
    lightboxWindow.appendChild(lightboxClose);
    lightboxWindow.appendChild(lightboxImage);
  }

  destroy() {
    this.lightbox.remove();
  }
}
