---
layout: post
excerpt: Blog
title: 'Argumentos em C#'
description: 'Descobre como se trabalha com argumentos na linguagem de programação C#. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'c#, csharp, argumentos, argumento, publicação'
date: 2021-12-03
categories: [C#]
---

Nesta publicação aprende-se a trabalhar com argumentos para que se possa usar esses mesmos conhecimentos e assim evoluir.

- os argumentos são como se fossem variáveis que recebem os seus valores (o seu conteúdo) quando a função é chamada;
- esses mesmos argumentos são considerados de variáveis locais porque só existem dentro da função;
- as variáveis locais são descartadas quando se retorna ao ponto de chamada.

```csharp
using System;

namespace Base {
  class Argumentos {
    public void Run() {
      DadosPessoais("Nelson Silva", 25, "Portuguesa");
      DadosPessoais("Larissa Fernandes", 37, "Brasileira");
    }

    public void DadosPessoais(string nome, int idade, string nacionalidade) {
      Console.WriteLine($"Nome: {nome}");
      Console.WriteLine($"Idade: {idade}");
      Console.WriteLine($"Nacionalidade: {nacionalidade}");
    }
  }
}

/*
  Nome: Nelson Silva
  Idade: 25
  Nacionalidade: Portuguesa
  Nome: Larissa Fernandes
  Idade: 37
  Nacionalidade: Brasileira
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/mrbE0tQqbtQ" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/mrbE0tQqbtQ){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/20211203/arguments-in-csharp/){:target="\_blank"}.

### _Happy coding!_
