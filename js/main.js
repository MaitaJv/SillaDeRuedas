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
let resenasContainer = document.querySelector("#carruselResenasContainer")
let flechaSeccion2 = document.querySelector("#Seccion2Scroll")
let animate = document.querySelector("#animateJS")
let arduinoTitle = document.querySelector("#arduinoTitle")
let resena = document.createElement("div")

resena.setAttribute("id","carruselResenas")

resenas.forEach( element => {
  const {
    nombre: name,
    id: id,
    calificacion: calif,
    review: rev,
    foto: foto
  } = element

  resena.innerHTML +=`
  <div>
    <div class="cardContainer" >
      <div class="card">
        <div class="card-title">
          <img src="media/icons/${foto}" class="userImg" alt="user">
          <h5 class="userName">${name}</h5>
        </div>
        <div class="card-info">
          <div class="calificacion">
            <h5>${calif}</h5>
            <img src="media/icons/star.png" height="15px" alt="estrellas">
          </div>
          <p class="review">${rev}</p>
        </div>
      </div>
    </div>
  </div>
                        
`

resenasContainer.appendChild(resena);
})



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

$('#carruselResenas').slick({
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 949,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ],
  autoplay: true,
  autoplaySpeed: 5000
});

$(document).ready(function(){
  $('#animateCarrusel').slick({
    arrows: false,
    infinite: true,
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 1,
    slidesToScroll: 1
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
  layers: 8,
  isContentHidden:true,
  revealSettings: revealSettings
});

let arduinoTitleConfig = {
  bgColors: ['white'],
  duration: 600,
  delay: 100,
  direction: 'lr',
  onStart: function (contentEl, revealerEl) {
  },
  onHalfway: function (contentEl, revealerEl) {
      contentEl.style.opacity = 1;
  }
};

let arduinoTitleReveal = new RevealFx(arduinoTitle, {
  layers: 1,
  isContentHidden:true,
  revealSettings: arduinoTitleConfig
});

flechaSeccion2.addEventListener("click", ()=>{
  completado = false
  revealerEffect.reveal(revealSettings)
})

const mostrarArduino = ()=>{
  arduinoTitleReveal.reveal(arduinoTitleConfig)
  console.log("arduinoTitle");
}