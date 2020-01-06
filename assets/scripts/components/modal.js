export default class Modal {
  constructor() {
    this.modalsToggles = document.querySelectorAll(".js_toggle-modal");
    this.modals = document.querySelectorAll(".c_modal");

    this.modalsToggles.forEach(function(modalsToggle) {
      modalsToggle.addEventListener("click", function(event) {
        event.preventDefault();
        document
          .querySelector(".c_modal#" + this.dataset.target)
          .classList.toggle("c_modal--reveal");
      });
    });

    this.modals.forEach(function(modal) {
      modal
        .querySelector(".c_modal__close")
        .addEventListener("click", function(event) {
          event.preventDefault();
          modal.classList.toggle("c_modal--reveal");
        });
    });
  }
};
