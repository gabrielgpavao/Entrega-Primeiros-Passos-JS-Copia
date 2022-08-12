//NOME DO ALUNO
let nome = prompt("Insira o nome do aluno")
if (nome.length < 5) {
    alert("Nome Inválido. No mínimo 5 letras.")
}
let sobrenome = prompt("Insira o sobrenome do aluno")



//LISTA DE MATÉRIAS
let listaDeMaterias = ["Matemática", "Português", "Informática", "Geografia", "Inglês", "História", "Filosofia", "Sociologia", "Literatura", "Educação Física"]



//MATÉRIA/NOTA
let materiaMatematica = prompt("Digite a materia")
let notaMatematica = parseFloat(prompt("Qual a nota?"))
if (notaMatematica <= 0 || notaMatematica > 10) {
    alert("Valor inválido. Insira um número entre 0 e 10")
}

let materiaPortugues = prompt("Digite a materia")
let notaPortugues = parseFloat(prompt("Qual a nota?"))
if (notaPortugues <= 0 || notaPortugues > 10) {
    alert("Valor inválido. Insira um número entre 0 e 10")
}

let materiaInformatica = prompt("Digite a materia")
let notaInformatica = parseFloat(prompt("Qual a nota?"))
if (notaInformatica <= 0 || notaInformatica > 10) {
    alert("Valor inválido. Insira um número entre 0 e 10")
}

let materiaGeografia = prompt("Digite a materia")
let notaGeografia = parseFloat(prompt("Qual a nota?"))
if (notaGeografia <= 0 || notaGeografia > 10) {
    alert("Valor inválido. Insira um número entre 0 e 10")
}

let materiaIngles = prompt("Digite a materia")
let notaIngles = parseFloat(prompt("Qual a nota?"))
if (notaIngles <= 0 || notaIngles > 10) {
    alert("Valor inválido. Insira um número entre 0 e 10")
}

let materiaHistoria = prompt("Digite a materia")
let notaHistoria = parseFloat(prompt("Qual a nota?"))
if (notaHistoria <= 0 || notaHistoria > 10) {
    alert("Valor inválido. Insira um número entre 0 e 10")
}

let materiaFilosofia = prompt("Digite a materia")
let notaFilosofia = parseFloat(prompt("Qual a nota?"))
if (notaFilosofia <= 0 || notaFilosofia > 10) {
    alert("Valor inválido. Insira um número entre 0 e 10")
}

let materiaSociologia = prompt("Digite a materia")
let notaSociologia = parseFloat(prompt("Qual a nota?"))
if (notaSociologia <= 0 || notaSociologia > 10) {
    alert("Valor inválido. Insira um número entre 0 e 10")
}

let materiaLiteratura = prompt("Digite a materia")
let notaLiteratura = parseFloat(prompt("Qual a nota?"))
if (notaLiteratura <= 0 || notaLiteratura > 10) {
    alert("Valor inválido. Insira um número entre 0 e 10")
}

let materiaEducacaoFisica = prompt("Digite a materia")
let notaEducacaoFisica = parseFloat(prompt("Qual a nota?"))
if (notaEducacaoFisica <= 0 || notaEducacaoFisica > 10) {
    alert("Valor inválido. Insira um número entre 0 e 10")
}



//PRESENÇA
let presenca = parseInt(prompt("Qual a presença do Aluno?"))
if (presenca <= 0 || presenca > 10) {
    alert("Valor inválido. Insira um número entre 0 e 10")
}



//SOMA DAS NOTAS
let somaNota = notaMatematica + notaPortugues + notaInformatica + notaGeografia + notaIngles + notaHistoria + notaFilosofia + notaSociologia + notaLiteratura + notaEducacaoFisica



//MÉDIA DAS NOTAS
let mediaNota = somaNota/listaDeMaterias.length
if (mediaNota >= 8 && presenca >= 6) {
    alert(`A nota do aluno ${nome} ${sobrenome} é de ${mediaNota} e sua presença de ${presenca}: Aluno provado!`)
} else {
    alert(`A nota do aluno ${nome} ${sobrenome} é de ${mediaNota} e sua presença de ${presenca}: Aluno reprovado!`)
}