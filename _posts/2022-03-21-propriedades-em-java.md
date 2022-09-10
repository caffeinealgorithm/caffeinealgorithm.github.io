---
layout: post
excerpt: Blog
title: 'Propriedades em Java'
description: 'Descobre como se trabalha com o propriedades na linguagem de programação Java. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'java, propriedades, propriedade, get, set, publicação'
date: 2022-03-21
categories: [Java]
---

Nesta publicação aprende-se a trabalhar com o propriedades para que se possa usar esses mesmos conhecimentos e assim evoluir.

- as propriedades (get e set) são membros que oferecem um mecanismo flexível para leitura, gravação ou cálculo do valor de um campo particular;
- estas mesmas permitem que os dados sejam acessados facilmente e ainda ajudam a promover a segurança e a flexibilidade dos métodos;
- é importante saber também que as propriedades permitem que uma classe exponha um maneira pública de obter e definir valor, ocultando o código de implementação ou verificação;
- as propriedades que não implementam um set são somente de leitura.

```java
package com.caffeinealgorithm.programaremjava;

public class Main {
  public static void main(String[] args) {
    var pessoa = new Propriedades();

    pessoa.setPrimeiroNome("Nelson");
    pessoa.setUltimoNome("Silva");
    pessoa.informacao();
    System.out.printf("Idade: %d", pessoa.getIdade());

    /*
      Nome: Nelson Silva
      Idade: 25
    */
  }
}
```

```java
package com.caffeinealgorithm.programaremjava;

public class Propriedades {
  private String primeiroNome = "", ultimoNome = "";
  private int idade = 25;

  public void setPrimeiroNome(String primeiroNome) {
    if (primeiroNome != "")
      this.primeiroNome = primeiroNome;
    else
      System.out.println("A string referente ao primeiro nome não pode estar vazia.");
  }

  public void setUltimoNome(String ultimoNome) {
    if (ultimoNome != "")
      this.ultimoNome = ultimoNome;
    else
      System.out.println("A string referente ao último nome não pode estar vazia.");
  }

  public int getIdade() {
    return idade;
  }

  public void informacao() {
    System.out.printf("Nome: %s %s\n", primeiroNome, ultimoNome);
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/M9PXEZdgm48" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/M9PXEZdgm48){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/properties-in-java/){:target="\_blank"}.

### _Happy coding!_
