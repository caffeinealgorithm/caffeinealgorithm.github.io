---
layout: post
excerpt: Blog
title: 'Exceções em Java'
description: 'Descobre como se trabalha com exceções na linguagem de programação Java. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'java, exceções, exceção, publicação'
date: 2022-03-14
categories: [Java]
redirect_from:
  - /blog/20220314/excecoes-em-java/
---

Nesta publicação aprende-se a trabalhar com exceções para que se possa usar esses mesmos conhecimentos e assim evoluir.

- uma exceção é um evento que ocorre durante a execução de um pedaço de código que interrompe o seu fluxo normal de instruções;
- resumindo, uma exceção representa um erro;
- o try executa todo o pedaço de código presente nele mesmo e passa automaticamente para o catch;
- o catch verifica o resultado do que fora executado dentro do try e transmite o que estiver contido nele mesmo (na maioria das vezes a própria exceção);
- o finally é executado caso haja alguma exceção ou não.

```java
package com.caffeinealgorithm.programaremjava;

public class Excecoes {
  public void Run() {
    int[] numeros = new int[] {
        1, 2, 3, 4, 5
    };

    try {
      System.out.printf("Conteúdo do elemento: %d\n", numeros[4]);
    } catch (Exception excecao) {
      // System.out.println("O código presente no try não está a funcionar corretamente.");
      System.out.println(excecao);
    }
    finally {
      System.out.println("Eu faço parte do finally e sou executado caso haja ou não alguma exceção.");
    }
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/RqbnpHEBZgc" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/RqbnpHEBZgc){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/exceptions-in-java/){:target="\_blank"}.

### _Happy coding!_
