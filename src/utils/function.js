export function convertPxToRem(px) {
  return px / parseFloat(getComputedStyle(document.documentElement).fontSize);
}
