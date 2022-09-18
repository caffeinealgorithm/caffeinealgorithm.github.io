---
layout: post
excerpt: Blog
title: 'if, else if e else em Java'
description: 'Descobre como se trabalha com decisões (if, else if e else) na linguagem de programação Java. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'java, if, else if, else, condições, condição, publicação'
date: 2022-02-21
categories: [Java]
redirect_from:
  - /blog/20220221/if-else-if-e-else-em-java/
---

Nesta publicação aprende-se a trabalhar com decisões (if, else if e else) para que se possa usar esses mesmos conhecimentos e assim evoluir.

```java
package com.caffeinealgorithm.programaremjava;

public class IfElseIfEElse {
  /*
    (if - se) condição for verdadeira {
      o código dentro do if é executado
    }
    (else if - senão se) condição for verdadeira (só ocorre o else if caso a condição de if seja falsa) {
      o código dentro do else if é executado
    }
    (else - senão) sem condição (só ocorre caso a condição de if e de else if sejam falsas) {
      o código dentro do else é executado
    }
  */

  public void Run() {
    int x = 30;

    if (x == 10)
      System.out.println("O valor de x é igual a 10.");
    else if (x == 20)
      System.out.println("O valor de x é igual a 20.");
    else
      System.out.println("O valor de x é diferente de 10 e de 20.");
  }
}

// O valor de x é diferente de 10 e de 20.
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/IyDdjn1s3Gw" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/IyDdjn1s3Gw){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/if-else-if-and-else-in-java/){:target="\_blank"}.

### _Happy coding!_
