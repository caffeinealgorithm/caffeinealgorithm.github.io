---
layout: post
excerpt: Blog
title: 'Métodos II em Java'
description: 'Descobre como se trabalha com dois métodos específicos (indexOf() e trim()) na linguagem de programação Java. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'java, métodos, método, funções, função, publicação'
date: 2022-04-11
categories: [Java]
redirect_from:
  - /blog/20220411/metodos-ii-em-java/
---

Nesta publicação aprende-se a trabalhar com dois métodos específicos (`indexOf()` e `trim()`) para que se possa usar esses mesmos conhecimentos e assim evoluir.

`indexOf()` | Retorna uma substring a partir da primeira ocorrência de um carater (ou até mesmo de conjunto de carateres) até ao fim da determinada string
`trim()` | Elimina os espaços presentes no início e no fim de uma string, ou seja, retorna uma cópia modificada da string original

```java
package com.caffeinealgorithm.programaremjava;

import java.util.Scanner;

public class MetodosII {
  private String loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur.";
  private Scanner inputDoUtilizador = new Scanner(System.in);

  public void Run() {
    // indexOf()
    var indice = 0;

    while ((indice = loremIpsum.indexOf('i', indice)) != -1) {
      System.out.println(loremIpsum.substring(indice));
      indice++;
    }

    // trim()
    System.out.print("\nInsere o teu primeiro nome: ");
    var primeiroNome = inputDoUtilizador.nextLine();

    System.out.print("Insere o teu último nome: ");
    var ultimoNome = inputDoUtilizador.nextLine();

    System.out.printf("\nNome (sem o uso do método trim()): %s %s\n", primeiroNome, ultimoNome);
    System.out.printf("\nNome (com o uso do método trim()): %s %s\n", primeiroNome.trim(), ultimoNome.trim());
  }
}

/*
  ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur.
  it amet, consectetur adipiscing elit. Vestibulum consectetur.
  ipiscing elit. Vestibulum consectetur.
  iscing elit. Vestibulum consectetur.
  ing elit. Vestibulum consectetur.
  it. Vestibulum consectetur.
  ibulum consectetur.
  Insere o teu primeiro nome:          Nelson
  Insere o teu último nome:    Silva
  Nome (sem o uso do método trim()):          Nelson          Silva
  Nome (com o uso do método trim()): Nelson Silva
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/qEVCtofREBM" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/qEVCtofREBM){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/methods-ii-in-java/){:target="\_blank"}.

### _Happy coding!_
