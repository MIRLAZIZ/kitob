function notifyMeOld() {
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }

  // Let's check if the user is okay to get some notification
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    var notification = new Notification("Hi there!");
    console.log(notification);
    // notification.show();
  }

  // Otherwise, we need to ask the user for permission
  // Note, Chrome does not implement the permission static property
  // So we have to check for NOT 'denied' instead of 'default'
  else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {

      // Whatever the user answers, we make sure we store the information
      if(!('permission' in Notification)) {
        Notification.permission = permission;
      }

      // If the user is okay, let's create a notification
      if (permission === "granted") {
        var notification = new Notification("Hi there!");
      }
    });
  } else {
    alert(`Permission is ${Notification.permission}`);
  }
}
// notifyMe();

// request permission on page load
document.addEventListener('DOMContentLoaded', function() {
  if (!Notification) {
    alert('Desktop notifications not available in your browser. Try Chromium.');
    return;
  }

  if (Notification.permission !== "granted")
    Notification.requestPermission();
});

function notifyMe() {
  if (Notification.permission !== "granted")
    Notification.requestPermission();
  else {
    // var notification = new Notification('Notification title', {
    //   icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
    //   body: "Hey there! You've been notified!",
    // });
    //
    // notification.onclick = function() {
    //   window.open("http://stackoverflow.com/a/13328397/1269037");
    // };
  }
}

notifyMe();

// $.notify("Access granted", "success");
// $.notify("Do not press this button", "info");
// $.notify("Warning: Self-destruct in 3.. 2..", "warn");
// $.notify("BOOM!", "error");
