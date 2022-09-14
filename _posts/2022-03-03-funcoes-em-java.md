---
layout: post
excerpt: Blog
title: 'Funções em Java'
description: 'Descobre como se trabalha com funções na linguagem de programação Java. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'java, funções, função, métodos, método, publicação'
date: 2022-03-03
categories: [Java]
redirect_from:
  - /blog/20220303/funcoes-em-java/
---

Nesta publicação aprende-se a trabalhar com funções para que se possa usar esses mesmos conhecimentos e assim evoluir.

- uma função é um pedaço de código organizado e reutilizável que é usado para executar uma única ação relacionada;
- as funções proporcionam uma melhor modularidade e um alto grau de reutilização de código;
- não é possível criar uma função dentro de uma outra função.

```java
package com.caffeinealgorithm.programaremjava;

public class Funcoes {
  public void Run() {
    dadosPessoais();
    dadosPessoais();
    dadosPessoais();
  }

  public void dadosPessoais() {
    System.out.println("Nome: Nelson Silva");
    System.out.println("Idade: 25");
    System.out.println("Nacionalidade: Portuguesa");
  }
}

/*
  Nome: Nelson Silva
  Idade: 25
  Nacionalidade: Portuguesa
  Nome: Nelson Silva
  Idade: 25
  Nacionalidade: Portuguesa
  Nome: Nelson Silva
  Idade: 25
  Nacionalidade: Portuguesa
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/BI1mwKihlJI" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/BI1mwKihlJI){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/functions-in-java/){:target="\_blank"}.

### _Happy coding!_
