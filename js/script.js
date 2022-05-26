

function menu(){
    document.getElementById('menu').style.display = 'block';
    document.getElementById('showcase').style.display = 'none';
    
}
function cerrar(){
    document.getElementById('showcase').style.display = 'block';
    document.getElementById('menu').style.display = 'none';
}

/*COLLAPSE FAQS*/
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
/*TERMINA COLLAPSE DE FAQS */
/*ANIMACIONES */
$(document).ready(function() {
  ScrollToInit();
  ActiveSectionNavigation();
  InitWaypointAnimations({
      offset: "60%",
      animateClass: "wp-animated",
      animateGroupClass: "wp-animated-group"
  });
  InitCounterWayPointAnimation();
});
function ScrollToInit() {
  $(document).on("click", "a[href^='#']", function(event) {
      var $anchor = $(this);
      $("html, body").stop().animate({
          scrollTop: $($anchor.attr("href")).offset().top
      }, 1500, "easeInOutExpo");
      event.preventDefault();
  });
}
function ActiveSectionNavigation() {
  function getNavItemsMap() {
      const navItemsMap = $("#main-nav").find(".nav-item").map((index, item) => {
          const $item = $(item);
          const name = $item.find(".nav-link").attr("href").substring(1);
          return {
              key: name,
              val: $item
          };
      })
      .toArray()
      .reduce((map, obj) => {
          map[obj.key] = obj.val;
          return map;
      }, {});

      return navItemsMap;
  }
  function deactivateCurrentNavItem() {
      $("#main-nav").find(".nav-item.active").removeClass("active");
  }
  const navItemsMap = getNavItemsMap();
  $("section").each((index, element) => {
      const $element = $(element);
      const sectionName = $element.attr("id");
      if(sectionName in navItemsMap) {
          
          $element.waypoint((direction) => {
              if(direction === "down") {
                  deactivateCurrentNavItem();
                  navItemsMap[sectionName].addClass("active");
              }
          },{
              offset: "50%"
          });
          
          $element.waypoint((direction) => {
              if(direction === "up") {
                  deactivateCurrentNavItem();
                  navItemsMap[sectionName].addClass("active");
              }
          },{
              offset: "-20%"
          })
      }
  });
}
function InitCounterWayPointAnimation() {
  $('.counter').each(function () {
      var $this = $(this);
      var stop = parseInt($this.text().replace(/,/g, ""));
      $this.text(0);
      $this.waypoint(function (direction) {
          animateNumbers($this, 0, stop);
          this.destroy();
      },{
          triggerOnce: true,
          offset: "80%"
      });
  });  
}
function animateNumbers(element, start, stop, commas, duration, ease) {
  var $this = element;
  commas = (commas === undefined) ? true : commas;
  $({value: start}).animate({value: stop}, {
      duration: duration == undefined ? 4000 : duration,
      easing: ease == undefined ? "swing" : ease,
      step: function() {
          $this.text(Math.floor(this.value));
          if (commas) { $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); }
      },
      complete: function() {
         if (parseInt($this.text()) !== stop) {
             $this.text(stop);
             if (commas) { $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); }
         }
      }
  });
}
/*TERMINA ANIMACIONES */

function enviar(){
    document.getElementById('mensaje').style.display = 'block';
    document.getElementById('suscripcion').style.display = 'none';
}



//CAMBIAR IMAGEN CON EL HOVER
/*
window.addEventListener('load', dire5, false);
function dire5() {      
    var imagen = document.getElementById('plan_5');
    imagen.addEventListener('mouseover', peligro, false);
    imagen.addEventListener('mouseout', restaurar, false);
}
function restaurar(){
    var imagen = document.getElementById('plan_5').src = "img/Plan_5.gif";
}
function peligro() {
    var imagen = document.getElementById('plan_5').src = "img/dire-5.png";
}*/
//DIRÉ ILIMITADO
/*
window.addEventListener('load', direIlimitado, false);
function direIlimitado() {    
    var imagen = document.getElementById('plan_ilimitado');
    imagen.addEventListener('mouseover', peligro2, false);
    imagen.addEventListener('mouseout', restaurar_ilimitado, false);
}
function restaurar_ilimitado(){
    var imagen = document.getElementById('plan_ilimitado').src = "img/Plan_Ilimitado.gif";
}
function peligro2() {
    var imagen = document.getElementById('plan_ilimitado').src = "img/dire-ilimitado.png";
}
//DIRÉ 8
window.addEventListener('load', dire8, false);
function dire8() {
    var imagen = document.getElementById('plan_8');
    imagen.addEventListener('mouseover', peligro3, false);
    imagen.addEventListener('mouseout', restaurar_8, false);
}
function restaurar_8(){
    var imagen = document.getElementById('plan_8').src = "img/Plan_8.gif";
}
function peligro3() {
    var imagen = document.getElementById('plan_8').src = "img/dire-8.png";
}*/