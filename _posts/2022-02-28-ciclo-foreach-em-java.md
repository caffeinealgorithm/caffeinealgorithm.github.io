---
layout: post
excerpt: Blog
title: 'Ciclo foreach em Java'
description: 'Descobre como se trabalha com o ciclo foreach na linguagem de programação Java. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'java, ciclo for, ciclo foreach, ciclo, for, foreach, ciclos, publicação'
date: 2022-02-28
categories: [Java]
---

Nesta publicação aprende-se a trabalhar com o ciclo "foreach" para que se possa usar esses mesmos conhecimentos e assim evoluir.

- um ciclo permite executar uma instrução ou um conjunto de instruções várias vezes;
- o ciclo for (for each - por cada item) também dá voltas (itera) consoante os itens de uma sequência.

```java
package com.caffeinealgorithm.programaremjava;

import java.util.ArrayList;
import java.util.List;

public class CicloForeach {
  public void Run() {
    List<String> paises = new ArrayList<>();

    paises.add("Portugal");
    paises.add("Brasil");
    paises.add("Espanha");
    paises.add("França");
    paises.add("Itália");
    paises.add("Austrália");
    paises.add("Índia");

    for (String pais : paises)
      System.out.printf("País: %s\n", pais);
  }
}

/*
  País: Portugal
  País: Brasil
  País: Espanha
  País: França
  País: Itália
  País: Austrália
  País: Índia
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/X8hVHwqEiKI" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/X8hVHwqEiKI){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/foreach-loop-in-java/){:target="\_blank"}.

### _Happy coding!_
