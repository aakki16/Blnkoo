/*!
 * Blnkoo  v1.1.0 (https://blnkoo.com/)
 * Copyright 2024-2024 The Blnkoo Authors
 * Licensed under MIT (https://github.com/aakki16/blnkoo/LICENSE)
*/

/** Copy Js **/
(function (){
  'use strict';
  
  var txtBtnClass = 'text-to-copy';
  var btnClassName = 'copy-btn';
  var allowingButtonTextToChange = true;
  var afterCopyText = {
    desktop: 'Copy Again',
    iPad: "Now tap the text, then 'Copy'",
    iPhoneOriPod: "Now tap 'Copy'",
    oldSafari: 'Press Command + C to copy',
    notSupported: 'Please copy manually',
  };
  var sets = {};
  var regexBuilder = function(prefix){
    return new RegExp(prefix + '\\S*');
  };
  
  window.addEventListener('DOMContentLoaded', function(){
    var texts = Array.prototype.slice.call(
      document.querySelectorAll('[class*=' + txtBtnClass + ']')
    ); 
    var buttons = Array.prototype.slice.call(
      document.querySelectorAll('[class*=' + btnClassName + ']')
    );
    var classNameFinder = function(arr, regex, namePrefix){
      return arr.map(function(item){
        return item.className.match(regex) ? item.className.match(regex)[0].replace(namePrefix, '') : false;
      })
      .sort();
    };
    sets.texts = classNameFinder(
      texts,
      regexBuilder(txtBtnClass),txtBtnClass
    );
    sets.buttons = classNameFinder(
      buttons,
      regexBuilder(btnClassName),btnClassName
    );
    var matches = sets.texts.map(function(ignore, index) {
      return sets.texts[index].match(sets.buttons[index]);
    });
    var throwErr = function(err) {
      throw new Error(err);
    };
    var iPhoneORiPod = false;
    var iPad = false;
    var oldSafari = false;
    var navAgent = window.navigator.userAgent;
    
    if(/^((?!chrome).)*safari/i.test(navAgent) && !/^((?!chrome).)*[0-9][0-9](\.[0-9][0-9]?)?\ssafari/i.test(navAgent)){
      oldSafari = true;
    }
    if (navAgent.match(/iPhone|iPod/i)){
      iPhoneORiPod = true;
    } else if(navAgent.match(/iPad/i)){
      iPad = true;
    }
    
    var clipboard = function(btn, text){
      var copyBtn = document.querySelector(btn);
      var setCopyBtnText = function(textToSet){
        copyBtn.textContent = textToSet;
      };
      if(iPhoneORiPod || iPad){
        if(oldSafari){
          setCopyBtnText('Select text');
        }
      }
      if(copyBtn){
        copyBtn.addEventListener('click', function(){
          var oldPosX = window.scrollX;
          var oldPosY = window.scrollY;
          var originalCopyItem = document.querySelector(text);
          var dollyTheSheep = originalCopyItem.cloneNode(true);
          var copyItem = document.createElement('textarea');
          copyItem.style.opacity = 0;
          copyItem.style.position = 'absolute';
          var copyValue = dollyTheSheep.value || dollyTheSheep.textContent;
          copyItem.value = copyValue;
          document.body.appendChild(copyItem);
          if(copyItem){
            copyItem.focus();
            copyItem.selectionStart = 0;
            copyItem.selectionEnd = copyValue.length;
            try{
              document.execCommand('copy');
              copyItem.setAttribute('disabled', true);
              if(allowingButtonTextToChange){
                if(oldSafari){
                  if(iPhoneORiPod){
                    setCopyBtnText(
                      afterCopyText.iPhoneOriPod
                    );
                  }else if(iPad){
                    setCopyBtnText(afterCopyText.iPad);
                  }else{
                    setCopyBtnText(afterCopyText.oldSafari);
                  }
                }else{
                  document.activeElement.blur();
                  setCopyBtnText(afterCopyText.desktop);
                }
              }
            }catch (ignore){
              if(allowingButtonTextToChange){
                setCopyBtnText(afterCopyText.notSupported);
              }
            }
            originalCopyItem.focus();
              window.scrollTo(oldPosX, oldPosY);
              originalCopyItem.selectionStart = 0;
              originalCopyItem.selectionEnd = copyValue.length;
              copyItem.remove();
          }else{
            throwErr("You don't have an element with the class: '" + txtBtnClass + "'. Please check the cheval README.");
          }
        });
      }else{
        throwErr("You don't have a <button> with the class: '" + btnClassName + "'. Please check the cheval README.");
      }
    };
    matches.forEach(function(i) {
      return clipboard('.' + btnClassName + i, '.' + txtBtnClass + i);
    }); 
    try{
      window.clipboard = clipboard;
      module.exports = clipboard;
    } catch (ignore) {}
  });
})();

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
