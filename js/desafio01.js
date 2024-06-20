// Desafio 01
let nome = prompt("Qual é o seu nome?");
let anoDeNascimento = parseInt(prompt("Em que ano você nasceu?"));
let anoAtual = 2024;
let idade = anoAtual - anoDeNascimento;

alert(`Você chama ${nome}, nasceu em ${anoDeNascimento} e tem ${idade} anos.`);