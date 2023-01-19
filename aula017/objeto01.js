let amigo = {nome: 'José', sexo:'M', peso:85.4, engordar(p=0){
    console.log('Emgordou')
    this.peso += p
}}

amigo.engordar(0.6)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)