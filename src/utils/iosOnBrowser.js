export const isIosOnBrowser =
  ["iPhone", "iPad", "iPod"].includes(navigator.platform) &&
  !window.navigator.standalone;
