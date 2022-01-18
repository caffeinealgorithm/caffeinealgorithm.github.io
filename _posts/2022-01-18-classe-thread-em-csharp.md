---
layout: post
excerpt: Blog
title: 'Classe Thread em C#'
description: 'Descobre como se trabalha com a classe Thread na linguagem de programação C#. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'c#, csharp, classe thread, classe, thread, publicação'
date: 2022-01-18
categories: [C#]
---

Nesta publicação aprende-se a trabalhar com a classe Thread para que se possa usar esses mesmos conhecimentos e assim evoluir.

- esta classe (pertencente à biblioteca System.Threading) possibilita a criação/controlo de um determinado processo e é possível definir a sua prioridade e obter o seu estado;
- o thread é basicamente uma tarefa.

`Thread (objeto).Start()` | Inicia o determinado thread que fora instanciado
`Thread (objeto).Join()` | Bloqueia o thread inicial (o de chamada) até o thread atual termine
`Sleep()` | Suspende o thread atual durante o tempo especificado (tempo esse em milissegundos)

```csharp
using System;
using System.Threading;

namespace Base {
  class ClasseThread {
    private Thread tarefa;

    public void Run() {
      tarefa = new Thread(ExecutarTarefa);
      tarefa.Start();

      for (int indice = 1; indice <= 5; indice++) {
        Console.WriteLine($"Run() #{indice}");
        Thread.Sleep(1000);
      }

      Console.WriteLine("A tarefa Run() finalizou.");

      tarefa.Join();

      Console.WriteLine("A tarefa ExecutarTarefa() finalizou.");
    }

    private void ExecutarTarefa() {
      for (int indice = 1; indice <= 10; indice++) {
        Console.WriteLine($"ExecutarTarefa() #{indice}");
        Thread.Sleep(1000);
      }
    }
  }
}

/*
  Run() #1
  ExecutarTarefa() #1
  Run() #2
  ExecutarTarefa() #2
  Run() #3
  ExecutarTarefa() #3
  Run() #4
  ExecutarTarefa() #4
  Run() #5
  ExecutarTarefa() #5
  A tarefa Run() finalizou.
  ExecutarTarefa() #6
  ExecutarTarefa() #7
  ExecutarTarefa() #8
  ExecutarTarefa() #9
  ExecutarTarefa() #10
  A tarefa ExecutarTarefa() finalizou.
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/N1ZSoxB80B0" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/N1ZSoxB80B0){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/20220118/thread-class-in-csharp/){:target="\_blank"}.

### _Happy coding!_
