// obrigatório adicionar no codigo javascript - jquary
$ (document) .ready(function(){
    // adicionar o codigo javascript - jquary dentro do document.ready
    $('#btnclique').click(function(){
          // identificar o elemento para saber melhor sobre oq se trata como 'btn' para botao por exemplo
        // acao do click no elemento definido 
        alert('Bonjour belle classe!!!')
        var nome = prompt('Trapez votre nom');
        alert(nome);
        $('#mensagem').html('<div class="alert alert-warning" role="alert">' + nome +'</div>')
    }); 
});