

document.getElementById('startInteraction').addEventListener('click', function(){

    let nome=prompt("Por favor, insira seu nome");
    if(!nome){
        showMessage("Vocé precisa inserir um nome", "error");
    return;
    }

    let continuar= confirm(`Olá, ${nome}! Você quer continuar com a interação`);

    if(continuar){
        showMessage(`Ótimo, ${nome}! Vamos continuar!`, "success");
    }else{
        showMessage(`Ótimo, ${nome}! Vamos continuar!`, "success");
    }
})