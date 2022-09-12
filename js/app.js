const appContainer = document.querySelector("#appContainer")
const btnLogIn = document.querySelector("#btnLogIn")
const userName = document.querySelector("#useNameInput")
const userPassword = document.querySelector("#passwordInput")

let appMain = document.createElement("div")

appMain.setAttribute("class", "appMain")

appMain.innerHTML = `
                        <div>
                            <h4 class="LogInTitle">Inicia Sesión</h4>
                            <div>
                                <p class="LogInText">Nombre de usuario</p>
                                <input type="text" id="useNameInput" class="offCanvasInput">
                            </div>
                            <div>
                                <p class="LogInText">Contraseña</p>
                                <input type="password" id="passwordInput" class="offCanvasInput">
                            </div>
                            <button type="submit" class="btnLogIn" id="btnLogIn">Iniciar Sesión</button>
                        </div>
`
appContainer.appendChild(appMain);

function app() {
    appMain.innerHTML = `
                        <h4 class="LogInTitle">Ubicacion Actual:</h4>
                        <div class="controller">
                            <div class="gridController">
                                <button class="btnController btnControllerUp" id="btnUp">
                                    <img src="/media/icons/flechaAR.png" height="75px" alt="Izquierda">
                                </button>
                                <button class="btnController btnControllerLeft" id="btnLeft">
                                    <img src="/media/icons/flechaIZ.png" height="75px" alt="Izquierda">
                                </button>
                                <button class="btnController btnControllerRight" id="btnRight">
                                    <img src="/media/icons/flechaDER.png" height="75px" alt="Izquierda">
                                </button>
                            </div>
                            <div class="gridController">
                                <button class="btnController" id="btnLeft">
                                    <img src="/media/app/bano-publico.png" height="75px" alt="Izquierda">
                                </button>
                                <button class="btnController" id="btnUp">
                                    <img src="/media/app/cocina.png" height="75px" alt="Izquierda">
                                </button>
                                <button class="btnController" id="btnRight">
                                    <img src="/media/app/habitacion.png" height="75px" alt="Izquierda">
                                </button>
                                <button class="btnController" id="btnLeft">
                                    <img src="/media/app/jardin.png" height="75px" alt="Izquierda">
                                </button>
                                <button class="btnController" id="btnUp">
                                    <img src="/media/app/mesa-de-comedor.png" height="75px" alt="Izquierda">
                                </button>
                                <button class="btnController" id="btnRight">
                                    <img src="/media/app/puerta.png" height="75px" alt="Izquierda">
                                </button>
                            </div>
                        </div>
    `
    appContainer.appendChild(appMain);
}


document.querySelector("#btnLogIn").addEventListener("click", () =>{
    if((document.querySelector("#useNameInput").value == "admin") && (document.querySelector("#passwordInput").value == "admin")){
        console.log("click")
        app()
    }
})