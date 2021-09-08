// get user agent
var userAgent = ((navigator && navigator.userAgent) || "").toLowerCase();

// build a 'comparator' object for various comparison checks
var comparator = {
  "<": function (a, b) {
    return a < b;
  },
  "<=": function (a, b) {
    return a <= b;
  },
  ">": function (a, b) {
    return a > b;
  },
  ">=": function (a, b) {
    return a >= b;
  },
};

// helper function which compares a version to a range
function compareVersion(version, range) {
  var string = range + "";
  var n = +(string.match(/\d+/) || NaN);
  var op = string.match(/^[<>]=?|/)[0];
  return comparator[op] ? comparator[op](version, n) : version == n || n !== n;
}

const iphone = (range) => {
  // avoid false positive for Facebook in-app browser on ipad;
  // original iphone doesn't have the OS portion of the UA
  var match = ipad() ? null : userAgent.match(/iphone(?:.+?os (\d+))?/);
  return match !== null && compareVersion(match[1] || 1, range);
};

// is current device android tablet?
const androidTablet = () => {
  return /android/.test(userAgent) && !/mobile/.test(userAgent);
};

// is current device windows tablet?
const windowsTablet = () => {
  return windows() && not.windowsPhone() && /touch/.test(userAgent);
};

// is current device ipad?
// parameter is optional
const ipad = (range) => {
  var match = userAgent.match(/ipad.+?os (\d+)/);
  return match !== null && compareVersion(match[1], range);
};

// is current device ipod?
// parameter is optional
const ipod = (range) => {
  var match = userAgent.match(/ipod.+?os (\d+)/);
  return match !== null && compareVersion(match[1], range);
};

// is current device android phone?
const androidPhone = () => {
  return /android/.test(userAgent) && /mobile/.test(userAgent);
};

// is current device blackberry?
const blackberry = () => {
  return /blackberry/.test(userAgent) || /bb10/.test(userAgent);
};

// is current device windows phone?
const windowsPhone = () => {
  return windows() && /phone/.test(userAgent);
};

// ||==============================================================================
// ||
// is current device desktop?

// is current device tablet?
export const tablet = () => {
  return ipad() || androidTablet() || windowsTablet();
};

// is current device mobile?
export const mobile = () => {
  return iphone() || ipod() || androidPhone() || blackberry() || windowsPhone();
};

export const desktop = () => {
  return !mobile() && !tablet();
};

// ||
// ||==============================================================================