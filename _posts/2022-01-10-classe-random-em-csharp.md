---
layout: post
excerpt: Blog
title: 'Classe Random em C#'
description: 'Descobre como se trabalha com a classe Random na linguagem de programação C#. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'c#, csharp, classe random, classe, random, publicação'
date: 2022-01-10
categories: [C#]
---

Nesta publicação aprende-se a trabalhar com a classe Random para que se possa usar esses mesmos conhecimentos e assim evoluir.

- esta classe representa um gerador de números pseudoaleatórios e esse mesmo produz uma sequência de números que atendem a certos requisitos estatísticos de aleatoriedade.

`Random (objeto).Next()` | Retorna um número aleatório e, dependendo da sua assinatura, é também capaz de retornar um número aleatório dentro de um determinado intervalo especificado

```csharp
using System;

namespace Base {
  class ClasseRandom {
    private Random aleatorio = new Random();

    public void Run() {
      Console.WriteLine($"Número aleatório até 20: {aleatorio.Next(21)}");
      Console.WriteLine($"Número aleatório entre 20 e 40: {aleatorio.Next(20, 41)}");

      for (int indice = 1; indice <= 10; indice++)
        Console.WriteLine($"Número aleatório #{indice}: {aleatorio.Next()}");
    }
  }
}

/*
  Número aleatório até 20: 8
  Número aleatório entre 20 e 40: 39
  Número aleatório #1: 1992885730
  Número aleatório #2: 1283322657
  Número aleatório #3: 226863787
  Número aleatório #4: 710252620
  Número aleatório #5: 1546596848
  Número aleatório #6: 1967725250
  Número aleatório #7: 1848910215
  Número aleatório #8: 1504322913
  Número aleatório #9: 1207920689
  Número aleatório #10: 571352235
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/8NxhJZz7UmU" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/8NxhJZz7UmU){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/random-class-in-csharp/){:target="\_blank"}.

### _Happy coding!_
