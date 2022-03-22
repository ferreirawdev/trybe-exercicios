## O que vamos aprender?

Você já aprendeu como instalar, configurar e utilizar os principais _matchers_ do _Jest_, certo?
Agora você irá aprender como testar códigos assíncronos e como reaproveitar configurações entre testes, podendo separá-las por escopo.


## Você será capaz de:

- Escrever testes para códigos assíncronos utilizando `async/await`;
- Dividir as configurações dos seus testes, em blocos separados, por meio do uso de `describe`;


## Por que isso é importante?

- Códigos assíncronos são comuns em _JavaScript_, você certamente vai precisar escrevê-los com frequência, por exemplo, quando você realiza uma requisição para a API, além de consequentemente testá-los em casos de sucesso e falha.
- Repetir código é ruim, pois você pode se enganar ao tentar replicar exatamente o mesmo código, além de escrever mais do que precisa. Pensando neste problema, no conteúdo de hoje, você vai aprender algumas formas de configurar e escrever testes, evitando repetições e gerando um código mais limpo.
- Poder organizar melhor o ambiente de testes por meio da divisão em blocos, evitando repetição de código e facilitando na escrita e leitura dos testes.