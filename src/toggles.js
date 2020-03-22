export const TOGGLES = {
  HIDE_RECOVERED: 'HIDE_RECOVERED'
};

export const TOGGLES_DEFAULT = {
  HIDE_RECOVERED: false
};

export const getToggle = key => {
  return localStorage.getItem(key) || TOGGLES_DEFAULT[key];
};
