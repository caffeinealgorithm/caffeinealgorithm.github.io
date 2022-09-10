---
layout: post
excerpt: Blog
title: 'Argumentos em Java'
description: 'Descobre como se trabalha com argumentos na linguagem de programação Java. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'java, argumentos, argumento, publicação'
date: 2022-03-07
categories: [Java]
---

Nesta publicação aprende-se a trabalhar com argumentos para que se possa usar esses mesmos conhecimentos e assim evoluir.

- os argumentos são como se fossem variáveis que recebem os seus valores (o seu conteúdo) quando a função é chamada;
- esses mesmos argumentos são considerados de variáveis locais porque só existem dentro da função;
- as variáveis locais são descartadas quando se retorna ao ponto de chamada.

```java
package com.caffeinealgorithm.programaremjava;

public class Argumentos {
  public void Run() {
    dadosPessoais("Nelson Silva", 25, "Portuguesa");
    dadosPessoais("Larissa Fernandes", 37, "Brasileira");
  }

  public void dadosPessoais(String nome, int idade, String nacionalidade) {
    System.out.printf("Nome: %s\n", nome);
    System.out.printf("Idade: %d\n", idade);
    System.out.printf("Nacionalidade: %s", nacionalidade);
  }
}

/*
  Nome: Nelson Silva
  Idade: 25
  Nacionalidade: Portuguesa
  Nome: Larissa Fernandes
  Idade: 37
  Nacionalidade: Brasileira
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/k76K3UraNhU" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/k76K3UraNhU){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/arguments-in-java/){:target="\_blank"}.

### _Happy coding!_
