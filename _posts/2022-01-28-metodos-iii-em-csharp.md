---
layout: post
excerpt: Blog
title: 'Métodos III em C#'
description: 'Descobre como se trabalha com dois métodos específicos (Remove() e Replace()) na linguagem de programação C#. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'c#, csharp, métodos, método, funções, função, publicação'
date: 2022-01-28
categories: [C#]
redirect_from:
  - /blog/20220128/metodos-iii-em-csharp/
---

Nesta publicação aprende-se a trabalhar com dois métodos específicos (`Remove()` e `Replace()`) para que se possa usar esses mesmos conhecimentos e assim evoluir.

`Remove()` | Retorna um novo conjunto caracteres, sendo que, esse mesmo conjunto começa a partir do índice e vai até ao determinado comprimento (a parte do comprimento é totalmente opcional)
`Replace()` | Retorna uma nova sequência, na qual, todas as ocorrências de uma determinada string são substituídas por uma outra string especificada

```csharp
using System;

namespace Base {
  class MetodosIII {
    private string abecedario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", nome = "Nelson | Silva";

    public void Run() {
      // Remove()
      Console.WriteLine($"Abecedário até à letra N: {abecedario.Remove(14)}");

      var indiceX = nome.IndexOf(' ');
      var indiceY = nome.IndexOf(' ', indiceX + 1);
      Console.WriteLine($"Nome: {nome.Remove(indiceX, indiceY - indiceX)}");

      // Replace()
      var lingProgPreferida = "A minha linguagem de programação preferida já foi o C#.";
      Console.WriteLine(lingProgPreferida.Replace("já foi", "é"));
    }
  }
}

/*
  Abecedário até à letra N: ABCDEFGHIJKLMN
  Nome: Nelson Silva
  A minha linguagem de programaçao preferida é o C#.
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/x1sAO_ePZdI" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/x1sAO_ePZdI){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/methods-iii-in-csharp/){:target="\_blank"}.

### _Happy coding!_
