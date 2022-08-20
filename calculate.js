var flag = 0
var oldValue
var newNum
var math

function btnClickclear(valC) {
    document.getElementById("screen").value = valC
}
function btnOperation(opr) {
    flag = 1
    oldValue = document.getElementById("screen").value
    if (opr == "+") {
        math = 1
    } else if (opr == "-") {
        math = 2
    } if (opr == "*") {
        math = 3
    } if (opr == "/") {
        math = 4
    }
}
function equalClick() {
    if (math == "1") {
        var newValue = document.getElementById("screen").value
        var oldNum = parseFloat(oldValue)
        newNum = parseFloat(newValue)
        var res = oldNum + newNum
        document.getElementById("screen").value = res
        math = 0

    } if (math == "2") {
        var newValue = document.getElementById("screen").value
        var oldNum = parseFloat(oldValue)
        newNum = parseFloat(newValue)
        var res = oldNum - newNum
        document.getElementById("screen").value = res
        math = 0
    } if (math == "3") {
        var newValue = document.getElementById("screen").value
        var oldNum = parseFloat(oldValue)
        newNum = parseFloat(newValue)
        var res = oldNum * newNum
        document.getElementById("screen").value = res
        math = 0
    } if (math == "4") {
        var newValue = document.getElementById("screen").value
        var oldNum = parseFloat(oldValue)
        newNum = parseFloat(newValue)
        var res = oldNum / newNum
        document.getElementById("screen").value = res
        math = 0
    }

}
function btnClick(val) {
    if (flag == "1") {
        document.getElementById("screen").value = val;
        flag = 0
    } else {
        document.getElementById("screen").value = document.getElementById("screen").value + val
    }
}
