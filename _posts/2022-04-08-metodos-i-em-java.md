---
layout: post
excerpt: Blog
title: 'Métodos I em Java'
description: 'Descobre como se trabalha com dois métodos específicos (substring() e split()) na linguagem de programação Java. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'java, métodos, método, funções, função, publicação'
date: 2022-04-08
categories: [Java]
redirect_from:
  - /blog/20220408/metodos-i-em-java/
---

Nesta publicação aprende-se a trabalhar com dois métodos específicos (`substring()` e `split()`) para que se possa usar esses mesmos conhecimentos e assim evoluir.

`substring()` | Retorna uma substring (uma nova string com os carateres de um certo intervalo) de acordo com o índice de ínicio e o índice de fim
`split()` | Divide um conjunto de carateres (de acordo com o determinado parâmetro/argumento) e retorna esse mesmo em subconjuntos de carateres, ou seja, retorna um array de strings (o Regex é referente ao uso de expressões regulares).

```java
package com.caffeinealgorithm.programaremjava;

public class MetodosI {
  private String umDoisTres = "UmDoisTrês", nome = "Nelson Gomes da Silva";

  public void Run() {
    // substring()
    System.out.printf("1: %s\n", umDoisTres.substring(0, 2));
    System.out.printf("2: %s\n", umDoisTres.substring(2, 6));
    System.out.printf("3: %s\n", umDoisTres.substring(6));

    // split()
    var palavras = nome.split(" ");

    for (String palavra : palavras)
      System.out.printf("Palavra: %s\n", palavra);

    var _palavras = nome.split(" Gomes da ");
    System.out.printf("Nome: %s %s", _palavras[0], _palavras[1]);
  }
}

/*
  1: Um
  2: Dois
  3: Três
  Palavra: Nelson
  Palavra: Gomes
  Palavra: da
  Palavra: Silva
  Nome: Nelson Silva
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/TAKYXCKl4VE" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/TAKYXCKl4VE){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/methods-i-in-java/){:target="\_blank"}.

### _Happy coding!_
