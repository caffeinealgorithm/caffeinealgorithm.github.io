---
layout: post
excerpt: Blog
title: 'Classe Process em Java'
description: 'Descobre como se trabalha com a classe Process na linguagem de programação Java. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'java, classe process, classe, process, publicação'
date: 2022-04-04
categories: [Java]
---

Nesta publicação aprende-se a trabalhar com a classe Process para que se possa usar esses mesmos conhecimentos e assim evoluir.

- esta classe fornece acesso a processos locais/remotos e permite iniciar/parar os processos do sistema.

`Process.start()` | É iniciado um determinado processo
`Process.isAlive()` | Verifica se o dado processo está a correr ou não
`Process.destroy()` | Termina o determinado processo
`Thread.sleep()` | Suspende o thread atual durante o tempo especificado (tempo esse em milissegundos)

```java
package com.caffeinealgorithm.programaremjava;

public class ClasseProcess {
  private Process processo;

  public void Run() {
    try {
      processo = new ProcessBuilder("notepad.exe").start();
    }
    catch (Exception excecao) {
      System.out.println(excecao);
    }

    try {
      if (processo.isAlive()) {
        System.out.println("O processo \"notepad.exe\" está a ser executado e tal execução irá terminar em cerca de três segundos.");
        Thread.sleep(3000);
        processo.destroy();
      }
    }
    catch (InterruptedException excecao) {
      System.out.println(excecao);
    }
  }
}

// O processo "notepad.exe" está a ser executado e tal execução irá terminar em cerca de três segundos.
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/rd4_ShKKqAo" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/rd4_ShKKqAo){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/process-class-in-java/){:target="\_blank"}.

### _Happy coding!_
