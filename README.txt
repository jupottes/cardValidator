Valide este cartão v2.0.0
Esta biblioteca verifica e informa se um número de cartão de crédito é válido.

Seguindo o algoritmo Luhn, ele retorna truese o número do cartão de crédito informado for válido e falsese não for.

Instalação
Depois de instalar o npm no computador (mais informações sobre isso aqui ), digite o seguinte código no terminal:

$npm install validate-this-card
Exemplo de uso
No Node.js, digite:

const lib = require('validate-this-card')
lib.cardValidator(36490102462661);
//true
Roteiro
Versão 3.0.0 (tba)
Após a detecção da marca do cartão de crédito, aceita um número apenas se tiver o tamanho do dígito padrão definido por cada marca;
Aceita mais de um argumento (número do cartão de crédito) de cada vez.
Versão 2.0.0 (publicado)
Mensagens do erro e README traduzidas para o inglês.
Versão 1.0.0 (publicado)
Retorna truese o número do cartão de crédito inserido for válido e falsese não for.
Projeto no Github
Valide este cartão