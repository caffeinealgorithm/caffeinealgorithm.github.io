---
layout: post
excerpt: Blog
title: 'return em Java'
description: 'Descobre como se trabalha com o return na linguagem de programação Java. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'java, return, publicação'
date: 2022-03-04
categories: [Java]
---

Nesta publicação aprende-se a trabalhar com o return para que se possa usar esses mesmos conhecimentos e assim evoluir.

- o return tem como objetivo retornar algo de uma função para que ao se chamar essa mesma se tenha acesso ao valor retornado.

```java
package com.caffeinealgorithm.programaremjava;

public class Return {
  public void Run() {
    System.out.printf("Resultado da adição: %d", adicao());
  }

  public int adicao() {
    int resultado = 0;

    for (int valor = 1; valor <= 10; valor++)
      resultado += valor;

    return resultado;
  }
}

// Resultado da adição: 55
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/hnoGygkv9fw" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/hnoGygkv9fw){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/20220304/return-in-java/){:target="\_blank"}.

### _Happy coding!_
