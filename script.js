var campotxt = document.getElementById('txtTarefa')
var result = document.getElementById('res')
var vetor = []
var lista = document.getElementById('listatarefas')

const maiuscula = (p) => p[0].toUpperCase()+p.slice(1,p.length)


function adicionar() {
lista.innerHTML=''   



if(campotxt.value==''){
    window.alert('Erro, não é possivel adicionar itens vazios a lista!')
}


else{

 vetor.push(campotxt.value)

for(c = 0; c<vetor.length; c++){
    
    var item = document.createElement('li')
    lista.appendChild(item)
    
    item.innerHTML=maiuscula(vetor[c])
    
    }
    
    campotxt.value=''
    campotxt.focus()
}  
}







