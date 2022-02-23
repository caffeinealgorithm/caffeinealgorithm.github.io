---
layout: post
excerpt: Blog
title: 'Operador Ternário em Java'
description: 'Descobre como se trabalha com o operador ternário na linguagem de programação Java. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'java, operador ternário, operador, comparação, publicação'
date: 2022-02-23
categories: [Java]
---

Nesta publicação aprende-se a trabalhar com o operador ternário para que se possa usar esses mesmos conhecimentos e assim evoluir.

- o operador ternário (`?:`) serve para simplificar uma decisão sem ser necessário usar o if ou o else.

```java
package com.caffeinealgorithm.programaremjava;

public class OperadorTernario {
  // (condição) ? condição for verdadeira : condição for falsa

  public void Run() {
    int idade = 25;
    boolean eMaiorDeIdade;

    /*
      if (idade >= 18)
        eMaiorDeIdade = true;
      else
        eMaiorDeIdade = false;
    */

    eMaiorDeIdade = (idade >= 18) ? true : false;

    System.out.printf("É maior de idade: %b", eMaiorDeIdade);
  }
}

// É maior de idade: true
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/rCUwMA4JHHk" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/rCUwMA4JHHk){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/20220223/ternary-operator-in-java/){:target="\_blank"}.

### _Happy coding!_
