---
layout: post
excerpt: Blog
title: 'Mais sobre as Strings em Java'
description: 'Descobre como se trabalha com algo mais sobre as strings na linguagem de programação Java. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'java, strings, string, publicação'
date: 2022-02-14
categories: [Java]
---

Nesta publicação aprende-se a trabalhar com algo mais sobre as strings para que se possa usar esses mesmos conhecimentos e assim evoluir.

`\n` | Nova linha
`\t` | Nova tab (indentação)
`variavel.length` | Retorna o número de carateres (no caso da string)
`variavel.toUpperCase()` | Transforma todas as letras presentes na string em letras maiúsculas
`variavel.toLowerCase()` | Transforma todas as letras presentes na string em letras minúsculas

```java
package com.caffeinealgorithm.programaremjava;

public class MaisSobreAsStrings {
  public void Run() {
    String primeiroNome = "Nelson";
    String ultimoNome = "Silva";
    int idade = 25;

    System.out.println("Nome: " + primeiroNome + ' ' + ultimoNome + "\nIdade: " + idade);
    System.out.println(new StringBuilder().append("Nome: ").append(primeiroNome).append(' ').append(ultimoNome).append("\nIdade: ").append(idade));
    System.out.printf("Nome: %s %s\nIdade: %d", primeiroNome, ultimoNome, idade);
  }
}

/*
  Nome: Nelson Silva
  Idade: 25
  Nome: Nelson Silva
  Idade: 25
  Nome: Nelson Silva
  Idade: 25
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/Vk0V-iw_LWo" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/Vk0V-iw_LWo){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/20220214/more-about-strings-in-java/){:target="\_blank"}.

### _Happy coding!_
