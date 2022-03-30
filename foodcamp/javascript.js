function boxclick(objetoClicado, objetoSelecionado){
    
    const selecao = objetoSelecionado + ' .caixaSelecionada';
    const selecionadoAnterior = document.querySelector(selecao);

    // console.log(selecao);
    // console.log(objetoSelecionado)
    // console.log(objetoClicado)
    // console.log(selecionadoAnterior)


    if (selecionadoAnterior !== null){
        selecionadoAnterior.classList.remove('caixaSelecionada');
    }
    
    const caixa = document.querySelector(objetoClicado);
    caixa.classList.add('caixaSelecionada');
}
