let valores = [0, 1, 7, 4, 2, 9]
console.log(valores)
/*
for(let pos=0; pos<valores.length; pos++){
    console.log(`Aposição ${pos} tem o valor ${valores[pos]}`)
}
*/

for(let pos in valores){
    console.log(`Aposição ${pos} tem o valor ${valores[pos]}`)
}