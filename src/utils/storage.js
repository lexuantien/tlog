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
  if (!CheckLS("tbog-theme")) {
    SetLS("tbog-theme", "dark");
  }
  return GetLS("tbog-theme");
};

export default ThemeLSVal;
