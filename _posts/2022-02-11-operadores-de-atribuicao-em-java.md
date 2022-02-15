---
layout: post
excerpt: Blog
title: 'Operadores de Atribuição em Java'
description: 'Descobre como se trabalha com operadores de atribuição na linguagem de programação Java. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'java, operadores de atribuição, operadores, atribuição, publicação'
date: 2022-02-11
categories: [Java]
---

Nesta publicação aprende-se a trabalhar com operadores de atribuição para que se possa usar esses mesmos conhecimentos e assim evoluir.

`a += 2` | `a = a + 2`
`b -= 2` | `b = b - 2`
`c *= 2` | `c = c * 2`
`d /= 2` | `d = d / 2`
`e %= 2` | `e = e % 2`

```java
package com.caffeinealgorithm.programaremjava;

public class OperadoresDeAtribuicao {
  public void Run() {
    int x = 2;

    x += 3;
    System.out.println("x = x + 3: " + x); // x = x + 3: 5

    x -= 2;
    System.out.println("x = x - 2: " + x); // x = x - 2: 3

    x *= 2;
    System.out.println("x = x * 2: " + x); // x = x * 2: 6

    x /= 2;
    System.out.println("x = x / 2: " + x); // x = x / 2: 3

    x %= 3;
    System.out.println("x = x % 3: " + x); // x = x % 3: 0
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/GQVf0VwJh9c" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/GQVf0VwJh9c){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/20220211/assignment-operators-in-java/){:target="\_blank"}.

### _Happy coding!_
