---
layout: post
excerpt: Blog
title: 'Arrays em Java'
description: 'Descobre como se trabalha com arrays na linguagem de programação Java. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'java, arrays, array, publicação'
date: 2022-02-17
categories: [Java]
redirect_from:
  - /blog/20220217/arrays-em-java/
---

Nesta publicação aprende-se a trabalhar com arrays para que se possa usar esses mesmos conhecimentos e assim evoluir.

- um array (vetor) tem um tamanho fixo e é utilizado para armazenar um conjunto de dados de uma forma sequencial;
- é mais útil pensar em um array como um conjunto de variáveis do mesmo tipo em que essas mesmas estão posicionadas na memória de forma adjacente;
- essas variáveis são chamadas de elementos e cada um desses é identificado por um índice.

```java
package com.caffeinealgorithm.programaremjava;

public class Arrays {
  public void Run() {
    /*
      String[] cores = new String[5];

      cores[0] = "Azul";
      cores[1] = "Verde";
      cores[2] = "Amarelo";
      cores[3] = "Vermelho";
      cores[4] = "Laranja";
    */

    String[] cores = new String[] {
      "Azul",
      "Verde",
      "Amarelo",
      "Vermelho",
      "Laranja"
    };

    System.out.printf("Número de cores: %d\n", cores.length); // Número de cores: 5
    System.out.printf("Primeira cor: %s\n", cores[0]); // Primeira cor: Azul
    System.out.printf("Última cor: %s", cores[cores.length - 1]); // Última cor: Laranja
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/aD7U69fw9hQ" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/aD7U69fw9hQ){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/arrays-in-java/){:target="\_blank"}.

### _Happy coding!_
