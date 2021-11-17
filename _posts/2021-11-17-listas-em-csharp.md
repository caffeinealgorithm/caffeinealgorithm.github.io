---
layout: post
excerpt: Blog
title: 'Listas em C#'
description: 'Descobre como se trabalha com listas na linguagem de programação C#. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'c#, csharp, listas, lista, publicação'
date: 2021-11-17
categories: [C#]
---

Nesta publicação aprende-se a trabalhar com listas para que se possa usar esses mesmos conhecimentos e assim evoluir.

- uma lista é um conjunto ordenado de valores e é bem mais fácil de manipular do que um array;
- os valores que compõem uma lista são chamados de elementos (tal como nos arrays).

```csharp
using System;
using System.Collections.Generic;
using System.Linq;

namespace Base {
  class Listas {
    public void Run() {
      List<string> cores = new List<string>();

      cores.Add("Azul");
      cores.Add("Verde");
      cores.Add("Amarelo");
      cores.Add("Vermelho");
      cores.Add("Laranja");

      cores.Remove("Laranja");
      cores.Reverse();
      cores.Sort();
      // cores.Clear();

      Console.WriteLine($"Número de cores: {cores.Count}"); // Número de cores: 4
      Console.WriteLine($"Primeira cor: {cores.First()}"); // Primeira cor: Amarelo
      Console.WriteLine($"Última cor: {cores.Last()}"); // Última cor: Vermelho
    }
  }
}
```

Não te esqueças de [assistir ao vídeo](https://youtu.be/Eov-gcwg9zc){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/20211117/lists-in-csharp/){:target="\_blank"}.

### _Happy coding!_
