---
layout: post
excerpt: Blog
title: 'Classe Queue em C#'
description: 'Descobre como se trabalha com a classe Queue na linguagem de programação C#. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'c#, csharp, classe queue, classe, queue, fila, publicação'
date: 2022-01-25
categories: [C#]
---

Nesta publicação aprende-se a trabalhar com a classe Queue para que se possa usar esses mesmos conhecimentos e assim evoluir.

- esta classe é basicamente uma fila (devido a sua forma de funcionamento) e representa uma coleção do tipo FIFO (First In - First Out), ou seja, o primeiro valor que entrar será sempre o primeiro a sair;
- esses valores que compõem uma queue são chamados de elementos.

`Queue (objeto).Enqueue()` | Adiciona um objeto na parte inferior da queue
`Queue (objeto).Dequeue()` | Remove e retorna o objeto na parte superior da queue
`Queue (objeto).Peek()` | Retorna o objeto na parte superior da queue sem o remover

```csharp
using System;
using System.Collections.Generic;

namespace Base {
  class ClasseQueue {
    private Queue<int> fila = new Queue<int>();
    private const int Multiplicador = 10;
    private int numero = 1;

    public void Run() {
      for (int indice = 1; indice <= 5; indice++) {
        fila.Enqueue(numero);
        numero *= Multiplicador; // 1, 10, 100, 1000, 10000
      }

      ImprimirFila();

      Console.WriteLine($"\nA remover o número {fila.Dequeue()} da fila com o método Dequeue().\n");

      ImprimirFila();

      Console.WriteLine($"\nO número que se encontra na parte superior da fila é o {fila.Peek()}.");
    }

    private void ImprimirFila() {
      foreach (var numero in fila)
        Console.WriteLine(numero);
    }
  }
}

/*
  1
  10
  100
  1000
  10000

  A remover o número 1 da fila com o método Dequeue().

  10
  100
  1000
  10000

  O número que se encontra na parte superior da fila é o 10.
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/9RrewsVO_ws" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/9RrewsVO_ws){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/queue-class-in-csharp/){:target="\_blank"}.

### _Happy coding!_
