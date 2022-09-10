---
layout: post
excerpt: Blog
title: 'Modificadores de Acesso em Java'
description: 'Descobre como se trabalha com modificadores de acesso na linguagem de programação Java. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'java, modificadores de acesso, modificadores, acesso, public, protected, private, publicação'
date: 2022-03-17
categories: [Java]
---

Nesta publicação aprende-se a trabalhar com modificadores de acesso para que se possa usar esses mesmos conhecimentos e assim evoluir.

- os modificadores de acesso são usados para especificar a acessibilidade declarada de uma variável (atributo), função (método), classe e etc;
- existem três modificadores de acesso (níveis de acessibilidade): o public, o protected e o private;
- o public faz com que o acesso não seja restrito em nenhuma parte do nosso código;
- o protected resume-se à possibilidade de acesso apenas dentro da própria classe ou dentro de uma classe derivada dessa mesma (no entanto, como estamos a trabalha com packages, ou seja, pacotes, também é possível ter acesso em todas as classes presentes no pacote em que o protected se encontre);
- o private traduz-se no acesso apenas dentro da própria classe.

```java
package com.caffeinealgorithm.programaremjava;

public class ModificadoresDeAcesso {
  // public, protected e private
  private void Run() {
    System.out.println("Estamos a tentar aprender a trabalhar com os vários modificadores de acesso.");
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/e19jPpY8JfA" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/e19jPpY8JfA){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/access-modifiers-in-java/){:target="\_blank"}.

### _Happy coding!_
