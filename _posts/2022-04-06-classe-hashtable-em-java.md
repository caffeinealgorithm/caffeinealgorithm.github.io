---
layout: post
excerpt: Blog
title: 'Classe Hashtable em Java'
description: 'Descobre como se trabalha com a classe Hashtable na linguagem de programação Java. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'java, classe hashtable, classe, hashtable, hash, publicação'
date: 2022-04-06
categories: [Java]
---

Nesta publicação aprende-se a trabalhar com a classe Hashtable para que se possa usar esses mesmos conhecimentos e assim evoluir.

- esta classe representa uma coleção de associações entre pares de valores;
- o primeiro elemento do par é chamado de chave (identificador) e o outro é chamado de conteúdo;
- a coleção de associações entre pares de valores são organizadas de acordo com o código hash da chave.

```java
package com.caffeinealgorithm.programaremjava;

import java.util.Hashtable;

public class ClasseHashtable {
  private Hashtable<String, Integer> pessoas = new Hashtable<>();

  public void Run() {
    pessoas.put("Nelson Silva", 25);
    pessoas.put("Larissa Fernandes", 37);
    pessoas.put("Pedro Henrique", 52);
    pessoas.put("Raquel Soares", 68);

    pessoas.replace("Pedro Henrique", 100);
    pessoas.remove("Larissa Fernandes");
    // pessoas.clear();

    System.out.printf("Nome das pessoas: %s\n", pessoas.keySet());
    System.out.printf("Idade das pessoas: %s", pessoas.values());
  }
}

/*
  Nome das pessoas: [Nelson Silva, Raquel Soares, Pedro Henrique]
  Idade das pessoas: [25, 68, 100]
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/ZqsM5Ay_PgA" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/ZqsM5Ay_PgA){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/hashtable-class-in-java/){:target="\_blank"}.

### _Happy coding!_
