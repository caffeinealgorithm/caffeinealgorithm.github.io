---
layout: post
excerpt: Blog
title: 'Operadores Bit a Bit em Java'
description: 'Descobre como se trabalha com operadores bit a bit na linguagem de programação Java. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'java, operadores bit a bit, operadores bit, operadores, bit, publicação'
date: 2022-04-14
categories: [Java]
---

Nesta publicação aprende-se a trabalhar com operadores bit a bit para que se possa usar esses mesmos conhecimentos e assim evoluir.

- os operadores bit a bit operam um bit de cada vez e é importante ter a noção relativamente ao que é o código bínario.

`1` | Verdadeiro
`0` | Falso
`&` | Apenas é verdadeiro quando ambos os números corresponderem a 1 e 1
`|` | Apenas é falso quando ambos os números corresponderem a 0 e 0
`<<` | Deslocam os bits de acordo com o número dado para a esquerda
`>>` | Deslocam os bits de acordo com o número dado para a direita

- depois temos também os operadores `^` e `~`;
- tais operadores são usados maioritariamente em diversas situações (criptografia, compressão de dados, produção de hash codes, comunicação com o hardware, jogos e etc).

```java
package com.caffeinealgorithm.programaremjava;

public class OperadoresBitABit {
  private int x = 60; // 00111100 < 01111000 < 11110000 | 00111100 > 00011110 > 00001111
  private int y = 13; // 00001101

  public void Run() {
    System.out.printf("Resultado do operador &: %d\n", x & y); // 12 -> 00001100
    System.out.printf("Resultado do operador |: %d\n", x | y); // 61 -> 00111101
    System.out.printf("Resultado do operador <<: %d\n", x << 2); // 240 -> 11110000
    System.out.printf("Resultado do operador >>: %d", x >> 2); // 15 -> 00001111
  }
}

/*
  Resultado do operador &: 12
  Resultado do operador |: 61
  Resultado do operador <<: 240
  Resultado do operador >>: 15
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/f_RICgMykc8" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/f_RICgMykc8){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/bitwise-operators-in-java/){:target="\_blank"}.

### _Happy coding!_
