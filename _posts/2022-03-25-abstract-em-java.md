---
layout: post
excerpt: Blog
title: 'abstract em Java'
description: 'Descobre como se trabalha com o abstract na linguagem de programação Java. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'java, abstract, publicação'
date: 2022-03-25
categories: [Java]
redirect_from:
  - /blog/20220325/abstract-em-java/
---

Nesta publicação aprende-se a trabalhar com o abstract para que se possa usar esses mesmos conhecimentos e assim evoluir.

- o abstract é utilizado para indicar que uma determinada classe não pode ser instanciada;
- resumindo, as classes abstract são consideradas de classes "incompletas";
- é importante saber que uma classe pode herdar de uma classe abstract e que os métodos só podem ser abstract se a classe também for;
- quando o static é aplicado a um certo membro (atributo, método, etc), não é necessário instanciar a tal classe para se ter acesso a esse membro devido a este ser estático.

```java
package com.caffeinealgorithm.programaremjava;

import java.util.ArrayList;
import java.util.List;

public class Abstract {
  public void Run() {
    // ClasseX.informacaoX();
    var classe = new ClasseY();
    classe.informacaoY();

    /*
      País: Portugal
      País: Brasil
      País: Espanha
      País: França
      País: Itália
      País: Austrália
      País: Índia
    */
  }
}

abstract class ClasseX {
  public static String comunidade = "Caffeine Algorithm";
  public static List<String> paises = new ArrayList<>();

  public static void informacaoX() {
    for (char carater : comunidade.toCharArray())
      System.out.printf("Carater: %c\n", carater);
  }

  public abstract void informacaoY();
}

class ClasseY extends ClasseX {
  public void informacaoY() {
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
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/ZsiTd23CfUs" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/ZsiTd23CfUs){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/abstract-in-java/){:target="\_blank"}.

### _Happy coding!_
