---
layout: post
excerpt: Blog
title: 'Arrays Multidimensionais em Java'
description: 'Descobre como se trabalha com arrays multidimensionais na linguagem de programação Java. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'java, arrays multidimensionais, arrays, multimensionais, array, multidimensional, publicação'
date: 2022-03-10
categories: [Java]
---

Nesta publicação aprende-se a trabalhar com arrays multidimensionais para que se possa usar esses mesmos conhecimentos e assim evoluir.

- um array multidimensional (matriz) é basicamente uma tabela com linhas e colunas ou então pode ser bem mais do que uma tabela (dependendo do número de valores que constituem o array multidimensional);
- tem um tamanho fixo e é utilizado para armazenar um conjunto de dados de uma forma sequencial;
- é importante relembrar, que, é mais útil pensar em um array como um conjunto de variáveis do mesmo tipo em que essas mesmas estão posicionadas na memória de forma adjacente;
- essas variáveis são chamadas de elementos e cada um desses é identificado por um índice, sendo que, temos um índice para identificar a determinada coluna e um outro índice para identificar a determinada linha.

```java
package com.caffeinealgorithm.programaremjava;

public class ArraysMultidimensionais {
  public void Run() {
    // [número de linhas][número de colunas]
    int[][] arrayMultidimensional = new int[][] {
        { 1, 2, 3, 4 },
        { 1, 1, 1, 1 },
        { 2, 2, 2, 2 },
        { 3, 3, 3, 3 },
        { 4, 4, 4, 4 }
    };

    for (int linha = 0; linha < 5; linha++) {
      for (int coluna = 0; coluna < 4; coluna++) {
        System.out.printf("%d\t", arrayMultidimensional[linha][coluna]);
      }

      System.out.println();
    }
  }
}

/*
  1  2  3  4
  1  1  1  1
  2  2  2  2
  3  3  3  3
  4  4  4  4
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/tF6U5grcYCE" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/tF6U5grcYCE){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/20220310/multidimensional-arrays-in-java/){:target="\_blank"}.

### _Happy coding!_
