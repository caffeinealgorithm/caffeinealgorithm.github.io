---
layout: post
excerpt: Blog
title: 'Classes e Objetos em Java'
description: 'Descobre como se trabalha com classes e objetos na linguagem de programação Java. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'java, classes e objetos, classes, objetos, classe, objeto, publicação'
date: 2022-03-15
categories: [Java]
redirect_from:
  - /blog/20220315/classes-e-objetos-em-java/
---

Nesta publicação aprende-se a trabalhar com classes e objetos para que se possa usar esses mesmos conhecimentos e assim evoluir.

- uma classe representa um conjunto de objetos, sendo que, define o comportamento desses mesmos através de métodos e quais estados ele é capaz de manter através dos seus atributos;
- um objeto é uma instância de uma classe e é capaz de armazenar estados através dos seus atributos e de reagir a mensagens enviadas para ele;
- o var é um tipo de variável implícito e esse mesmo tipo é determinado consoante o conteúdo da varíavel (existe a necessidade de a variável ser inicializada para se usar o var e não se pode alterar o seu tipo após essa mesma inicialização).

```java
package com.caffeinealgorithm.programaremjava;

public class Main {
  public static void main(String[] args) {
    var inimigo1 = new ClassesEObjetos();
    var inimigo2 = new ClassesEObjetos();

    inimigo1.ataque(); // Eu fui atacado e perdi uma vida.
    inimigo1.ataque(); // Eu fui atacado e perdi uma vida.
    inimigo1.ataque(); // Eu fui atacado e perdi uma vida.
    inimigo1.verificarVida(); // Eu ainda estou em combate e tenho 2 vidas.
    inimigo2.verificarVida(); // Eu ainda estou em combate e tenho 5 vidas.
  }
}
```

```java
package com.caffeinealgorithm.programaremjava;

public class ClassesEObjetos {
  int vidas = 5;

  public void ataque() {
    System.out.println("Eu fui atacado e perdi uma vida.");
    vidas -= 1;
  }

  public void verificarVida() {
    if (vidas <= 0)
      System.out.println("Eu estou morto porque não tenho mais vidas.");
    else
      System.out.printf("Eu ainda estou em combate e tenho %d vidas.\n", vidas);
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/ktbsyAHPBv0" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/ktbsyAHPBv0){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/classes-and-objects-in-java/){:target="\_blank"}.

### _Happy coding!_
