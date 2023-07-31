async function buscaEndereco(cep) {
    try {

    let consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    let consultaCEPConvertida = await consultaCEP.json();
        if (consultaCEPConvertida.erro) {
            throw Error('CEP não existente!');
        }
    console.log(consultaCEPConvertida);
    return consultaCEPConvertida;

    } catch (e) {
        console.log(e);
    }
}



let ceps = ['13024430','01001000'];
let conjuntoCeps = ceps.map(valores => buscaEndereco(valores));
console.log(conjuntoCeps)
Promise.all(conjuntoCeps).then(r => console.log(r));