---
layout: post
excerpt: Blog
title: 'is e as em C#'
description: 'Descobre como se trabalha com o is e as na linguagem de programação C#. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'c#, csharp, is e as, is, as, publicação'
date: 2022-01-05
categories: [C#]
---

Nesta publicação aprende-se a trabalhar com o is e as para que se possa usar esses mesmos conhecimentos e assim evoluir.

- o is serve para verificar se um determinado objeto é compatível com um determinado tipo;
- a as funciona como se fosse uma operação de conversão e se tal conversão não for possível é retornado o valor null.

```csharp
using System;

namespace Base {
  class IsEAs {
    private string comunidade = "Caffeine Algorithm", nome = string.Empty;
    private object _nome = "Nelson Silva";

    public void Run() {
      if (comunidade is string)
        Console.WriteLine("O atributo \"comunidade\" é do tipo string.");
      else
        Console.WriteLine("O atributo \"comunidade\" não é do tipo string.");

      nome = _nome as string;

      if (nome is string)
        Console.WriteLine($"Nome: {nome}");
    }
  }
}

/*
  O atributo "comunidade" é do tipo string.
  Nome: Nelson Silva
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/2kgNJVpXB40" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/2kgNJVpXB40){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/is-and-as-in-csharp/){:target="\_blank"}.

### _Happy coding!_
