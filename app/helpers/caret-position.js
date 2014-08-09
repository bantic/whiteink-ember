/* global $ */

export function setCaretToEnd(cssSelector) {
  var textLength = $(cssSelector).val().length;
  $(cssSelector)[0].setSelectionRange(textLength, textLength);
}

export function setCaretToEndInContenteditable(className) {
  var el, range, sel, textRange;
  el = document.getElementsByClassName(className)[0];
  el.focus();
  if (typeof window.getSelection !== "undefined" && typeof document.createRange !== "undefined") {
    range = document.createRange();
    range.selectNodeContents(el);
    range.collapse(false);
    sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  } else if (typeof document.body.createTextRange !== "undefined") {
    textRange = document.body.createTextRange();
    textRange.moveToElementText(el);
    textRange.collapse(false);
    textRange.select();
  }
}
