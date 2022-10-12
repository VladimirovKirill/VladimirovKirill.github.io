function CalculatedPrice() {

    let Price = document.getElementsByName("Price");
    let Count = document.getElementsByName("Count");
    let Result = document.getElementById("Result");

    let toPrice = Price[0].value;
    let toCount = Count[0].value;

    let toCountMatch = toCount.match(/^\d+$/);
    let toPriseMatch = toPrice.match(/^\d+$/);

    if (toCountMatch !== null && toPriseMatch !== null) {
    result.innerHTML = parseInt(Price[0].value) * parseInt(Count[0].value);
    }

    else if (toCountMatch !== null && toPriseMatch === null ){
    result.innerHTML = "Введите цену товара!";
    }

    else if (toCountMatch === null && toPriseMatch !== null) {
      result.innerHTML = "Введите количество товара!";
    }

    else if (toCountMatch === null && toPriseMatch === null) {
      result.innerHTML = "Некорректно заполненная форма, пожалуйста, проверьте вписанное и повторите попытку снова!";
    }

    return false;
  }

 function onClick() {
    alert("Рассчитано");
  }

  window.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");
    let b = document.getElementById("calculateResult");
    b.addEventListener("click", onClick);
  });
