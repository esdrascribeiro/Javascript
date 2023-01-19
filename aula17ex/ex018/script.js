var resul = document.getElementById('resul')
let nums = []

function addnum(){
    var num = document.getElementById('num')
    var list = document.getElementById('list')

    if (String(num.value) != '' && num.value <= 100 && num.value > 0 && nums.indexOf(num.valeu) < 0){
        
        list.innerHTML += `<option>Valor número ${num.value} adicionado</option`
        nums.push(num.value)


        resul.innerHTML = ''
        

    }else{
        alert('Digite um Número Válido')
    }
    num.value = ''
    num.focus()
}

function final(){
    var s = 0
   

    if (nums.length != 0){
        var mn = nums[0]
        var mm = 0
        resul.innerHTML += `<p>Ao todo temos ${nums.length} números cadastrados.</p>`

        for(let pos in nums){
            if (mn > nums[pos]){
                mn = nums[pos]
            }
            if (mm < nums[pos]){
                mm = nums[pos]
            }
            s += Number(nums[pos])
        }

        m = s / nums.length

        resul.innerHTML += `<p>O maior valor digitado foi ${mm}</p>`
        resul.innerHTML += `<p>O menor valor digitado foi ${mn}</p>`
        resul.innerHTML += `<p>Somando todos os valores temos ${s}</p>`
        resul.innerHTML += `<p>A média dos valores digitados é ${m}</p>`

     }else{
        alert('Adicione Um Número')
    }
}
