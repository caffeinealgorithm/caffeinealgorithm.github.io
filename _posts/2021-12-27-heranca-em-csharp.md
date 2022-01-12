---
layout: post
excerpt: Blog
title: 'Herança em C#'
description: 'Descobre como se trabalha com a herança na linguagem de programação C#. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'c#, csharp, herança, publicação'
date: 2021-12-27
categories: [C#]
---

Nesta publicação aprende-se a trabalhar com a herança para que se possa usar esses mesmos conhecimentos e assim evoluir.

- a herança é um mecanismo pelo qual uma classe (subclasse) pode estender outra classe (superclasse) para tirar proveito das suas possíveis variáveis (atributos) e do seu comportamento (métodos);
- uma classe só pode herdar de apenas uma classe;
- o protected resume-se à possibilidade de acesso apenas dentro da própria classe ou dentro de uma classe derivada dessa mesma.

```csharp
using System;

namespace Base {
  class Heranca {
    public void Run() {
      var pessoa = new Filho();
      pessoa.Informacao();
      pessoa.ComidaPreferida();

      /*
        Nome: Nelson Silva
        Idade: 25
        A minha comida preferida é arroz de marisco.
      */
    }
  }

  class Pai {
    protected string ultimoNome = "Silva";

    public void ComidaPreferida() {
      Console.WriteLine("A minha comida preferida é arroz de marisco.");
    }
  }

  class Filho : Pai {
    private string primeiroNome = "Nelson";
    private int idade = 25;

    public void Informacao() {
      Console.WriteLine($"Nome: {primeiroNome} {ultimoNome}");
      Console.WriteLine($"Idade: {idade}");
    }
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/kDKbnI-opqE" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/kDKbnI-opqE){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/20211227/inheritance-in-csharp/){:target="\_blank"}.

### _Happy coding!_
