
var display = document.getElementById("display")

function adicionar(tecla) {
    display.value = display.value + tecla
}

function limpar() {
    display.value = ""
}

function calcular() {
    display.value = eval(display.value)
}

function save() {
    memoria = display.value
}

function memo() {
    display.value = ""
    display.value = memoria
}