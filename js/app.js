let appContainer = document.querySelector("#appContainer")

let btnLogIn
let userName
let userPassword
let wheelChairSign
let ChairNameTag
let ChairIP
let ChairData
let ChairsContainer
let SavesChairs
let NewChair

let ChairForm = false
let firstBool = false

let appMain = document.createElement("div")
let SillasContainer = document.createElement("div")
let NoSillas = document.createElement("p")

let sillas = []

appMain.setAttribute("class", "appMain")
SillasContainer.setAttribute("class2", "appMain")

const first = () =>{
    
    appMain.innerHTML = `
                            <div class="LogInContainer">
                                <h4 class="LogInTitle">INICIA SESIÓN</h4>
                                <div>
                                    <p class="LogInText">Nombre de usuario</p>
                                    <input type="text" id="useNameInput" class="offCanvasInput" placeholder="Username" autocomplete="off">
                                </div>
                                <div>
                                    <p class="LogInText">Contraseña</p>
                                    <input type="password" id="passwordInput" class="offCanvasInput" placeholder="*****">
                                </div>
                                <div>
                                    <button type="submit" class="btnLogIn" id="btnLogIn">Iniciar Sesión</button>
                                </div>
                            </div>
    `
    appContainer.appendChild(appMain);
    
    btnLogIn = document.querySelector("#btnLogIn")
    userName = document.querySelector("#useNameInput")
    userPassword = document.querySelector("#passwordInput")

    SavesChairs = JSON.parse(localStorage.getItem("ChairData"))
}

first()

const ChairFormulary = () => {

    appMain.innerHTML = `
                            <div class="ChairsContainer">
                                <h4 class="LogInTitle">Tus sillas</h4>
                                <div>
                                    <p class="LogInText">NameTag</p>
                                    <input type="text" id="ChairNameTag" class="offCanvasInput">
                                </div>
                                <div>
                                    <p class="LogInText">Direccion IP de la silla</p>
                                    <input type="text" id="ChairIP" class="offCanvasInput">
                                </div>
                                <div>
                                    <button class="btnLogIn" id="UploadChairData">Registrar Silla</button>
                                </div>
                            </div>
    `

    ChairNameTag = document.querySelector("#ChairNameTag")
    ChairIP = document.querySelector("#ChairIP")
    ChairData = document.querySelector("#UploadChairData")

    ChairData.addEventListener("click", () =>{
        console.log("ChairDataClick");
        
        let NameTag = ChairNameTag.value
        let IpAdress = ChairIP.value

        sillas =[{NameTag, IpAdress}, ...sillas]

        console.log(sillas)

        localStorage.setItem("ChairData", JSON.stringify(sillas))

        console.log(JSON.stringify(sillas));

        ChairView(sillas)
    })
}

const ChairView = () => {

    appMain.innerHTML = `
                            <div class="ChairsContainer">
                                <h4 class="LogInTitle">Tus sillas</h4>
                                <div id="ChairsContainer" class="Chairs">
                                    <div class="Chair">
                                        <div class="textCenter">
                                            <p class="TagName">Nombre</p>
                                        </div>
                                        <div class="textCenter">
                                            <p class="ip">Dirreccion IP</p>
                                        </div>

                                        <div class="textCenter">
                                            <p>Control</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button class="btnLogIn" id="NewChair">+</button>
                                </div>
                            </div>
    `

    appContainer.appendChild(appMain)

    ChairsContainer = document.querySelector("#ChairsContainer")
    NewChair = document.querySelector("#NewChair")

    if(sillas.length == 0){
        WithoutChairs()
        console.log(sillas.length)
    }else{
        WithChairs(sillas)
    }

    NewChair.addEventListener("click", () =>{
        ChairFormulary()
    })

}

const WithoutChairs = () =>{

    NoSillas.innerHTML =`Agrega Mas Sillas`
    ChairsContainer.appendChild(NoSillas)
    console.log(SillasContainer)
}

const WithChairs = (Chairs) =>{

    SillasContainer.innerHTML = ``

    Chairs.forEach(element => {

        const {
            NameTag: name,
            IpAdress: ip
        } = element

        SillasContainer.innerHTML += `  <div class="Chair">
                                            <p class="TagName">${name}</p>
                                            <div>
                                                <p class="ip">${ip}</p>
                                            </div>

                                            <div>
                                                <a href="http://${ip}" class="ChairLink" id="ChairLink">Manejar Silla</a>
                                            </div>
                                        </div>
        `
    })

    ChairsContainer.appendChild(SillasContainer);

}

btnLogIn.addEventListener("click", () =>{
    if((userName.value == "admin") && (userPassword.value == "admin")){
        console.log("click")
        ChairView()
    }
})

userPassword.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      btnLogIn.click();
    }
});

userName.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      btnLogIn.click();
    }
});