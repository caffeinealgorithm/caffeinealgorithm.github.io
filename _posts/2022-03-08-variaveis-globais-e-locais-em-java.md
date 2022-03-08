---
layout: post
excerpt: Blog
title: 'Variáveis Globais e Locais em Java'
description: 'Descobre como se trabalha com variáveis globais e locais na linguagem de programação Java. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'java, variáveis globais, variáveis locais, variáveis, globais, locais, variável, publicação'
date: 2022-03-08
categories: [Java]
---

Nesta publicação aprende-se a trabalhar com variáveis globais e locais para que se possa usar esses mesmos conhecimentos e assim evoluir.

- as variáveis globais são todas as que são definidas no exterior de uma função (na "raiz" do nosso código) e têm um alcance global;
- as variáveis locais são todas as que são definidas no interior de uma função;
- resumindo, nem todas as variáveis são acessíveis a partir de todos os locais do nosso código.

```java
package com.caffeinealgorithm.programaremjava;

public class VariaveisGlobaisELocais {
  String acesso = "Global";

  public void Run() {
    mudarAcesso();
    System.out.printf("Acesso no exterior da função: %s", acesso);
  }

  public void mudarAcesso() {
    String acesso = "Local";
    System.out.printf("Acesso no interior da função: %s\n", acesso);
  }
}

/*
  Acesso no interior da função: Local
  Acesso no exterior da função: Global
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/hgVFRjqnSPM" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/hgVFRjqnSPM){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/20220308/global-and-local-variables-in-java/){:target="\_blank"}.

### _Happy coding!_
