async function buscaEndereco() {
    try {

    let consultaCEP = await fetch('https://viacep.com.br/ws/13004400/json/')
    let consultaCEPConvertida = await consultaCEP.json();
        if (consultaCEPConvertida.erro) {
            throw Error('CEP não existente!');
        }
    console.log(consultaCEPConvertida);

    } catch (e) {
        console.log(e);
    }
}




buscaEndereco();