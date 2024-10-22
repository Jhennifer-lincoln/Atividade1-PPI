import express from "express";

const host = "localhost";
const porta = 3000;

const app = express();

function paginaInicial(requisicao, resposta) {
    const tabuada = parseInt(requisicao.query.tabuada) || 1;
    const sequencia = parseInt(requisicao.query.sequencia) || 10;

    let resultado = `<h1>Tabuada do ${tabuada}</h1>`;

    resultado += `<ul>`;

    for (let i = 0; i <= sequencia; i++) {
        resultado += `<li>${tabuada} x ${i} = ${tabuada * i}</li>`;
    }

    resultado += `</ul>`;

    resposta.send(`
            <!DOCTYPE html>
            <html lang="pt-br">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Tabuada</title>
            </head>
            <body>
                ${resultado}
            </body>
            </html>
        `);
}

app.get("/", paginaInicial);

app.listen(porta, host, () => {
    console.log("Servidor em execução http://" + host + ":" + porta);
})