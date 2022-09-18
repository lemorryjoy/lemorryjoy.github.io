let data = new Date()
let hora = data.getHours()
let msg = document.querySelector('.hora')
let img = document.querySelector('.img')
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 6 && hora <=12) {
    img.innerHTML = '<img src="dia.jpg" alt="">'
    document.body.style.backgroundColor = '#FFA500'

} else if (hora >= 13 && hora <= 18) {
    img.innerHTML = '<img src="tarde.jpg" alt="">'
    document.body.style.backgroundColor =  '#FFDAB9'

} else if (hora >= 19 ) {
    img.innerHTML = '<img src="noite.jpg" alt="">'
    document.body.style.backgroundColor = '#808080'

}
  
