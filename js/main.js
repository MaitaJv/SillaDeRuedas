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
    review: "Que proyecto de mierda",
    foto: "user.png"
  },
  {
    nombre: "Santiago Garcia",
    id: 3,
    calificacion: 0,
    review: "Donde esta la silla? yo solo veo un robotito",
    foto: "user.png"
  },
  {
    nombre: "Francisco Sosa",
    id: 4,
    calificacion: 4,
    review: "Menuda silla",
    foto: "user.png"
  },
  {
    nombre: "Javier Maita",
    id: 5,
    calificacion: 5,
    review: "Que proyecto de mierda",
    foto: "user.png"
  }
]
let resenasContainer = document.querySelector("#carruselResenasContainer")
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
                        <div class="card">
                          <div class="card-title">
                            <img src="/media/icons/${foto}" height="75px" class="userImg" alt="user">
                            <h5 class="userName">${name}</h5>
                          </div>
                          <div class="card-info">
                            <div class="calificacion">
                              <h5>${calif}</h5>
                              <img src="/media/icons/star.png" height="16px" alt="estrellas">
                            </div>
                            <p class="review">${rev}</p>
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
  centerPadding: '20px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
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