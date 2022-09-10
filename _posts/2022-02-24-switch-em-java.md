---
layout: post
excerpt: Blog
title: 'Switch em Java'
description: 'Descobre como se trabalha com o switch na linguagem de programação Java. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'java, switch, condições, condição, publicação'
date: 2022-02-24
categories: [Java]
---

Nesta publicação aprende-se a trabalhar com o switch para que se possa usar esses mesmos conhecimentos e assim evoluir.

- o switch é uma outra forma de se trabalhar com decisões e pode somente verificar uma relação de igualdade, ou seja, não pode usar operadores de comparação;
- o case compara o que fora definido em si próprio com o conteúdo do argumento que fora definido no switch;
- o default é executado quando o conteúdo do argumento que fora definido no switch não for encontrado em nenhum case.

```java
package com.caffeinealgorithm.programaremjava;

public class Switch {
  public void Run() {
    char caso = 'D';

    switch (caso) {
      case 'A':
        System.out.println("O caso A existe.");
        break;
      case 'B':
        System.out.println("O caso B existe.");
        break;
      case 'C':
        System.out.println("O caso C existe.");
        break;
      default:
        System.out.printf("O caso %c não existe.", caso);
        break;
    }
  }
}

// O caso D não existe.
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/445d_X4N6OI" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/445d_X4N6OI){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/switch-in-java/){:target="\_blank"}.

### _Happy coding!_
