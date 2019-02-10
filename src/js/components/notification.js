export default class Notification {
  constructor() {
    this.notifications = document.querySelectorAll(".c_notification");

    this.notifications.forEach(function(notification) {
      notification
        .querySelector(".c_notification__close")
        .addEventListener("click", function(event) {
          event.preventDefault();
          this.hide();
        });
    });
  }

  hide(notification) {
    notification.classList.toggle("c_notification--deleted");
  }
};
