---
layout: post
excerpt: Blog
title: 'Operadores Aritméticos em C#'
description: 'Descobre como se trabalha com operadores aritméticos na linguagem de programação C#. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'c#, csharp, operadores aritméticos, operadores, aritméticos, publicação'
date: 2021-11-08
categories: [C#]
---

Nesta publicação aprende-se a trabalhar com operadores aritméticos para que se possa usar esses mesmos conhecimentos e assim evoluir.

`+` | Adição
`-` | Subtração
`*` | Multiplicação
`/` | Divisão
`%` | Resto

```csharp
using System;

namespace Base {
  class OperadoresAritmeticos {
    public void Run() {
      Console.WriteLine("Adição: " + (10 + 10)); // Adição: 20
      Console.WriteLine("Subtração: " + 10.5 - 5.5 - 4.5); // Subtração: 0,5
      Console.WriteLine("Multiplicação: " + -10 * 2); // Multiplicação: -20
      Console.WriteLine("Divisão: " + 10 / 10); // Divisão: 1
      Console.WriteLine("Resto: " + 8 % 2); // Resto: 0
    }
  }
}
```

Não te esqueças de [assistir ao vídeo](https://youtu.be/x-xdi7NRJDs){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/20211108/arithmetic-operators-in-csharp/){:target="\_blank"}.

### _Happy coding!_
