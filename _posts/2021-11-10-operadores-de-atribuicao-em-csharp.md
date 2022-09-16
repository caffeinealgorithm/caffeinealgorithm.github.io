---
layout: post
excerpt: Blog
title: 'Operadores de Atribuição em C#'
description: 'Descobre como se trabalha com operadores de atribuição na linguagem de programação C#. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'c#, csharp, operadores de atribuição, operadores, atribuição, publicação'
date: 2021-11-10
categories: [C#]
redirect_from:
  - /blog/20211110/operadores-de-atribuicao-em-csharp/
---

Nesta publicação aprende-se a trabalhar com operadores de atribuição para que se possa usar esses mesmos conhecimentos e assim evoluir.

`a += 2` | `a = a + 2`
`b -= 2` | `b = b - 2`
`c *= 2` | `c = c * 2`
`d /= 2` | `d = d / 2`
`e %= 2` | `e = e % 2`

```csharp
using System;

namespace Base {
  class OperadoresDeAtribuicao {
    public void Run() {
      int x = 2;

      x += 3;
      Console.WriteLine("x = x + 3: " + x); // x = x + 3: 5

      x -= 2;
      Console.WriteLine("x = x - 2: " + x); // x = x - 2: 3

      x *= 2;
      Console.WriteLine("x = x * 2: " + x); // x = x * 2: 6

      x /= 2;
      Console.WriteLine("x = x / 2: " + x); // x = x / 2: 3

      x %= 3;
      Console.WriteLine("x = x % 3: " + x); // x = x % 3: 0
    }
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/mKXawyHLewc" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/mKXawyHLewc){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/assignment-operators-in-csharp/){:target="\_blank"}.

### _Happy coding!_
