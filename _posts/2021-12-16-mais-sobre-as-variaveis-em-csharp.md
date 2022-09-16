---
layout: post
excerpt: Blog
title: 'Mais sobre as Variáveis em C#'
description: 'Descobre como se trabalha com mais sobre as variáveis na linguagem de programação C#. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'c#, csharp, variáveis, variável, publicação'
date: 2021-12-16
categories: [C#]
redirect_from:
  - /blog/20211216/mais-sobre-as-variaveis-em-csharp/
---

Nesta publicação aprende-se a trabalhar com mais sobre as variáveis para que se possa usar esses mesmos conhecimentos e assim evoluir.

- é de relembrar que os vários tipos de varíaveis de que falamos até agora não são os únicos que existem e que temos muito por onde escolher;
- o object pode-se dizer que é o tipo de variável e não um tipo porque é a classe base de para todas as classes derivadas (o seu tipo de variável é detetado automaticamente e esse mesmo tipo pode ser alterado a qualquer altura);
- o dynamic corresponde a um tipo de variável dinâmico, ou seja, pode ser de qualquer tipo e pode também se alterar a qualquer altura como o object;
- o var é um tipo de variável implícito e esse mesmo tipo é determinado consoante o conteúdo da varíavel (existe a necessidade de a variável ser inicializada para se usar o var e não se pode alterar o seu tipo após essa mesma inicialização);
- o var é sem dúvida a melhor escolha e não penaliza o desempenho, já o object e o dynamic têm a desvantagem de que o desempenho acaba por ser menor e perde-se tempo enquanto o compilador verifca o nosso código (mas tal só se nota em aplicações com um tamanho considerável).

```csharp
using System;

namespace Base {
  class MaisSobreAsVariaveis {
    public void Run() {
      /*
        byte _byte = 255;
        sbyte _sbyte = 127;
        decimal _decimal = 10.0M;
        float _float = 10.0F;
        uint _uint = 4000000000;
        long _long = 9000000000000000000;
        ulong _ulong = 18000000000000000000;
        short _short = 32000;
        ushort _ushort = 65000;
      */

      var variavel = "Eu sou uma string.";
      Console.WriteLine($"Conteúdo inicial: {variavel}");
      Console.WriteLine($"Conteúdo final: {variavel}");
    }
  }
}

/*
  Conteúdo inicial: Eu sou uma string.
  Conteúdo final: Eu sou uma string.
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/uMbksPhe4m0" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/uMbksPhe4m0){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/more-about-variables-in-csharp/){:target="\_blank"}.

### _Happy coding!_
