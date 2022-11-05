let input = document.getElementById("input");
let result = document.getElementById("result");
let inputType = document.getElementById("inputType");
let resultType = document.getElementById("resultType");
let option_from, option_to;




input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

option_from = inputType.value;
option_to = resultType.value;

function myResult() {
    option_from = inputType.value;
    option_to = resultType.value;

    //milimiter
    if (option_from === "mm" && option_to === "km") {
        result.value = Number(input.value) * 0.001;

    } else if (option_from === "mm" && option_to === "cm") {
        result.value = Number(input.value) * 100;

    } else if (option_from === "mm" && option_to === "m") {
        result.value = input.value
    }
    else if (option_from === "mm" && option_to === "km") {
        result.value = Number(input.value) * 0.001;
    }
    else if (option_from === "mm" && option_to === "in") {
        result.value = Number(input.value) * 39.37;
    }
    else if (option_from === "mm" && option_to === "ft") {
        result.value = Number(input.value) * 3.281;
    }
    else if (option_from === "mm" && option_to === "yd") {
        result.value = Number(input.value) * 1.0936;
    }
    else if (option_from === "mm" && option_to === "mi") {
        result.value = Number(input.value) * 0.0006214;
    }
    else if (option_from === "mm" && option_to === "nmi") {
        result.value = Number(input.value) * 0.00054;
    }



    //Meter
    if (option_from === "m" && option_to === "km") {
        result.value = Number(input.value) * 0.001;

    } else if (option_from === "m" && option_to === "cm") {
        result.value = Number(input.value) * 100;

    } else if (option_from === "m" && option_to === "m") {
        result.value = input.value
    }
    else if (option_from === "m" && option_to === "km") {
        result.value = Number(input.value) * 0.001;
    }
    else if (option_from === "m" && option_to === "in") {
        result.value = Number(input.value) * 39.37;
    }
    else if (option_from === "m" && option_to === "ft") {
        result.value = Number(input.value) * 3.281;
    }
    else if (option_from === "m" && option_to === "yd") {
        result.value = Number(input.value) * 1.0936;
    }
    else if (option_from === "m" && option_to === "mi") {
        result.value = Number(input.value) * 0.0006214;
    }
    else if (option_from === "m" && option_to === "nmi") {
        result.value = Number(input.value) * 0.00054;
    }

    //Centimeter
    if (option_from === "cm" && option_to === "km") {
        result.value = Number(input.value) * 0.001;

    } else if (option_from === "cm" && option_to === "m") {
        result.value = Number(input.value) * 100;

    } else if (option_from === "cm" && option_to === "cm") {
        result.value = input.value
    }
    else if (option_from === "cm" && option_to === "km") {
        result.value = Number(input.value) * 0.001;
    }
    else if (option_from === "cm" && option_to === "in") {
        result.value = Number(input.value) * 39.37;
    }
    else if (option_from === "cm" && option_to === "ft") {
        result.value = Number(input.value) * 3.281;
    }
    else if (option_from === "cm" && option_to === "yd") {
        result.value = Number(input.value) * 1.0936;
    }
    else if (option_from === "cm" && option_to === "mi") {
        result.value = Number(input.value) * 0.0006214;
    }
    else if (option_from === "cm" && option_to === "nmi") {
        result.value = Number(input.value) * 0.00054;
    }


    //Kilometer
    if (option_from === "km" && option_to === "km") {
        result.value = Number(input.value) * 0.001;
        k
    } else if (option_from === "km" && option_to === "cm") {
        result.value = Number(input.value) * 100;

    } else if (option_from === "km" && option_to === "km") {
        result.value = input.value
    }
    else if (option_from === "km" && option_to === "m") {
        result.value = Number(input.value) * 0.001;
    }
    else if (option_from === "km" && option_to === "in") {
        result.value = Number(input.value) * 39.37;
    }
    else if (option_from === "km" && option_to === "ft") {
        result.value = Number(input.value) * 3.281;
    }
    else if (option_from === "km" && option_to === "yd") {
        result.value = Number(input.value) * 1.0936;
    }
    else if (option_from === "km" && option_to === "mi") {
        result.value = Number(input.value) * 0.0006214;
    }
    else if (option_from === "km" && option_to === "nmi") {
        result.value = Number(input.value) * 0.00054;
    }


}
