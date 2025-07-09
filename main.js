import './assets/scss/all.scss';
import * as bootstrap from "bootstrap";
// import "./node_modules/bootstrap/dist/js/bootstrap.bundle.js"
console.log('main.js有載入');

// 訂單明細 下拉式選單Icon切換
const arrorIcons = document.querySelectorAll("[data-bs-toggle='collapse']");
arrorIcons.forEach((btn)=>{
  btn.addEventListener("click", function(){
    const arrowIcon = this.querySelector("#arrIcon");
    console.log(arrowIcon);
    if(arrowIcon.classList.contains("bi-caret-down-fill")){
      arrowIcon.classList.remove("bi-caret-down-fill");
      arrowIcon.classList.add("bi-caret-up-fill");
    }else{
      arrowIcon.classList.remove("bi-caret-up-fill");
      arrowIcon.classList.add("bi-caret-down-fill");
    }
  });
})

// 原生 BS 的 Tooltip 
const tooltipTris = document.querySelectorAll('[data-bs-toggle="tooltip"]');
[...tooltipTris].forEach(colorDot => new bootstrap.Tooltip(colorDot));

// 選擇寄送方式顯示表單
const radioShipHome = document.querySelector("#radioShipHome");
const shipInfo = document.querySelector(".shipInfo");
const radioShip711 = document.querySelector("#radioShip711");
const store711Info = document.querySelector("#store711Info");

const changeShipRadio = () => {
  console.log("切換寄送方式");

  if(radioShipHome.checked === true){
    shipInfo.classList.remove("d-none");
    shipInfo.classList.add("d-block");
    store711Info.classList.add("d-none");
  }else if(radioShip711.checked === true){
    store711Info.classList.remove("d-none");
    store711Info.classList.add("d-block");
    shipInfo.classList.add("d-none");
  }
};

changeShipRadio();

if (radioShipHome && radioShip711) {
  radioShipHome.addEventListener("change", changeShipRadio);
  radioShip711.addEventListener("change", changeShipRadio);
}


