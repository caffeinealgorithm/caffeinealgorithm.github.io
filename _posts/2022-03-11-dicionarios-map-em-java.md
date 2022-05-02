---
layout: post
excerpt: Blog
title: 'Dicionários (Map) em Java'
description: 'Descobre como se trabalha com dicionários (Map) na linguagem de programação Java. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'java, dicionários, map, dicionário, publicação'
date: 2022-03-11
categories: [Java]
---

Nesta publicação aprende-se a trabalhar com dicionários (Map) para que se possa usar esses mesmos conhecimentos e assim evoluir.

- os dicionários (que na linguagem de programação Java se criam com o Map) são estruturas de dados que implementam mapeamentos (coleção de associações entre pares de valores);
- o primeiro elemento do par é chamado de chave (identificador) e o outro é chamado de conteúdo.

```java
package com.caffeinealgorithm.programaremjava;

import java.util.HashMap;
import java.util.Map;

public class DicionariosMap {
  public void Run() {
    Map<String, Integer> pessoas = new HashMap<>();
    // Map pessoas = new HashMap();

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
  Nome das pessoas: [Pedro Henrique, Nelson Silva, Raquel Soares]
  Idade das pessoas: [100, 25, 68]
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/R-ueRH4ySug" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/R-ueRH4ySug){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/20220311/dictionaries-map-in-java/){:target="\_blank"}.

### _Happy coding!_
