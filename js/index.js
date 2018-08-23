var h1Elements = document.getElementsByTagName("h1");

window.onload = function() {
         //  alert(navigator.userAgent);
           if (navigator.userAgent.indexOf("Firefox") > 0) {
               for(var i = 0; i < h1Elements.length; i++) {
                  h1Elements[i].style.color = "#fff";
               }
           }
         }
