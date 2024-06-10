// URL OF WEB-SITE
export const BASE_URL = 'https://backend-02zq.onrender.com';

// Regex
export const PHONE_REGEX = /^(\d{3}-)*\d{3}$/ // Требует - после каждого третьего числа
export const EMAIL_REGEX = /^[^@]+@\S+\.\S+$/ // Требует @ и дальше буквы
export const NAME_REGEX = /^[a-zA-Zа-яА-ЯёЁ]+$/; // Требует буквы

//REGULAR OF INPUTES
export const PHONE_REGULAR =/[^1-9-]/g; // Все символы кроме чисел от 1-9 и символ - т.е все символы удаляются
export const TEXT_REGULAR = /\d/g; // Числа, т.е все числа удаляются
