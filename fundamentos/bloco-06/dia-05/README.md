## O que vamos aprender?

Construir páginas responsivas é uma habilidade fundamental para pessoas que trabalham com desenvolvimento _front-end_ hoje em dia. Quando falamos sobre páginas responsivas, o termo _"mobile first"_ - layout voltado para dispositivos móveis - vem à cabeça imediatamente.

Em teoria, é mais fácil construir um layout _"mobile first"_ quando você está começando o desenvolvimento, pois você não tem que se preocupar muito sobre funcionalidades complexas que podem entrar em telas grandes de _desktop_.

Você vai aprender como utilizar [media queries](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Media_Queries/Using_media_queries) para mostrar um _layout_ diferente em tamanhos de tela diferentes.

Exemplo:

- _Layout_ 1 para telas grandes: _desktops_, _laptops_, etc;
- _Layout_ 2 para telas médias: _tablets_, _telefones com tela grande (Samsung Note)_, etc ;
- _Layout_ 3 para telas pequenas: _smartphones_.

_Media queries_ são bastante utilizadas no design responsivo para mostrar diferentes _layouts_ para diferentes telas, dependendo do seu tamanho e/ou orientação. A principal razão para isso é que alguns _layouts_ podem parecer "estranhos" (ou até completamente quebrados) em telas muito estreitas, ou muito largas.


## Você será capaz de:

- Criar regras CSS específicas para serem aplicadas a dispositivos móveis;
- Construir páginas que alteram o seu _layout_ de acordo com a orientação da tela;


## Por que isso é importante?

**Responsividade** é uma abordagem de _design_ e _desenvolvimento_ que se adapta ao comportamento e ambiente do usuário baseado no tamanho, orientação e plataforma da sua tela. Em um cenário onde os tamanhos das telas que usamos variam drasticamente, ela é considerada uma habilidade indispensável para qualquer novo projeto.

É importante deixar claro que: _design_ **não é** _desenvolvimento_ e _desenvolvimento_ **não é** _design_.

As duas frentes trabalham juntas para criar um produto final, mas a forma como elas trabalham não necessariamente segue o mesmo padrão. É comum escolher entre um caminho estritamente voltado para _desktop_ ou para _mobile_ durante tanto o _design_ quanto o _desenvolvimento_, se isso for o **melhor para o projeto**.

Porém, podemos adotar uma abordagem flexível onde durante o _design_ o foco é no _desktop_, e durante o início do _desenvolvimento_ focar no _mobile_ primeiro.

Pode parecer contraintuitivo, mas essa abordagem flexível é mais comum do que você imagina. Quando acontece o design de uma página que vai atender usuários tanto de _desktop_ quanto de _mobile_, geralmente é melhor fazer o design da versão _desktop_ primeiro (porque no pior caso, esse será o único design da página). 😆

E então, quando chegar na fase de desenvolvimento, existem alguns benefícios de você inverter essa lógica e _codar_ o CSS focado para o _mobile_ primeiro:

**O tempo de carregamento para dispositivos móveis é menor**.

Pense em como o navegador interpreta o código _CSS_: de cima pra baixo. ⬇ 🤔

Isso significa que se você colocar o _CSS_ para a versão _desktop_ primeiro, o navegador do _mobile_ vai ter que interpretar **todo** esse _CSS_ antes dele chegar no código _CSS_ feito para o _mobile_ que é o que ele precisa renderizar.

Se você colocar o _CSS_ para _mobile_ primeiro, o navegador do usuário _mobile_ vai renderizar logo o primeiro _CSS_ que ele encontrar, resultando numa experiência mais rápida.

É importante lembrar que os usuários de dispositivos _mobile_ geralmente tem menos poder de processamento, menos banda de internet disponível... então qualquer otimização que reduza o tempo de carregamento para eles já é um ganho! 🏅

**Geralmente, resulta em menos linhas de código**.

Quando você toma uma abordagem de pensar no _mobile_ primeiro, o resultado geralmente são menos linhas de _CSS_ . Mas por quê?

Os elementos mostrados na versão _mobile_ tendem a ser blocos mais simples, o que significa que é muito mais fácil escrever CSS para customizar essa versão numa tela _desktop_ mais complexa, do que pegar um código complexo e cheio de detalhes feito para uma tela _desktop_ e ter que simplificá-lo para uma tela _mobile_ . 🧠

Faz muito mais sentido você começar com elementos simples que você pode ir adicionando detalhes e comportamentos conforme a necessidade, do que começar com elementos extensos e complexos que você possivelmente precisará de muito mais código para redefiní-los.