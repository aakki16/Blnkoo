/*!
 * Blnkoo  v1.1.0 (https://blnkoo.com/)
 * Copyright 2024-2024 The Blnkoo Authors
 * Licensed under MIT (https://github.com/aakki16/blnkoo/LICENSE)
*/

/** Alert **/
document.addEventListener('DOMContentLoaded', function(){
  var closeButtons = document.querySelectorAll('.alert-close');
    closeButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        var alert = this.parentElement;
        alert.style.opacity = '0';
        setTimeout(function() {
          alert.style.display = 'none';
        }, 300);
      });
    });
});
