!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);



   var modalsButtons = document.querySelectorAll('.js-open-modals'),
       overlay      = document.querySelector('.js-overlay-modals'),
       closeButtons = document.querySelectorAll('.js-modals-close');




      function openModal(e) {
         var modalsElem = document.querySelector('.modals[data-modals="1"]');
         modalsElem.classList.add('active');
      };




   closeButtons.forEach(function(item){

      item.addEventListener('click', function(e) {
         var parentmodals = this.closest('.modals');

         parentmodals.classList.remove('active');
         overlay.classList.remove('active');
      });

   }); 

    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;

        if (key == 27) {

            document.querySelector('.modals.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
        };
    }, false);


    overlay.addEventListener('click', function() {
        document.querySelector('.modals.active').classList.remove('active');
        this.classList.remove('active');
    });




function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });




    

    function promiseAfterTimeout(seconds) {
        return new Promise(function (resolve) {
          setTimeout(() => resolve(), seconds*1000);
        });
      }
      
      function rotateWheel(degr) {
        let wheel = document.querySelector('.wheel');
        wheel.style.transform = 'rotate('+degr+'deg)';
        return promiseAfterTimeout(7);
      }
      
      function randomDegrees() {
        let randomFloat = Math.random()*36000;
        let descreetDegrees = Math.round(randomFloat / 60) * 60;
        return descreetDegrees;
      }
      
      function getCurrentColor(currentDegrees) {
        let numbers = ['4', '3', '2', '1', '5', '6'];
        let segmentCount = parseInt(currentDegrees/60);
        let segmentShift = segmentCount % numbers.length;
        return numbers[segmentShift];
      }
      
      function launchSpin() {
        currentRotation += randomDegrees();
        
        rotateWheel(currentRotation)
          .then(() => {
            let winColor = getCurrentColor(currentRotation);
            let result = document.querySelector('#result');
            result.innerHTML = winColor;
            
            setTimeout(openModal, 1000);
          });
      }
      
      let currentRotation = 0;
      let spinButton = document.querySelector('.spin');
      let spinButtonMore = document.querySelector('.spinMore');
      spinButton.addEventListener('click', launchSpin);
      spinButtonMore.addEventListener('click', launchSpin);