/*!
 * Blnkoo  v1.1.0 (https://blnkoo.com/)
 * Copyright 2024-2024 The Blnkoo Authors
 * Licensed under MIT (https://github.com/aakki16/blnkoo/LICENSE)
*/

/** Alert **/
function alertdismiss(){
  var btndismiss = document.querySelectorAll('[data-dismiss]');
    btndismiss.forEach(function(button){
      button.addEventListener('click', function() {
      var targetId = button.getAttribute('data-dismiss');
      var targetElement = document.getElementById(targetId);
        if(targetElement){
          targetElement.style.display = 'none';
        }
      });
    });
  }
  function setupAlertDismiss(buttonId, elementId){
    var button = document.getElementById(buttonId);
    if(button){
      button.setAttribute('data-dismiss', elementId);
    }
    alertdismiss();
  }

// Set up the Alert Dismiss Button
setupAlertDismiss('alert-btn-dismiss', 'alert-dismiss');
    
