export default class Gutter {
  constructor() {
    this.gutterToggles = document.querySelectorAll(".js_gutter-toggle");

    this.gutterToggles.forEach(function(gutterToggle) {
      gutterToggle.addEventListener("click", function(event) {
        event.preventDefault();
        document
          .querySelector(".c_gutter#" + this.dataset.target)
          .classList.toggle("c_gutter--reveal");
      });
    });
  }
};
