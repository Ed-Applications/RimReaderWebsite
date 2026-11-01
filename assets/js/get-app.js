// "Get the app" page: send a phone straight to its own store.
// Android goes to Google Play. iPhone and iPad go to the App Store once
// facts.json has an "appstore-url"; until then they stay on this page.
(function () {
  var el = document.getElementById("get-app");
  if (!el) return;
  var play = el.getAttribute("data-play");
  var ios = el.getAttribute("data-ios");
  var ua = navigator.userAgent || "";
  var isAndroid = /Android/i.test(ua);
  var isIOS = /iPhone|iPad|iPod/i.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  if (isAndroid && play) {
    location.replace(play);
  } else if (isIOS && ios) {
    location.replace(ios);
  }
})();
