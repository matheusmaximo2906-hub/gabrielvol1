async function enviarWebhook() {

    const mensagem = document.getElementById("mensagem").value;

    if(!mensagem) {
        alert("Escreva algo, querido.");
        return;
    }

    const webhook = "https://discord.com/api/webhooks/1479665632420298773/obf22PKfJ_9ugX9OIrLNxlSz7GW0xMIPGCQHfAOe0tN2C1Y0Q2cZvkeo0EklS_ouWkT5";

    fetch(webhook, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            content: mensagem
        })
    })
    .then(() => {
        alert("Mensagem escrita!");
        document.getElementById("mensagem").value = "";
    })
    .catch(() => {
        alert("Erro ao enviar.");
    });

}
