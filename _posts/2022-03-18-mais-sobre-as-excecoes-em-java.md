---
layout: post
excerpt: Blog
title: 'Mais sobre as Exceções em Java'
description: 'Descobre como se trabalha com mais sobre as exceções na linguagem de programação Java. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'java, exceções, exceção, publicação'
date: 2022-03-18
categories: [Java]
redirect_from:
  - /blog/20220318/mais-sobre-as-excecoes-em-java/
---

Nesta publicação aprende-se a trabalhar com mais sobre as exceções para que se possa usar esses mesmos conhecimentos e assim evoluir.

- uma exceção é um evento que ocorre durante a execução de um pedaço de código que interrompe o seu fluxo normal de instruções;
- resumindo, uma exceção representa um erro;
- existe a possibilidade de se criar exceções próprias e de as usar com o throw;
- o throw é usado para sinalizar a ocorrência de exceção durante a execução do programa.

```java
package com.caffeinealgorithm.programaremjava;

public class MaisSobreAsExcecoes {
  private Exception stringVazia = new Exception("Não se pode verificar uma string que esteja vazia.");

  public void Run() {
    try {
      verificarString("Eu sou uma string.");
    } catch (Exception excecao) {
      System.out.println(excecao);
    }
  }

  private void verificarString(String string) throws Exception {
    if (string == "")
      throw stringVazia;
    else
      System.out.printf("String: %s", string);
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/b40p72IG4-8" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/b40p72IG4-8){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/more-about-exceptions-in-java/){:target="\_blank"}.

### _Happy coding!_
