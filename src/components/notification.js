let window_focus = true;

export default (data) => {
  window.onblur = () => window_focus = false;
  window.onfocus = () => window_focus = true;

  if (!window_focus) {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
      let notification = new Notification(data[0].from, {
        body: data[0].message
      });

      notification.onclick = () => window.focus();
    }
  }
}