---
layout: post
excerpt: Blog
title: 'Funções em C#'
description: 'Descobre como se trabalha com funções na linguagem de programação C#. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'c#, csharp, funções, função, métodos, método, publicação'
date: 2021-11-30
categories: [C#]
---

Nesta publicação aprende-se a trabalhar com funções para que se possa usar esses mesmos conhecimentos e assim evoluir.

- uma função é um pedaço de código organizado e reutilizável que é usado para executar uma única ação relacionada;
- as funções proporcionam uma melhor modularidade e um alto grau de reutilização de código;
- não é possível criar uma função dentro de uma outra função.

```csharp
using System;

namespace Base {
  class Funcoes {
    public void Run() {
      DadosPessoais();
      DadosPessoais();
      DadosPessoais();
    }

    public void DadosPessoais() {
      Console.WriteLine("Nome: Nelson Silva");
      Console.WriteLine("Idade: 25");
      Console.WriteLine("Nacionalidade: Portuguesa");
    }
  }
}

/*
  Nome: Nelson Silva
  Idade: 25
  Nacionalidade: Portuguesa
  Nome: Nelson Silva
  Idade: 25
  Nacionalidade: Portuguesa
  Nome: Nelson Silva
  Idade: 25
  Nacionalidade: Portuguesa
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/61T_m11jCWs" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/61T_m11jCWs){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/20211130/functions-in-csharp/){:target="\_blank"}.

### _Happy coding!_
