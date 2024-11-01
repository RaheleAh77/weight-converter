let weightInput = document.querySelector("#weight-converter");
let weightConvertedText = document.querySelector(".container-weight_text2>span");

weightInput.addEventListener("keydown", function (event) {
    let weightInputValue = weightInput.value;
    if(event.key === "Enter"){
        weightConvertedText.innerHTML = (weightInputValue * 0.45359).toFixed();
        setTimeout(() => {
            weightConvertedText.innerHTML = "";
            weightInput.value = "";
        }, 12000);
    }
});