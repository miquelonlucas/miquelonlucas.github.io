function boxclick(objetoClicado, objetoSelecionado){
    
    const selecao = objetoSelecionado + ' .caixaSelecionada';
    const selecionadoAnterior = document.querySelector(selecao);


    if (selecionadoAnterior !== null){
        selecionadoAnterior.classList.remove('caixaSelecionada');
    }
    
    const caixa = document.querySelector(objetoClicado);
    caixa.classList.add('caixaSelecionada');

}

function verify() {
    let prato = document.querySelector('#prato-row .caixaSelecionada');
    let bebida = document.querySelector('#bebida-row .caixaSelecionada');
    let sobremesa = document.querySelector('#sobremesa-row .caixaSelecionada');
    
    const cart = document.querySelector('.carrinho');
    
    if(prato !== null){
        if(bebida !== null){
            if(sobremesa !== null){
                cart.classList.add('carrinho-cheio');
            }
        }
    }
}

setInterval(verify,300);
