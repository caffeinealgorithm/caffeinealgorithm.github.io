---
layout: post
excerpt: Blog
title: 'Classe Stack em Java'
description: 'Descobre como se trabalha com a classe Stack na linguagem de programação Java. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'java, classe stack, classe, stack, pilha, publicação'
date: 2022-04-07
categories: [Java]
---

Nesta publicação aprende-se a trabalhar com a classe Stack para que se possa usar esses mesmos conhecimentos e assim evoluir.

- esta classe é basicamente uma pilha (devido a sua forma de funcionamento) e representa uma coleção do tipo LIFO (Last In - First Out), ou seja, o último valor que entrar será sempre o primeiro a sair;
- esses valores que compõem uma stack são chamados de elementos.

`Stack (objeto).push()` | Adiciona um objeto à stack, o que basicamente, torna este o próximo a sair devido a ter sido o último a entrar
`Stack (objeto).pop()` | Remove e retorna o objeto que fora o último a entrar na stack
`Stack (objeto).peek()` | Retorna o objeto que fora o último a entrar na stack sem o remover

```java
package com.caffeinealgorithm.programaremjava;

import java.util.Stack;

public class ClasseStack {
  private Stack<Integer> pilha = new Stack<>();
  private int multiplicador = 10, numero = 1;

  public void Run() {
    for (int indice = 1; indice <= 5; indice++) {
      pilha.push(numero);
      numero *= multiplicador;
    }

    imprimirPilha();

    System.out.printf("\nA remover o número %d da pilha com o método pop().\n\n", pilha.pop());

    imprimirPilha();

    System.out.printf("\nO número que se encontra a seguir para ser removido da pilha é o %d.", pilha.peek());
  }

  private void imprimirPilha() {
    for (int numero : pilha)
      System.out.println(numero);
  }
}

/*
  1
  10
  100
  1000
  10000

  A remover o número 10000 da pilha com o método pop().

  1
  10
  100
  1000

  O número que se encontra a seguir para ser removido da pilha é o 1000.
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/kfCzIPNX2CA" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/kfCzIPNX2CA){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/stack-class-in-java/){:target="\_blank"}.

### _Happy coding!_
