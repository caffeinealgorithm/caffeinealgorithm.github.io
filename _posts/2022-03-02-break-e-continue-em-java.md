---
layout: post
excerpt: Blog
title: 'break e continue em Java'
description: 'Descobre como se trabalha com o break e o continue na linguagem de programação Java. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'java, break e continue, break, continue, publicação'
date: 2022-03-02
categories: [Java]
---

Nesta publicação aprende-se a trabalhar com o break e o continue para que se possa usar esses mesmos conhecimentos e assim evoluir.

- o break faz com que a vida do ciclo termine, ou seja, faz com que não se itere por mais nada;
- o continue ignora todo o conteúdo da volta que está a seguir dele mesmo e passa automaticamente para a próxima iteração.

```java
package com.caffeinealgorithm.programaremjava;

import java.util.ArrayList;
import java.util.List;

public class BreakEContinue {
  public void Run() {
    List<String> animais = new ArrayList<>();
    int contador = 0;

    animais.add("Cão");
    animais.add("Gato");
    animais.add("Galinha");
    animais.add("Coelho");
    animais.add("Leão");

    for (String animal : animais) {
      System.out.printf("Animal: %s\n", animal);

      if (animal == "Galinha")
        break;
    }

    while (contador < 10) {
      contador++;

      if (contador == 5)
        continue;

      System.out.printf("Contador: %d\n", contador);
    }
  }
}

/*
  Animal: Cão
  Animal: Gato
  Animal: Galinha
  Contador: 1
  Contador: 2
  Contador: 3
  Contador: 4
  Contador: 6
  Contador: 7
  Contador: 8
  Contador: 9
  Contador: 10
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/Wbe6-a8go0o" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/Wbe6-a8go0o){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/20220302/break-and-continue-in-java/){:target="\_blank"}.

### _Happy coding!_
