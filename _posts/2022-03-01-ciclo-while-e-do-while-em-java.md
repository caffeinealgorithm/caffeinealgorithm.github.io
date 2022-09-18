---
layout: post
excerpt: Blog
title: 'Ciclo while e do while em Java'
description: 'Descobre como se trabalha com o ciclo while e do while na linguagem de programação Java. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'java, ciclo while, ciclo do while, ciclo, while, do while, ciclos, publicação'
date: 2022-03-01
categories: [Java]
redirect_from:
  - /blog/20220301/ciclo-while-e-do-while-em-java/
---

Nesta publicação aprende-se a trabalhar com o ciclo while e do while para que se possa usar esses mesmos conhecimentos e assim evoluir.

- um ciclo permite executar uma instrução ou um conjunto de instruções várias vezes;
- o ciclo while e do while dão voltas (iteram) consoante uma determinada condição (tendo ela que ser verdadeira);
- a diferença entre estes dois ciclos é que o ciclo do while executa todo o seu conteúdo pelo menos uma única vez seja a condição verdadeira ou falsa.

```java
package com.caffeinealgorithm.programaremjava;

public class CicloWhileEDoWhile {
  public void Run() {
    int contador = 1;

    while (contador <= 10) {
      System.out.printf("[while] Contador: %d\n", contador);
      contador++;
    }

    contador = 1;

    do {
      System.out.printf("[do while] Contador: %d\n", contador);
      contador++;
    } while (contador <= 10);
  }
}

/*
  [while] Contador: 1
  [while] Contador: 2
  [while] Contador: 3
  [while] Contador: 4
  [while] Contador: 5
  [while] Contador: 6
  [while] Contador: 7
  [while] Contador: 8
  [while] Contador: 9
  [while] Contador: 10
  [do while] Contador: 1
  [do while] Contador: 2
  [do while] Contador: 3
  [do while] Contador: 4
  [do while] Contador: 5
  [do while] Contador: 6
  [do while] Contador: 7
  [do while] Contador: 8
  [do while] Contador: 9
  [do while] Contador: 10
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/KxWKMHwKJVc" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/KxWKMHwKJVc){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/while-and-do-while-loop-in-java/){:target="\_blank"}.

### _Happy coding!_
