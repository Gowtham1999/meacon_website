window.onscroll = function() {myFunction()};
        
        var header = document.getElementById("head");
        var sticky = header.offsetTop;
        
        function myFunction() {
          if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
          } else{
              header.classList.remove("sticky")
          }
        }

        AOS.init({
          duration: 1000,
        });