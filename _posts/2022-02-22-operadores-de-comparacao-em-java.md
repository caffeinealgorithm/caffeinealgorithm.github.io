---
layout: post
excerpt: Blog
title: 'Operadores de Comparação em Java'
description: 'Descobre como se trabalha com operadores de comparação na linguagem de programação Java. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'java, operadores de comparação, operadores, comparação, publicação'
date: 2022-02-21
categories: [Java]
---

Nesta publicação aprende-se a trabalhar com operadores de comparação para que se possa usar esses mesmos conhecimentos e assim evoluir.

`==` | Igual
`!=` | Diferente
`>` | Maior
`<` | Menor
`>=` | Maior e igual
`<=` | Menor e igual
`&&` | E
`||` | Ou

```java
package com.caffeinealgorithm.programaremjava;

public class OperadoresDeComparacao {
  public void Run() {
    int x = 10;
    int y = 20;

    if (x <= y || x == y)
      System.out.println("Esta condição é verdadeira.");
    else
      System.out.println("Esta condição é falsa.");
  }
}

// Esta condição é verdadeira.
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/Bxg4aC54Jgs" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/Bxg4aC54Jgs){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/20220222/comparison-operators-in-java/){:target="\_blank"}.

### _Happy coding!_
