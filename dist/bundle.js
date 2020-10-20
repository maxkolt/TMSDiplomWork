(() => {
    function getNumber(e) {
        let a = document.getElementById("input");
        switch (e) {
            case 1:
                a.value += "1";
                break;
            case 2:
                a.value += "2";
                break;
            case 3:
                a.value += "3";
                break;
            case 4:
                a.value += "4";
                break;
            case 5:
                a.value += "5";
                break;
            case 6:
                a.value += "6";
                break;
            case 7:
                a.value += "7";
                break;
            case 8:
                a.value += "8";
                break;
            case 9:
                a.value += "9";
                break;
            case 0:
                a.value += "0"
        }
    }

    function clearScreen() {
        document.getElementById("input").value = ""
    }

    function getOperand(e) {
        let a = document.getElementById("input");
        switch (e) {
            case"+":
                a.value += "+";
                break;
            case"-":
                a.value += "-";
                break;
            case"/":
                a.value += "/";
                break;
            case".":
                a.value += ".";
                break;
            case"*":
                a.value += "*";
                break;
            case"(":
                a.value += "(";
                break;
            case")":
                a.value += ")"
        }
    }

    function backspace() {
        let e = document.getElementById("input"), a = e.value;
        a.length > 0 && (a = a.substring(0, a.length - 1), e.value = a)
    }

    function compute() {
        let input_var = document.getElementById("input");
        return input_var.value = eval(input_var.value)
    }
})();