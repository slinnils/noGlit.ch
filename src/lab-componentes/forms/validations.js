export function isEmail(value) {
  return value.includes("@");
}

export function isNotEmpty(inputValue) {
  return inputValue.trim().length > 0;
}

export function doesMatch(password, confirmPassword) {
  if (password.trim().length > 0 && confirmPassword.trim().length > 0)
    return password === confirmPassword;
}

export function isTooShort(value){
    return value.trim().length < 6
}
