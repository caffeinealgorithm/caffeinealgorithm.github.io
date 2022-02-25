---
layout: post
excerpt: Blog
title: 'Ciclo for em Java'
description: 'Descobre como se trabalha com o ciclo for na linguagem de programação Java. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'java, ciclo for, ciclo, for, ciclos, publicação'
date: 2022-02-25
categories: [Java]
---

Nesta publicação aprende-se a trabalhar com o ciclo for para que se possa usar esses mesmos conhecimentos e assim evoluir.

- um ciclo permite executar uma instrução ou um conjunto de instruções várias vezes;
- o ciclo for dá voltas (itera) consoante um determinado range.

```java
package com.caffeinealgorithm.programaremjava;

public class CicloFor {
  public void Run() {
    String[] materialEscolar = new String[] {
        "Mochila",
        "Estojo",
        "Lápis",
        "Borracha",
        "Afia",
        "Tesoura"
    };

    /*
      System.out.println(materialEscolar[0]);
      System.out.println(materialEscolar[1]);
    */

    for (int indice = 0; indice < materialEscolar.length; indice++)
      System.out.printf("materialEscolar[%d]: %s\n", indice, materialEscolar[indice]);
  }
}

/*
  materialEscolar[0]: Mochila
  materialEscolar[1]: Estojo
  materialEscolar[2]: Lápis
  materialEscolar[3]: Borracha
  materialEscolar[4]: Afia
  materialEscolar[5]: Tesoura
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/aKgPE8bar_Y" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/aKgPE8bar_Y){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/20220225/for-loop-in-java/){:target="\_blank"}.

### _Happy coding!_
