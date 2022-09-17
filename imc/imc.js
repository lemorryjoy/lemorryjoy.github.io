let sex = document.querySelector('#sexo')
let alt = document.querySelector('input#altura')
let pes = document.querySelector('input#peso')
let ida = document.querySelector('input#idade')
let res = document.querySelector('span#resposta')
let resp = document.querySelector('span#resp')
function somar() {
    let altura = Number(alt.value)
    let peso = Number(pes.value)
    let sexo = sex.sex.value
    let imcc = peso/(altura*altura)
    let imc = imcc.toFixed(1)
    if (sexo == 'H') {
        if (imc < 20.7) {
            resp.style.color = ('yellow')
            resp.innerHTML = 'MAGREZA<br><br>'
            res.innerHTML = `Com base na sua no seu IMC de ${imc} você esta a baixo do peso.`
        } else if (imc >= 20.7 && imc < 26.4) {
            resp.style.color = ('green')
            resp.innerHTML = 'NORMAL<br><br>'
            res.innerHTML = `Com base no seu IMC de ${imc} você esta com o peso normal.`
        } else if (imc >= 26.5 && imc < 27.8) {
            resp.style.color = ('yellow')
            resp.innerHTML = 'SOBREPESO<br><br>'
            res.innerHTML = `Com base no seu IMC de ${imc} você esta com sobrepeso.`
        } else if (imc >=27.9 && imc < 31.1) {
            resp.style.color = ('red')
            resp.innerHTML = 'OBESIDADE 1<br><br>'
            res.innerHTML = `Com base no seu IMC de ${imc} voce esta no inicio de obesidade.`
        } else if (imc >=31.2){
            resp.style.color = ('red') 
            resp.innerHTML = 'OBESIDADE 2<br><br>'
            res.innerHTML = `Com base no seu IMC de ${imc} voce esta obeso.`
        }
    }
    if (sexo == 'M') {
        if (imc < 19.1) {
            resp.style.color = ('yellow')
            resp.innerHTML = 'MAGREZA<br><br>'
            res.innerHTML = `Com base na sua no seu IMC de ${imc} você esta a baixo do peso.`
        } else if (imc >= 19.1 && imc < 25.8) {
            resp.style.color = ('green')
            resp.innerHTML = 'NORMAL<br><br>'
            res.innerHTML = `Com base no seu IMC de ${imc} você esta com o peso normal.`
        } else if (imc >= 25.9 && imc < 27.3) {
            resp.style.color = ('yellow')
            resp.innerHTML = 'SOBREPESO<br><br>'
            res.innerHTML = `Com base no seu IMC de ${imc} você esta com sobrepeso.`
        } else if (imc >=27.4 && imc < 32.3) {
            resp.style.color = ('red')
            resp.innerHTML = 'OBESIDADE 1<br><br>'
            res.innerHTML = `Com base no seu IMC de ${imc} voce esta no inicio de obesidade.`
        } else if (imc >=32.4){
            resp.style.color = ('red') 
            resp.innerHTML = 'OBESIDADE 2<br><br>'
            res.innerHTML = `Com base no seu IMC de ${imc} voce esta obeso.`
        }
        }
    }
  

   