let resenas = [
  {
    nombre: "Ivan Regueiro",
    id: 0,
    calificacion: 0,
    review: "Donde esta la silla? yo solo veo un robotito",
    foto: "user.png"
  },
  {
    nombre: "Gonzalo Galarza",
    id: 1,
    calificacion: 4,
    review: "Menuda silla",
    foto: "user.png"
  },
  {
    nombre: "Lautaro Zambella",
    id: 2,
    calificacion: 5,
    review: "es muy practico para gente que trabaja en casa",
    foto: "user.png"
  },
  {
    nombre: "Santiago Garcia",
    id: 3,
    calificacion: 0,
    review: "Me parece bastate copado",
    foto: "user.png"
  },
  {
    nombre: "Francisco Sosa",
    id: 4,
    calificacion: 4,
    review: "Un proyecto interesante",
    foto: "user.png"
  },
  {
    nombre: "Javier Maita",
    id: 5,
    calificacion: 5,
    review: "Proyecto innovador",
    foto: "user.png"
  }
]
let flechaSeccion2 = document.querySelector("#Seccion2Scroll")
let animate = document.querySelector("#animateJS")

$(document).ready(function(){
  $('#carruselTecnologias').slick({
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  });
});

$(document).ready(function(){
  $('#animateCarrusel').slick({
    arrows: false,
    infinite: true,
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  });
});

let completado = false

let revealSettings = {
  bgColors: ['black', 'black','black', 'black','black', 'black','black', 'black'],
  duration: 600,
  delay: 100,
  direction: 'lr',
  onStart: function (contentEl, revealerEl) {
  },
  onHalfway: function (contentEl, revealerEl) {
      contentEl.style.opacity = 1;
  },
  onComplete: function () {
      completado = true
      console.log(completado);
      mostrarArduino()
  }
};

let revealerEffect = new RevealFx(animate, {
  layers: 4,
  isContentHidden:true,
  revealSettings: revealSettings
});

flechaSeccion2.addEventListener("click", ()=>{
  completado = false
  revealerEffect.reveal(revealSettings)
})
