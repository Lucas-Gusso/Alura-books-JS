async function buscaEndereco(cep) {
    let mensagemErro = document.getElementById('erro')
    mensagemErro.innerHTML = "";
    try {

    let consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    let consultaCEPConvertida = await consultaCEP.json();
        if (consultaCEPConvertida.erro) {
            throw Error('CEP não existente!');            
        }
    
        let cidade = document.getElementById('cidade');
        let logradouro = document.getElementById('endereco');
        let estado = document.getElementById('estado');
        let bairro = document.getElementById('bairro');

        cidade.value = consultaCEPConvertida.localidade;
        logradouro.value = consultaCEPConvertida.logradouro;
        estado.value = consultaCEPConvertida.uf;
        bairro.value = consultaCEPConvertida.bairro;


    console.log(consultaCEPConvertida);
    return consultaCEPConvertida;

    } catch (e) {   
        mensagemErro.innerHTML = `<p>CEP inválido</p>`;     
        console.log("CEP inválido");
    }
}

let cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));