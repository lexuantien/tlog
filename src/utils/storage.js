export const SetLS = (key, value) => {
  window.localStorage.setItem(key, value);
};

export const GetLS = (key) => {
  return window.localStorage.getItem(key);
};

export const CheckLS = (key) => {
  return window.localStorage.getItem(key) ? true : false;
};

const ThemeLSVal = () => {
  if (!CheckLS("tlog-theme")) {
    SetLS("tlog-theme", "dark");
  }
  return GetLS("tlog-theme");
};

export default ThemeLSVal;
