// 17/07/2022 -> 07/22
const DATE_MMYY: Mask = (text = "") => {
  const cleanText = text.replace(/\D+/g, "");

  let secondDigitDayMask = /\d/;

  if (cleanText.charAt(0) === "0") {
    secondDigitDayMask = /[1-9]/;
  }
  if (cleanText.charAt(0) === "3") {
    secondDigitDayMask = /[01]/;
  }

  let secondDigitMonthMask = /\d/;

  if (cleanText.charAt(2) === "0") {
    secondDigitMonthMask = /[1-9]/;
  }
  if (cleanText.charAt(2) === "1") {
    secondDigitMonthMask = /[012]/;
  }

  return [/[0-3]/, secondDigitDayMask, "/", /[1-9]/, /[1-9]/];
};
const CVV_MASK = [/[0-9]/, /[0-9]/, /[0-9]/];

export const MY_MASK = {
  DATE_MMYY,
  CVV_MASK,
};
