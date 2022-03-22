## O que vamos aprender?

Páginas da web não existem sozinhas. Elas carregam imagens, iframes, conteúdo ou recuperam todo tipo de informações de outros lugares que não seus próprios servidores. E depender de algo externo ao seu sistema para fazer algo traz uma problemática: e se o serviço do qual eu dependo sair do ar? E se os servidores dele estiverem lentos? O que acontece com minha página?

Em uma lógica normal, _sequencial_ de programação, sua página esperaria o serviço dar retorno ou voltar ao ar para continuar. Ou seja, a página ficaria quebrada, ou teria todo o seu carregamento freado em função de um problema totalmente fora do seu controle. Para lidar com esse problema e outros de natureza similar, existe um conceito que é muito poderoso e presente no **JavaScript**: a _assincronicidade_. Em vez de o programa ser carregado todo em sequência, uma linha após a outra, linhas que podem trazer esse tipo de problema podem "ficar carregando", enquanto o resto do seu programa executa normalmente. A execução dessa linha, a espera pela disponibilidade desse serviço, corre _paralelamente_ ao desenvolver do restante do código. É uma execução _assíncrona_. E isso tem muito poder.

Pareceu interessante?! Pois bem. Para começar, nesta aula você vai aprender quatro conceitos importantes:

- Operações assíncronas;
- `Callbacks`;
- Testes com `callbacks` utilizando o **Jest**;
- Setup and Teardown.


## Você será capaz de:

- Aplicar corretamente operações assíncronas;
- Utilizar `callbacks` corretamente;
- Utilizar o **Jest** para testar suas `callbacks`;
- Reaproveitar configurações para diversos testes por meio do uso de `beforeEach` e `afterEach`.


## Por que isso é importante?

Até então, você tem programado de uma forma basicamente similar à seguinte:

- Execute o passo `A`;
- Execute o passo `B`;
- Execute o passo `C`.

E você, naturalmente, espera que o passo `A` seja executado antes do `B`, e que o `B` seja executado antes do C.

Entretanto, você consegue ir além no **_JavaScript_**. 🚀

Suponha que você tenha uma operação `A` que gaste muito tempo, e que você tenha uma operação `B` em sequência que independe totalmente de `A`. `B` ter que esperar por `A` é um problema, haja vista que `B` não depende de forma alguma de `A`. Como você faz para contornar esse problema?

**Resposta: assincronicidade**

Com assincronicidade, a operação `A` começa a executar e, logo em seguida, `B` também, sem ter que esperar `A` terminar.

Essa forma de trabalho é natural, e você faz isso o tempo todo sem perceber! Um exemplo clássico: são 20h de uma segunda-feira, você está em casa com fome e decide pedir uma pizza. 🍕 Você fica esperando, sem fazer nada, enquanto a pizza não chega? Você pode fazer o que quiser nesse meio tempo, como escutar música ou ver vídeos no _YouTube_, por exemplo. E assim que a pizza chegar, você dedica seu tempo para poder jantar.
Nesse exemplo da pizza, o ato de pedir a pizza corresponde a uma operação assíncrona, e os atos de escutar música e ver vídeos no _YouTube_ são exemplos de operações que independem de pedir a pizza.

Além disso, você também vai aprender como reaproveitar códigos no Jest. Lembre-se que repetir código é ruim, pois você pode se enganar ao tentar replicar exatamente o mesmo código, além de escrever mais do que precisa. Pensando neste problema, no conteúdo de hoje, você vai aprender algumas formas de configurar e escrever testes, evitando repetições e gerando um código mais limpo.