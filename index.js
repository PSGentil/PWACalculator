const primo = document.getElementById("primo")
const parimpar = document.getElementById("parimpar")
const fatorial = document.getElementById("fatorial")
const quadrado = document.getElementById("quadrado")
const menu = document.getElementById("menu")
const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")
const result = document.getElementById("result")

/**
 * @param {HTMLElement} tohide
 * @param {HTMLElement} toshow
 */
function visibilitar(tohide, toshow) {
    tohide.style.display = "none"
    toshow.style.display = "block"
    toshow.appendChild(result)
}

function primar() {
    visibilitar(menu, primo)

    primo.appendChild(input1)
    input1.style.display = "block"


}

function parImpar() {
    visibilitar(menu, parimpar)
}

function fatorialar() {
    visibilitar(menu, fatorial)
}

function quadradar() {
    visibilitar(menu, quadrado)
}