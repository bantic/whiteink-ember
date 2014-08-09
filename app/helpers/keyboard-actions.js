export function actionOnKey(keyCode, callback) {
  if(event.keyCode === keyCode) {
    event.preventDefault();
    callback();
  }
}

export function actionOnKeys(keyCodeArray, callback) {
  keyCodeArray.map(function(keyCode) {
    actionOnKey(keyCode, callback);
  });
}

export function keyPressed(keyCode) {
  if (event.keyCode === keyCode) {
    event.preventDefault();
    return true;
  }
}

export function keysPressed(keyCodeArray) {
  return keyCodeArray.any(function(keyCode) {
    return keyPressed(keyCode);
  });
}
