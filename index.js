const primo = document.getElementById('primo')
const parimpar = document.getElementById('parimpar')
const fatorial = document.getElementById('fatorial')
const quadrado = document.getElementById('quadrado')
const bhaskara = document.getElementById('bhaskara')

const menu = document.getElementById('menu')
const titulo = document.getElementById('titulo')

const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const input3 = document.getElementById('input3')
const resultButt = document.getElementById('resultButt')
const result = document.getElementById('result')
const resultText = document.getElementById('resultText')

titulo.onclick = () => {
    primo.style.display = 'none'
    parimpar.style.display = 'none'
    fatorial.style.display = 'none'
    quadrado.style.display = 'none'
    bhaskara.style.display = 'none'
    result.style.display = 'none'
    resultText.innerText = ''
    resultText.style.position = 'relative'

    menu.style.display = 'block'
}

/**
 * @param {HTMLElement} tohide
 * @param {HTMLElement} toshow
 */
function visibilitar(tohide, toshow) {
    tohide.style.display = 'none'
    toshow.style.display = 'block'

    toshow.appendChild(resultButt)
    resultButt.style.display = 'block'
    toshow.appendChild(result)
    result.style.display = 'block'
}

function primar() {
    visibilitar(menu, primo)
    primo.appendChild(input1)
    input1.style.display = 'block'

    resultButt.onclick = () => {
        let val = Number(input1.value)
        if (val) {
            for (let i = 2; i < val; i++) {
                if (val % i == 0) return resultText.innerText = 'Não é primo!'
            }
            resultText.innerText = 'É primo!'
        } else {
            resultText.innerText = 'Valor inválido!'
        }
        result.style
    }
}

function parImparar() {
    visibilitar(menu, parimpar)
    parimpar.appendChild(input1)
    input1.style.display = 'block'

    resultButt.onclick = () => {
        let val = Number(input1.value)
        if (val) {
            if (val % 2 == 0) resultText.innerText = 'É par!'
            else resultText.innerText = 'É impar!'
        } else {
            resultText.innerText = 'Valor inválido!'
        }
    }
}

function fatorialar() {
    visibilitar(menu, fatorial)
    fatorial.appendChild(input1)
    input1.style.display = 'block'

    resultButt.onclick = () => {
        let val = Number(input1.value)
        if (val) {
            resultText.innerText = factorial(val)
        } else {
            resultText.innerText = 'Valor inválido!'
        }
    }

    /**
     * @param {number} num
     * @returns {number}
     */
    function factorial(num) {
        if (num === 0) return 1
        else return num * factorial(num - 1)
    }
}

function quadradar() {
    visibilitar(menu, quadrado)
    quadrado.appendChild(input1)
    input1.style.display = 'inline-block'
    quadrado.appendChild(input2)
    input2.style.display = 'inline-block'

    resultButt.onclick = () => {
        let val = Number(input1.value), val2 = Number(input2.value)
        resultText.innerText = ''
        
        resultText.style.position = 'static'

        if (val && val2) {
            for (let i = val; i <= val2; i++) {
                resultText.innerText += ` ${i * i} | `
            }
        } else {
            resultText.innerText = 'Valor inválido!'
        }
    }
}
function bhaskarar() {
    visibilitar(menu, bhaskara)
    bhaskara.appendChild(input1)
    input1.style.display = 'inline-block'
    input1.style.width = '20%'
    bhaskara.appendChild(input2)
    input2.style.display = 'inline-block'
    input2.style.width = '20%'
    bhaskara.appendChild(input3)
    input3.style.display = 'inline-block'
    input3.style.width = '20%'  

    resultButt.onclick = () => {
        
        let a = Number(input1.value)
        let b = Number(input2.value)
        let c = Number(input3.value)

        let delta = Number((b * b) - 4 * a * c)

        if (delta > 0) {
            let x1 = Number((-b + Math.sqrt(delta)) / (a * 2))
            let x2 = Number((-b - Math.sqrt(delta)) / (a * 2))

            resultText.innerText = `X1 = ${x1}  X2 = ${x2}`
        }
        else {
            resultText.innerText = `Delta é negativo, então a equação não possui raizes reais`
        }
    }
}