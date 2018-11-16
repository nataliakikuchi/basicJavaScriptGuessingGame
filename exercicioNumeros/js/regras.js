const rules = (function() {
  function isValidNumber(value) {
    if(!value) {
      return false;
    } else {
      return true;
    }
  }

  return {
    isValidNumber: isValidNumber,
  }
})();


