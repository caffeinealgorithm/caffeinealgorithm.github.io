---
layout: post
excerpt: Blog
title: 'Classe Scanner em Java'
description: 'Descobre como se trabalha com a classe Scanner na linguagem de programação Java. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'java, classe scanner, classe, scanner, publicação'
date: 2022-02-16
categories: [Java]
redirect_from:
  - /blog/20220216/classe-scanner-em-java/
---

Nesta publicação aprende-se a trabalhar com a classe Scanner para que se possa usar esses mesmos conhecimentos e assim evoluir.

- a classe Scanner (pertencente à biblioteca java.util) tem um método (nextLine()) cujo principal objetivo é "extrair" informações dadas pelo utilizador e desse mesmo que vamos falar hoje;
- resumindo, esse mesmo método serve para aumentar a interação com o mesmo, ou seja, o utilizador.

```java
package com.caffeinealgorithm.programaremjava;

import java.util.Scanner;

public class ClasseScanner {
  public void Run() {
    Scanner inputDoUtilizador = new Scanner(System.in);
    String primeiroNome, ultimoNome;
    int idade;

    System.out.print("Insere o teu primeiro nome: ");
    primeiroNome = inputDoUtilizador.nextLine();

    System.out.print("Insere o teu último nome: ");
    ultimoNome = inputDoUtilizador.nextLine();

    System.out.print("Insere a tua idade: ");
    idade = inputDoUtilizador.nextInt();

    System.out.printf("Nome: %s %s\nIdade: %d", primeiroNome, ultimoNome, idade);
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/d1Fp1_jjPsE" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/d1Fp1_jjPsE){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/scanner-class-in-java/){:target="\_blank"}.

### _Happy coding!_
