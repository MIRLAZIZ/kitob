import { extend, localize } from "vee-validate";
import {
  required as rule_required,
  email as rule_email,
  min as rule_min,
  confirmed as rule_confirmed,
  regex as rule_regex,
  between as rule_between,
  alpha as rule_alpha,
  integer as rule_integer,
  digits as rule_digits,
  alpha_dash as rule_alpha_dash,
  alpha_num as rule_alpha_num,
  length as rule_length,
} from "vee-validate/dist/rules";
import en from "vee-validate/dist/locale/en.json";
import ru from "vee-validate/dist/locale/ru.json";
//import { localize } from '@vee-validate/i18n';
// import { setLocale } from '@vee-validate/i18n';

// setLocale('ar');

// eslint-disable-next-line object-curly-newline
import {
  validatorPositive,
  validatorUrlValidator,
  validatorPassword,
  validatorCreditCard,
} from "./validators";

// ////////////////////////////////////////////////////////
// General
// ////////////////////////////////////////////////////////

export const required = extend("required", rule_required);

export const email = extend("email", rule_email);

export const min = extend("min", rule_min);

export const confirmed = extend("confirmed", rule_confirmed);

export const regex = extend("regex", rule_regex);

export const between = extend("between", rule_between);

export const alpha = extend("alpha", rule_alpha);

export const integer = extend("integer", rule_integer);

export const digits = extend("digits", rule_digits);

export const alphaDash = extend("alpha-dash", rule_alpha_dash);

export const alphaNum = extend("alpha-num", rule_alpha_num);

export const length = extend("length", rule_length);

export const positive = extend("positive", {
  validate: validatorPositive,
  message: "Please enter positive number!",
});

export const credit = extend("credit-card", {
  validate: validatorCreditCard,
  message: "It is not valid credit card!",
});

export const password = extend("password", {
  validate: validatorPassword,
  message:
    "Your {_field_} must contain at least one uppercase, one lowercase, one special character and one digit",
});

export const url = extend("url", {
  validate: validatorUrlValidator,
  message: "URL is invalid",
});

// Install English, Uzbek and Russia localizations.
localize({
  oz: {
    messages: {
      alpha: "{_field_} maydon faqat harflardan iborat bo'lishi mumkin",
      alpha_dash:
        "{_field_} maydon faqat harflardan, raqamlardan va defisdan iborat bo'lishi mumkin",
      alpha_num:
        "{_field_} maydon harflardan va raqamlardan iborat bo'lishi mumkin",
      alpha_spaces:
        "{_field_}  maydon harflardan va probeldan iborat bo'lishi mumkin",
      between: "{_field_} maydon {min} va {max} orasida bo'lishi kerak",
      confirmed: "{_field_} maydon {target} bilan to'g'ri kelmayabdi",
      digits: "{_field_} maydon {length} uzunligida va son bo'lishi kerak",
      dimensions:
        "{_field_} maydon {width} pikselga {height} piksel bo'lishi kerak",
      email: "{_field_} maydon yaroqli elektron pochta bo'lishi kerak",
      excluded: "{_field_} maydon haqiqiy qiymat bo'lishi kerak",
      ext: "{_field_} maydon haqiqiy fayl bo'lishi kerak. ({args})",
      image: "{_field_} maydon rasm bo'lishi kerak",
      oneOf: "{_field_} maydon yaroqli qiymat bo'lishi kerak.",
      integer: "{_field_} maydon butun son bo'lishi kerak",
      length: " {_field_} maydon uzunligi {length} bo'lishi kerak",
      max: "{_field_} maydon {length} belgidan oshmasligi kerak",
      max_value: "{_field_} maydon {max} dan yoki undan kam bo'lishi kerak",
      mimes: "{_field_} maydon yaroqli fayl turi bo'lishi kerak. ({args})",
      min: "{_field_} maydon {length} belgidan kam bo'lmasligi kerak",
      min_value: "{_field_} maydon {min} dan yoki undan katta bo'lishi kerak",
      numeric: "{_field_} maydon son bo'lishi kerak",
      regex: "{_field_} maydon xato formatda",
      required: "{_field_} maydon to'ldirilishi shart",
      required_if: "{_field_} maydon to'ldirilishi shart",
      size: "{_field_} maydon {size}KB dan kam bo'lmasligi kerak",
      double: "{_field_} maydon yaroqli o'n xonali son bo'lishi kerak",
    },
    names: {
      email: "Электронная почта",
      password: "Пароль",
    },
    fields: {
      password: {
        min: "{_field_} слишком короткий, вы хотите, чтобы вас взломали?",
      },
    },
  },

  en: {
    messages: {
      ...en.messages,
    },
    names: {
      email: "Электронная почта",
      password: "Пароль",
    },
    fields: {
      password: {
        min: "{_field_} слишком короткий, вы хотите, чтобы вас взломали?",
      },
    },
  },

  ru: {
    messages: {
      ...ru.messages,
    },
    names: {
      email: "Электронная почта",
      password: "Пароль",
    },
    fields: {
      password: {
        min: "{_field_} слишком короткий, вы хотите, чтобы вас взломали?",
      },
    },
  },
});
// ////////////////////////////////////////////////////////
// NOTE:
// Quasar validation for reference only
// Remove this note once development is finished and make sure to
// to convert all of them in veevalidate version
// ////////////////////////////////////////////////////////

// export const required = (val) => {
//   return (val && val.length > 0) || '*Field is required'
//}

// export const required_obj = (obj) => {
//   if (obj === null || obj === undefined) return '*Field is required'
//   return (Object.entries(obj).length > 0 && obj.constructor === Object) || '*Field is required'
// }

// export const no_blank_spaces_arr = (arr) => {
//   return arr.every(val => (val.trim() && val.trim().length > 0)) || 'Blank Spaces are not allowed'
// }

// export const url = val => {
//   // If blank return
//   if (val === undefined || val === null || val.length === 0) return true

//   // Used
//   // https://stackoverflow.com/questions/4314741/url-regex-validation

//   // Other
//   // https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
//   // https://www.w3resource.com/javascript-exercises/javascript-regexp-exercise-9.php
//   // https://www.geeksforgeeks.org/how-to-validate-url-using-regular-expression-in-javascript/

//   /* eslint-disable no-useless-escape */
//   const re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/
//   /* eslint-enable no-useless-escape */
//   return re.test(val) || 'URL is invalid'
// }

// export const date = val => {

//   // If blank return
//   if (val === undefined || val === null || val.length === 0) return true

//   // https://github.com/quasarframework/quasar/blob/dev/ui/src/utils/patterns.js
//   return /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(val) || 'Date is invalid'
// }

// export const max = (val, max) => {

//   // If blank return
//   if (val === undefined || val === null) return true

//   return val.length <= max || `More than ${max} characters are not allowed`
// }

// export const max_arr = (val, max) => {
//   return val.length <= max || `More than ${max} values are not allowed`
// }

// export const min = (val, min) => {

//   // If blank return
//   if (val === undefined || val === null || val.length === 0) return true

//   return val.length >= min || `Minimum ${min} characters are required`
// }

// export const num_range = (val, min, max) => {

//   // If blank return
//   if (val === undefined || val === null || val.length === 0) return true

//   const msg = 'Value is invalid'
//   if (min === null) return val <= max || msg
//   else if (max === null) return val >= min || msg
//   else return (val >= min && val <= max) || msg
// }
