---
layout: post
excerpt: Blog
title: 'Argumentos Chave em C#'
description: 'Descobre como se trabalha com argumentos chave na linguagem de programação C#. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'c#, csharp, argumentos chave, argumentos, chave, argumento, publicação'
date: 2021-12-07
categories: [C#]
---

Nesta publicação aprende-se a trabalhar com argumentos chave para que se possa usar esses mesmos conhecimentos e assim evoluir.

- os argumentos chave têm como objetivo fazer com que não seja necessário chamar os argumentos da função ordenadamente.

```csharp
using System;

namespace Base {
  class ArgumentosChave {
    public void Run() {
      ImprimirABC(c: 1, a: 2, b: 3);
    }

    public void ImprimirABC(int a, int b, int c) {
      Console.WriteLine($"Valor de a: {a}");
      Console.WriteLine($"Valor de b: {b}");
      Console.WriteLine($"Valor de c: {c}");
    }
  }
}

/*
  Valor de a: 2
  Valor de b: 3
  Valor de c: 1
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/yXu3nkuCn1I" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/yXu3nkuCn1I){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/key-arguments-in-csharp/){:target="\_blank"}.

### _Happy coding!_
