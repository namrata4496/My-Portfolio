function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 10;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  
  
  /*var coll = document.getElementsByClassName("collapsible");
  var i;
  
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "flex";
      }
    });
  }*/

  function nam(){
    var col=document.querySelector(".collapsible");
    cc=document.querySelector(".menu");
    c=document.querySelector(".namrata")
    if (cc.style.display === "flex") {
      cc.style.display = "none";
      col.style.backgroundColor="white";
      c.style.display="block";
    } else {
      cc.style.display = "flex";
      col.style.backgroundColor="#dbd9eb";
      c.style.display="none";
    }    
  }


    function namo(){
      var col=document.querySelector(".collapsible_about");
      cc=document.querySelector(".menu");
      c=document.querySelector(".nami")
      if (cc.style.display === "flex") {
        cc.style.display = "none";
        col.style.backgroundColor="white";
        c.style.display="block";
      } else {
        cc.style.display = "flex";
        col.style.backgroundColor="#dbd9eb";
        c.style.display="none";
      }   
  }