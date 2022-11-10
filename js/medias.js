let form = document.getElementById("compras");
let btn = document.getElementById("gerar");
let relatorio = document.getElementById("relatorio")

let descricao = [];
let quantia = [];
let valor = [];
let desconto = []


let mostrarRel = "";

form.addEventListener('submit', function(event){
    event.preventDefault();

    
    descricao.push(form.descricao.value);
    quantia.push(form.quantia.value);
    desconto.push(Number(form.desconto.value));
    valor.push(Number(form.valor.value)); 
      

    console.log(descricao);
    console.log(quantia);
    console.log(valor);

    mostrarRel = "";

    let soma = 0;
    let total = 0;
    

    for(let i = 0 ; i < quantia.length; i++) {
        //soma = quantia[i] + valor[i] 
        p = (((quantia[i] * valor[i]) * desconto[i] )/100)
        let resultado =   (quantia[i] * valor[i])-p
        total += resultado  
       console.log(total);

        mostrarRel +=`<p>Item: ${descricao[i]} | QTD: ${quantia[i]} | Preço:R$ ${valor[i]}| Total:R$ ${resultado}| </p>`
    }

    relatorio.innerHTML ="";
    relatorio.innerHTML = mostrarRel;
    relatorio.innerHTML += `Total da compra ${total}`

    
    
})

btn.addEventListener('click', function(event){
    event.preventDefault();
    mostrarRel = "";

    let soma = 0;
    let total = 0;
    

    for(let i = 0 ; i < quantia.length; i++) {
        //soma = quantia[i] + valor[i] 
        p = (((quantia[i] * valor[i]) * desconto[i] )/100)
        let resultado =   (quantia[i] * valor[i])-p
        total += resultado  
       console.log(total);

        mostrarRel +=`<p>Item: ${descricao[i]} | QTD: ${quantia[i]} | Preço: ${valor[i]}| Total ${resultado}|  `
    }

    relatorio.innerHTML ="";
    relatorio.innerHTML = mostrarRel;
    relatorio.innerHTML += `total da compra ${total}`

})

