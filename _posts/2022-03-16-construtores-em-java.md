---
layout: post
excerpt: Blog
title: 'Construtores em Java'
description: 'Descobre como se trabalha com construtores na linguagem de programação Java. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'java, construtores, construtor, publicação'
date: 2022-03-16
categories: [Java]
redirect_from:
  - /blog/20220316/construtores-em-java/
---

Nesta publicação aprende-se a trabalhar com construtores para que se possa usar esses mesmos conhecimentos e assim evoluir.

- os construtores têm como função inicializar tudo o que seja necessário ao se criar um determinado objeto;
- pode-se criar vários construtores numa classe.

```java
package com.caffeinealgorithm.programaremjava;

public class Main {
  public static void main(String[] args) {
    var pessoa1 = new Construtores("Nelson", "Silva", 25);
    var pessoa2 = new Construtores("Larissa", "Fernandes", 17);

    pessoa1.informacao();
    pessoa1.verificarEntrada();

    /*
      Nome: Nelson Silva
      Idade: 25
      Esta pessoa pode entrar no local porque tem mais de 18 anos.
    */

    pessoa2.informacao();
    pessoa2.verificarEntrada();

    /*
      Nome: Larissa Fernandes
      Idade: 17
      Esta pessoa não pode entrar no local porque tem menos de 18 anos.
    */
  }
}
```

```java
package com.caffeinealgorithm.programaremjava;

public class Construtores {
  String primeiroNome = null, ultimoNome = null;
  int idade = 0;

  public Construtores(String primeiroNome, String ultimoNome, int idade) {
    this.primeiroNome = primeiroNome;
    this.ultimoNome = ultimoNome;
    this.idade = idade;
  }

  public void informacao() {
    System.out.printf("Nome: %s %s\n", primeiroNome, ultimoNome);
    System.out.printf("Idade: %d\n", idade);
  }

  public void verificarEntrada() {
    if (idade >= 18)
      System.out.println("Esta pessoa pode entrar no local porque tem mais de 18 anos.");
    else
      System.out.println("Esta pessoa não pode entrar no local porque tem menos de 18 anos.");
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/vZjw1DbKVsY" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/vZjw1DbKVsY){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/constructors-in-java/){:target="\_blank"}.

### _Happy coding!_
