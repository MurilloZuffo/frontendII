let destino = document.querySelector("#destino")
let nomePessoa = document.querySelector("#nomePessoa")
let data = document.querySelector("#dataViagem")
let imagem = document.querySelector("#vurl")
let coment =document.querySelector("#observacao")


btnEnviar.addEventListener("click",(event)=> {

    var card = document.createElement("div")
    card.classList.add("cards")
    document.body.appendChild(card)
  
    card.innerHTML = 
    `
    <h1>${destino.value}</h1>
    <div><img src="${imagem.value}" alt="${destino.value}"></div>
    <h2>${nomePessoa.value}</h2>
    <h3>${data.value}</h3>
    <p>${observacao.value}</p>
    
    `
    event.preventDefault()
});
