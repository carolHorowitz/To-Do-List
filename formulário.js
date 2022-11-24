

function novaTarefa() {

    const tarefa=document.getElementById("tarefa");
    
    if (tarefa.value =="") {
        alert("Digite uma tarefa!")
        return false
    }

    const lista=document.getElementById("minhaLista");

    const span=document.createElement("span")
    span.append(tarefa.value);
    

    const item=document.createElement("li");

    const excluir=document.createElement("button")
    const X=document.createTextNode("X")
    excluir.appendChild(X);

    item.append(span);

    item.append(excluir);
    
    lista.append(item);

    tarefa.value="";
   
    span.onclick = function() {
        span.classList.add("checked")
    }

    excluir.classList.add("excluir-itens")

    excluir.onclick=function() {
       item.remove()
    }
    
}

