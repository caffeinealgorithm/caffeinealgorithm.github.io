---
layout: post
excerpt: Blog
title: 'Função println() e Strings em Java'
description: 'Descobre como se trabalha com a função println() e com as strings na linguagem de programação Java. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'java, função println, função, println, strings, string, publicação'
date: 2022-02-08
categories: [Java]
---

Nesta publicação aprende-se a trabalhar com a função `println()` e com as strings para que se possa usar esses mesmos conhecimentos e assim evoluir.

- a função `print()` imprime todo o seu conteúdo na linha de comandos sem mudar de linha;
- a função `println()` imprime todo o seu conteúdo na linha de comandos e muda de linha;
- uma string é um conjunto de carateres (letras, números e/ou símbolos);
- todas as strings são inicializadas e finalizadas com aspas ("string").

```java
package com.caffeinealgorithm.programaremjava;

public class Main {
  public static void main(String[] args) {
    var video = new FuncaoPrintlnEStrings();
    video.Run();
  }
}
```

```java
package com.caffeinealgorithm.programaremjava;

public class FuncaoPrintlnEStrings {
  public void Run() {
    System.out.print("Estamos a usar a função print() e eu sou uma string.");
    System.out.println("Estamos a usar a função println() e eu continuo a ser uma string.");
    System.out.println("Estamos a usar novamente a função println() e eu continuo a ser uma string.");
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/GZblJ-SqU_s" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/GZblJ-SqU_s){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/println-function-and-strings-in-java/){:target="\_blank"}.

### _Happy coding!_
