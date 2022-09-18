---
layout: post
excerpt: Blog
title: 'Classe Random em Java'
description: 'Descobre como se trabalha com a classe Random na linguagem de programação Java. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'java, classe random, classe, random, publicação'
date: 2022-03-29
categories: [Java]
redirect_from:
  - /blog/20220329/classe-random-em-java/
---

Nesta publicação aprende-se a trabalhar com a classe Random para que se possa usar esses mesmos conhecimentos e assim evoluir.

- esta classe representa um gerador de números pseudoaleatórios e esse mesmo produz uma sequência de números que atendem a certos requisitos estatísticos de aleatoriedade.

`Random (objeto).next<Tipo>` | Retorna um número aleatório e, dependendo da sua assinatura, é também capaz de retornar um número aleatório dentro de um determinado intervalo especificado

```java
package com.caffeinealgorithm.programaremjava;

import java.util.Random;

public class ClasseRandom {
  private Random aleatorio = new Random();

  public void Run() {
    System.out.printf("Número aleatório até 20: %d\n", aleatorio.nextInt(21));
    System.out.printf("Número aleatório (double): %.2f\n", aleatorio.nextDouble());

    for (int indice = 1; indice <= 10; indice++)
      System.out.printf("Número aleatório #%d: %d\n", indice, aleatorio.nextInt());
  }
}

/*
  Número aleatório até 20: 16
  Número aleatório (double): 1.00
  Número aleatório #1: -1738953879
  Número aleatório #2: 52710053
  Número aleatório #3: 1938113879
  Número aleatório #4: 1805001211
  Número aleatório #5: -129242103
  Número aleatório #6: 1301444521
  Número aleatório #7: 65079567
  Número aleatório #8: 110790254
  Número aleatório #9: -701484339
  Número aleatório #10: -1921592597
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/-ka_3iD3V4Q" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/-ka_3iD3V4Q){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/random-class-in-java/){:target="\_blank"}.

### _Happy coding!_
