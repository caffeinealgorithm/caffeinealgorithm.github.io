---
layout: post
excerpt: Blog
title: 'Listas em Java'
description: 'Descobre como se trabalha com listas na linguagem de programação Java. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'java, listas, lista, publicação'
date: 2022-02-18
categories: [Java]
---

Nesta publicação aprende-se a trabalhar com listas para que se possa usar esses mesmos conhecimentos e assim evoluir.

- uma lista é um conjunto ordenado de valores e é bem mais fácil de manipular do que um array;
- os valores que compõem uma lista são chamados de elementos (tal como nos arrays).

```java
package com.caffeinealgorithm.programaremjava;

import java.util.ArrayList;
import java.util.List;

public class Listas {
  public void Run() {
    List<String> cores = new ArrayList<>();

    cores.add("Azul");
    cores.add("Verde");
    cores.add("Amarelo");
    cores.add("Vermelho");
    cores.add("Laranja");

    cores.remove("Laranja");
    // cores.clear();

    System.out.printf("Número de cores: %d\n", cores.size()); // Número de cores: 4
    System.out.printf("Primeira cor: %s\n", cores.get(0)); // Primeira cor: Azul
    System.out.printf("Última cor: %s", cores.get(cores.size() - 1)); // Última cor: Vermelho
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/VFwjISUooB4" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/VFwjISUooB4){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/20220218/lists-in-java/){:target="\_blank"}.

### _Happy coding!_
