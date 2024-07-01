/*!
 * Blnkoo  v1.1.0 (https://blnkoo.com/)
 * Copyright 2024-2024 The Blnkoo Authors
 * Licensed under MIT (https://github.com/aakki16/blnkoo/LICENSE)
*/

/** Modal Function **/
export function modal(e){
  document.addEventListener('DOMContentLoaded', () => {
    const openModalBtn = document.getElementById('open-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const modalOverlay = document.getElementById('modal-overlay');
    openModalBtn.addEventListener('click', () => {
      modalOverlay.classList.add('show');
    });
    closeModalBtn.addEventListener('click', () => {
      modalOverlay.classList.remove('show');
    });
    window.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('show');
      }
    });
  });
}

/** Alert **/
/*function alertdismiss(){
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
setupAlertDismiss('alert-btn-dismiss', 'alert-dismiss');*/
