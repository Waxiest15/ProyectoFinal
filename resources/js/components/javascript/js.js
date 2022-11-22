const $input = document.querySelector("age");
const BIRTHNUMBER_ALLOWED_CHARS_REGEXP = /[0-9\/]+/;
$input.addEventListener("keydown", event => {
  if (!BIRTHNUMBER_ALLOWED_CHARS_REGEXP.test(event.key)) {
    event.preventDefault();
  }
});