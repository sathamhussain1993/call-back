function countdown(num, callback) {
  if (num > 0) {
    document.getElementById('counter').textContent = num;
    setTimeout(function () {
      countdown(num - 1, callback);
    }, 1000);
  } else {
    document.getElementById('counter').textContent = '';
    document.getElementById('message').classList.remove('d-none');
    callback();
  }
}

countdown(10, function () {
  // Additional code can be added here if needed
});
