---
layout: post
excerpt: Blog
title: 'Classe Math em Java'
description: 'Descobre como se trabalha com a classe Math na linguagem de programação Java. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'java, classe math, classe, math, publicação'
date: 2022-03-28
categories: [Java]
---

Nesta publicação aprende-se a trabalhar com a classe Math para que se possa usar esses mesmos conhecimentos e assim evoluir.

- esta classe tem como objetivo fornecer constantes e métodos estáticos para se trabalhar com funções trigonométricas, logarítmicas e outras funções matemáticas comuns.

`sin(variavel)` | Calcula o seno
`cos(variavel)` | Calcula o cosseno
`tan(variavel)` | Calcula a tangente
`floor(variavel)` | Remove o valor decimal do dado número
`ceil(variavel)` | Arredonda o dado número para o próximo
`abs(variavel)` | Retorna o valor absoluto do dado número
`sqrt(variavel)` | Retorna a raiz quadrada do dado número
`pow(variavelA, variavelB)` | Multiplica o seu valor inicial múltiplas vezes (consoante o número de vezes)

```java
package com.caffeinealgorithm.programaremjava;

public class ClasseMath {
  public void Run() {
    System.out.printf("Resultado do método sin(): %.2f\n", Math.sin(10.5));
    System.out.printf("Resultado do método cos(): %.2f\n", Math.cos(10.5));
    System.out.printf("Resultado do método tan(): %.2f\n", Math.tan(10.5));
    System.out.printf("Resultado do método floor(): %.2f\n", Math.floor(10.5));
    System.out.printf("Resultado do método ceil(): %.2f\n", Math.ceil(10.5));
    System.out.printf("Resultado do método abs(): %.2f\n", Math.abs(-10.5));
    System.out.printf("Resultado do método sqrt(): %.2f\n", Math.sqrt(9));
    System.out.printf("Resultado do método pow(): %.2f", Math.pow(2, 5));
  }
}

/*
  Resultado do método sin(): -0.88
  Resultado do método cos(): -0.48
  Resultado do método tan(): 1.85
  Resultado do método floor(): 10.00
  Resultado do método ceil(): 11.00
  Resultado do método abs(): 10.50
  Resultado do método sqrt(): 3.00
  Resultado do método pow(): 32.00
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/cpzjF8rXdI0" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/cpzjF8rXdI0){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/20220328/math-class-in-java/){:target="\_blank"}.

### _Happy coding!_
