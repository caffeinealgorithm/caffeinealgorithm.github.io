---
layout: post
excerpt: Blog
title: 'Classe Thread em Java'
description: 'Descobre como se trabalha com a classe Thread na linguagem de programação Java. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'java, classe thread, classe, thread, publicação'
date: 2022-04-05
categories: [Java]
redirect_from:
  - /blog/20220405/classe-thread-em-java/
---

Nesta publicação aprende-se a trabalhar com a classe Thread para que se possa usar esses mesmos conhecimentos e assim evoluir.

- esta classe possibilita a criação/controlo de um determinado processo e é possível definir a sua prioridade e obter o seu estado;
- o thread é basicamente uma tarefa.

`Thread (objeto).start()` | Inicia o determinado thread que fora instanciado
`Thread (objeto).join()` | Bloqueia o thread inicial (o de chamada) até que o thread atual termine
`Thread.sleep()` | Suspende o thread atual durante o tempo especificado (tempo esse em milissegundos)

```java
package com.caffeinealgorithm.programaremjava;

public class ClasseThread {
  private Thread tarefa;

  public void Run() {
    tarefa = new Thread(this::executarTarefa);
    tarefa.start();

    for (int indice = 1; indice <= 5; indice++) {
      System.out.printf("Run(): #%d\n", indice);

      try {
        Thread.sleep(1000);
      }
      catch (InterruptedException excecao) {
        System.out.println(excecao);
      }
    }

    System.out.println("A tarefa Run() finalizou.");

    try {
      tarefa.join();
    }
    catch (InterruptedException excecao) {
      System.out.println(excecao);
    }

    System.out.println("A tarefa executarTarefa() finalizou.");
  }

  private void executarTarefa() {
    for (int indice = 1; indice <= 10; indice++) {
      System.out.printf("executarTarefa(): #%d\n", indice);

      try {
        Thread.sleep(1000);
      }
      catch (InterruptedException excecao) {
        System.out.println(excecao);
      }
    }
  }
}

/*
  Run(): #1
  executarTarefa(): #1
  Run(): #2
  executarTarefa(): #2
  Run(): #3
  executarTarefa(): #3
  Run(): #4
  executarTarefa(): #4
  Run(): #5
  executarTarefa(): #5
  A tarefa Run() finalizou.
  executarTarefa(): #6
  executarTarefa(): #7
  executarTarefa(): #8
  executarTarefa(): #9
  executarTarefa(): #10
  A tarefa executarTarefa() finalizou.
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/Crk467wQmQg" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/Crk467wQmQg){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/thread-class-in-java/){:target="\_blank"}.

### _Happy coding!_
