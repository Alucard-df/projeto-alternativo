function dados(){
    var result = document.getElementById("result");

    var dados = {
        'nome'    : document.getElementById('nome').value,
        'endereco': document.getElementById('endereco').value,
        'telefone': document.getElementById('telefone').value,
        'email'   : document.getElementById('email').value,
        'dtnasc'  : document.getElementById('dtnasc').value
    };

    result = alert( 'Nome:               ' + dados.nome     + 
                    '\n' +
                    'Endereço:           ' + dados.endereco + 
                    '\n' +
                    'Telefone:           ' + dados.telefone +
                    '\n' + 
                    'Email:              ' + dados.email    +
                    '\n' + 
                    'Data de Nascimento: ' + dados.dtnasc);

}