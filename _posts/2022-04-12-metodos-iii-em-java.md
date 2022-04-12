---
layout: post
excerpt: Blog
title: 'Métodos III em Java'
description: 'Descobre como se trabalha com dois métodos específicos (equals() e replace()) na linguagem de programação Java. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'java, métodos, método, funções, função, publicação'
date: 2022-04-12
categories: [Java]
---

Nesta publicação aprende-se a trabalhar com dois métodos específicos (`equals()` e `replace()`) para que se possa usar esses mesmos conhecimentos e assim evoluir.

`equals()` | Retorna um valor booleano (true ou false) relativamente à comparação da dada sequência de carateres com o objeto especificado
`replace()` | Retorna uma nova sequência, na qual, todas as ocorrências de uma determinada string são substituídas por uma outra string especificada

```java
package com.caffeinealgorithm.programaremjava;

public class MetodosIII {
  private String a = "Nelson", b = "Nelson", c = "Silva";
  private String lingProgPreferida = "A minha linguagem preferida já foi o Java.";

  public void Run() {
    // equals()
    System.out.printf("a == b : %b\n", a.equals(b));
    System.out.printf("b == c : %b\n", b.equals(c));

    // replace()
    System.out.println(lingProgPreferida);
    System.out.println(lingProgPreferida.replace("já foi", "é"));
  }
}

/*
  a == b : true
  b == c : false
  A minha linguagem preferida já foi o Java.
  A minha linguagem preferida é o Java.
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/hqICEMabCZQ" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/hqICEMabCZQ){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/20220412/methods-iii-in-java/){:target="\_blank"}.

### _Happy coding!_
