function contar(){
    var ini = document.getElementById('ini')
    var fim = document.querySelector('input#fim')
    var pas = document.getElementById('pas')
    var cont = document.getElementById('cont')
    var ini = Number(ini.value)
    var fim = Number(fim.value)
    var pas = Number(pas.value)

    if(fim == 0){
        cont.innerText = 'Imposivel Contar'
    }else{
        if (pas == 0 ){
            alert('Passo Inválido Considerando PASSO 1')
            pas = 1
        }
        cont.innerHTML = "<p>Contando <br></p>"
        for (var n = ini; n <= fim; n += pas){
            cont.innerText += `${n}👉`
            if (n == fim){
                cont.innerText += `🏁`
            }
        }
    }
    
    
    
}
