o index.html o link do css estava href="style.css" mas o arquivo se chama estilo.css, então corrigido: href="estilo.css".
o id total também estava com dois "ll" e o js fica procurando 'total', o certo é id="total", com isso o total não vai atualizar.
No script.js, o const quantidade = 0; mas depois o codigo faz quantidade++, e o const não vai ser alterado. O certo é let quantidade = 0;.
o desconto estava if (quantidade > 3), mas a regra é 3 ou mais. com 3 items o desconto não aplicava. O correto é if (quantidade >=3).
Em estilos.css, cor botao estava colour: white; que não existe em css, o certo é color: white;.
