---
layout: post
excerpt: Blog
title: 'Herança em Java'
description: 'Descobre como se trabalha com a herança na linguagem de programação Java. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'java, herança, publicação'
date: 2022-03-22
categories: [Java]
---

Nesta publicação aprende-se a trabalhar com a herança para que se possa usar esses mesmos conhecimentos e assim evoluir.

- a herança é um mecanismo pelo qual uma classe (subclasse) pode estender outra classe (superclasse) para tirar proveito das suas possíveis variáveis (atributos) e do seu comportamento (métodos);
- uma classe só pode herdar de apenas uma classe;
- o protected resume-se à possibilidade de acesso apenas dentro da própria classe ou dentro de uma classe derivada dessa mesma.

```java
package com.caffeinealgorithm.programaremjava;

public class Heranca {
  public void Run() {
    var pessoa = new Filho();
    pessoa.informacao();
    pessoa.comidaPreferida();

    /*
      Nome: Nelson Silva
      Idade: 25
      A minha comida preferida é arroz de marisco.
    */
  }
}

class Pai {
  protected String ultimoNome = "Silva";

  public void comidaPreferida() {
    System.out.println("A minha comida preferida é arroz de marisco.");
  }
}

class Filho extends Pai {
  private String primeiroNome = "Nelson";
  private int idade = 25;

  public void informacao() {
    System.out.printf("Nome: %s %s\n", primeiroNome, ultimoNome);
    System.out.printf("Idade: %d\n", idade);
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/wFJN_36mi9M" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/wFJN_36mi9M){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/20220322/inheritance-in-java/){:target="\_blank"}.

### _Happy coding!_
