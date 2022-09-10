---
layout: post
excerpt: Blog
title: 'Classe Stack em C#'
description: 'Descobre como se trabalha com a classe Stack na linguagem de programação C#. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'c#, csharp, classe stack, classe, stack, pilha, publicação'
date: 2022-01-24
categories: [C#]
---

Nesta publicação aprende-se a trabalhar com a classe Stack para que se possa usar esses mesmos conhecimentos e assim evoluir.

- esta classe é basicamente uma pilha (devido a sua forma de funcionamento) e representa uma coleção do tipo LIFO (Last In - First Out), ou seja, o último valor que entrar será sempre o primeiro a sair;
- esses valores que compõem uma stack são chamados de elementos.

`Stack (objeto).Push()` | Adiciona um objeto na parte superior da stack
`Stack (objeto).Pop()` | Remove e retorna o objeto na parte superior da stack
`Stack (objeto).Peek()` | Retorna o objeto na parte superior da stack sem o remover

```csharp
using System;
using System.Collections.Generic;

namespace Base {
  class ClasseStack {
    private Stack<int> pilha = new Stack<int>();
    private const int Multiplicador = 10;
    private int numero = 1;

    public void Run() {
      for (int indice = 1; indice <= 5; indice++) {
        pilha.Push(numero);
        numero *= Multiplicador;
      }

      ImprimirPilha();

      Console.WriteLine($"\nA remover o número {pilha.Pop()} da pilha com o método Pop().\n");

      ImprimirPilha();

      Console.WriteLine($"\nO número que se encontra na parte superior da pilha é o {pilha.Peek()}.");
    }

    private void ImprimirPilha() {
      foreach (var numero in pilha)
        Console.WriteLine(numero);
    }
  }
}

/*
  10000
  1000
  100
  10
  1

  A remover o número 10000 da pilha com o método Pop().

  1000
  100
  10
  1

  O número que se encontra na parte superior da pilha é o 1000.
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/AIxTT2P-5Dc" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/AIxTT2P-5Dc){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/stack-class-in-csharp/){:target="\_blank"}.

### _Happy coding!_
