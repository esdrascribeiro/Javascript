function gtabuada(){
    var parc = document.querySelector('input#parc')
    var tabu = document.getElementById('tabu')
    var parc = parc.value
    if (String(parc) != ''){
        tabu.innerHTML = ''
        for (var p = 0; p <= 10; p += 1){
            tabu.innerHTML += `<option>${parc} x ${p} = ${parc * p}</opition>`
        }
    } else{
        alert('ERRO')
    }
}

