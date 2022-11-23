

function novaTarefa() {
    const lista=document.getElementById("minhaLista");
    const tarefa=document.getElementById("tarefa").value;
    const span=document.createElement("span")
    span.append(tarefa);
    console.log(span)

    const item=document.createElement("li");
    const excluir=document.createElement("button")
    const X=document.createTextNode("X")
    excluir.appendChild(X);

    item.append(span);
    item.append(excluir);
    
    lista.append(item);

    span.onclick = function() {
        
        span.classList.add("checked")
    }
    excluir.onclick=function() {
        item.remove()
    }
    
}

