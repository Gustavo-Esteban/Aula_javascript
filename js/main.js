
// Variaveis
// var nome = "Gustavo Esteban";
// var idade = 22;
// var idade2 = 10;
// var frase = "japao e o melhor time do mundo";
// alert(nome +" tem " +idade + " anos ");
// alert (idade + idade2)
// console.log(nome);
// console.log(idade);
// console.log(idade + idade2);
// console.log(idade - idade2);
// console.log(idade * idade2);
// console.log(idade / idade2);
// console.log(frase.replace("japao", "brasil"));
// console.log(frase.toLocaleUpperCase());

// //Array
// // var lista = ["uva", "pera", "laranja"];
// // console.log(lista[1]);
// // lista.push("mamao");
// // lista.pop("pera");
// // console.log(lista.length);
// // console.log(lista.reverse());
// // console.log(lista.toString());
// // console.log(lista.join(" - "));
//
// // var fruta = {nome: "uva", cor:"verde"};
// // console.log(fruta);
// // console.log(fruta.cor);
// // console.log(fruta.nome);
//
// var frutas = [{nome: "uva", cor:"verde"}, {nome: "mamao", cor:"laranja"}];
// console.log(frutas);
// console.log(frutas[1].cor);
// console.log(frutas[1].nome);
// console.log(frutas[0].cor);
// console.log(frutas[0].nome);

//condicionais e lacos de repeticao
// var idade = prompt("Qual sua idade");
// if(idade >= 18){
//     alert(" Maior de idade")
// } else {
//     alert("Menor de idade")
// }
//
// var count = 0;
// while (count <= 5) {
//     console.log(count);
//     //count = count + 1;
//     count++;
// };
//
// var count;
// for (count=0; count <=5; count++){
//     console.log(count)
// };
//
// var d = new Date();
// alert(d.getMonth()+1);
// alert(d.getMinutes());

//função

// function soma(n1, n2){
//     return n1 + n2
// };

// alert(soma(5, 10));

// function setReplace (frase, nome, novo_nome){
//     return frase.replace(nome, novo_nome)
// };

// alert(setReplace("vai Japão", "Japão", "Brasil"));

// var validar = 0;
// function validaIdade (idade){
//      validar;
//     if(idade >= 18){
//         validar = true;
//     }else{
//         validar = false;
//     }
//     return validar;
// }

// var idade = prompt("Qual a sua idade?");
// console.log(validaIdade(idade));

//manipulação de elementos

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar<b>";
    //alert("Obrigado por clicar")
}

function redirect(){
    window.open("https://www.crunchyroll.com/pt-br/one-piece/episode-715-the-manly-duel-seors-elegy-of-love-681833");
    //window.location.href = "https://www.crunchyroll.com/pt-br/one-piece/episode-715-the-manly-duel-seors-elegy-of-love-681833";
}

function trocar(elemento){
    elemento.innerHTML = "<b>Obrigado por passar o mouse<b>";
    //document.getElementById("mousemove").innerHTML = "<b>Obrigado por passar o mouse<b>";
    //alert("trocar texto")
}

function voltar(elemento){
    elemento.innerHTML = "<b>Passe o mouse aqui<b>";
    //document.getElementById("mousemove").innerHTML = "<b>Passe o mouse aqui<b>";

}

function load(){
    alert("pagina carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}






