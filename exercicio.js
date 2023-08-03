function triangulo(){
    let lado = Number(prompt("Qual o valor do lado do cubo?"))
    let valorCubo = ladoCubo*ladoCubo*ladoCubo
    alert(`o valor do volume do cubo é de ${valorCubo} m³`)
    textoCubo = document.querySelector('h2#cubo')
    textoCubo.textContent = `O valor do volume do cubo é de ${valorCubo} m³`
}
function trapezio(){
    
    let base1Trapezio = Number(prompt("Qual o valor da base maior do trapezio?"))
    let base2Tapezio = Number(prompt("Qual o valor da base menor do trapezio?"))
    let alturaTrapezio = Number(prompt("Qual o valor da altura do trapezio?"))
    let alturaPrisma = Number(prompt("Qual "))
    let valorTrapezio = ((raioCone*raioCone)*alturaCone)/3
    alert(`o valor do volume do cone é de ${valorCone} m³`)
    textoCone = document.querySelector('h2#cone')
    textoCone.textContent = `O valor do volume do cone é de ${valorCone} m³`
}
function piramide(){
    let ladoPiramide = Number(prompt("Qual o valor do lado da base da piramide?"))
    let alturaPiramide = Number(prompt("Qual o valor da altura da piramide"))
    let valorPiramide = ((ladoPiramide*ladoPiramide)*alturaPiramide)/3
    alert(`o valor do volume da piramide é de ${valorPiramide} m³`)
    textoCone = document.querySelector('h2#piramide')
    textoCone.textContent = `O valor do volume da piramide é de ${valorPiramide} m³`
}
function paralelepipedo(){
    let compParalelepipedo = Number(prompt("Qual o valor do comprimento do paralelepipedo?"))
    let largParalelepipedo = Number(prompt("Qual o valor da largura do paralelepipedo?"))
    let alturaParalelepipedo = Number(prompt("Qual o valor da altura do paralelepipedo"))
    let valorParalelepipedo = ((compParalelepipedo*largParalelepipedo)*alturaParalelepipedo)
    alert(`o valor do volume da paralelepipedo é de ${valorParalelepipedo} m³`)
    textoCone = document.querySelector('h2#paralelepipedo')
    textoCone.textContent = `O valor do volume da paralelepipedo é de ${valorParalelepipedo} m³`
}
function cilindro(){
    const pi = 3.14
    let raioCilindro = Number(prompt("Qual o valor do raio da base do cilindro?"))
    let alturaCilindro = Number(prompt("Qual o valor da altura do cilindro?"))
    let valorCilindro = ((pi*(raioCilindro*raioCilindro))*alturaCilindro)
    alert(`o valor do volume do cilindro é de ${valorCilindro} m³`)
    textoCone = document.querySelector('h2#cilindro')
    textoCone.textContent = `O valor do volume do cilindro é de ${valorCilindro} m³`
}
function circulo(){
    const pi = 3.14
    let raioCirculo = Number(prompt("Qual o valor do raio do circulo?"))
    let valorCirculo = (4*pi*(raioCirculo*raioCirculo*raioCirculoirculo))/3
    alert(`o valor do volume do circulo é de ${valorCirculo} m³`)
    textoCone = document.querySelector('h2#circulo')
    textoCone.textContent = `O valor do volume do circulo é de ${valorCirculo} m³`
}