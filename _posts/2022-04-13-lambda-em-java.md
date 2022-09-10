---
layout: post
excerpt: Blog
title: 'Lambda em Java'
description: 'Descobre como se trabalha com o lambda na linguagem de programação Java. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'java, lambda, publicação'
date: 2022-04-13
categories: [Java]
---

Nesta publicação aprende-se a trabalhar com o lambda para que se possa usar esses mesmos conhecimentos e assim evoluir.

- o lambda é usado na criação de funções anónimas e estas são assim chamadas porque não são declaradas com os termos de criação de uma típica função;
- resumindo, o lambda tem como principal objetivo simplificar certas e determinadas funções, sendo que estas, não utilizam o termo "return" e sim uma expressão.

```java
package com.caffeinealgorithm.programaremjava;

import java.util.ArrayList;
import java.util.List;

public class Lambda {
  private List<String> pessoas = new ArrayList<>();

  public void Run() {
    pessoas.add("Nelson Silva");
    pessoas.add("Larissa Fernandes");
    pessoas.add("Pedro Henrique");
    pessoas.add("Raquel Soares");

    // listarPessoas();

    pessoas.forEach((pessoa) -> System.out.printf("Nome: %s\n", pessoa));
  }

  private void listarPessoas() {
    for (String pessoa : pessoas)
      System.out.printf("Nome: %s\n", pessoa);
  }
}

/*
  Nome: Nelson Silva
  Nome: Larissa Fernandes
  Nome: Pedro Henrique
  Nome: Raquel Soares
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/Xh95YJxeAnI" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/Xh95YJxeAnI){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/lambda-in-java/){:target="\_blank"}.

### _Happy coding!_
