---
layout: post
excerpt: Blog
title: 'Operadores de Comparação em C#'
description: 'Descobre como se trabalha com operadores de comparação na linguagem de programação C#. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'c#, csharp, operadores de comparação, operadores, comparação, publicação'
date: 2021-11-19
categories: [C#]
---

Nesta publicação aprende-se a trabalhar com operadores de comparação para que se possa usar esses mesmos conhecimentos e assim evoluir.

`==` | Igual
`!=` | Diferente
`>` | Maior
`<` | Menor
`>=` | Maior e igual
`<=` | Menor e igual
`&&` | E
`||` | Ou

```csharp
using System;

namespace Base {
  class OperadoresDeComparacao {
    public void Run() {
      int x = 10;
      int y = 20;

      if (x <= y || x == y) {
        Console.WriteLine("Esta condição é verdadeira.");
      }
      else {
        Console.WriteLine("Esta condição é falsa.");
      }
    }
  }
}

// Esta condição é verdadeira.
```

Não te esqueças de [assistir ao vídeo](https://youtu.be/Vg8cCo5bIic){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/20211119/comparison-operators-in-csharp/){:target="\_blank"}.

### _Happy coding!_
