---
layout: post
excerpt: Blog
title: 'Mais sobre Herança em C#'
description: 'Descobre como se trabalha com mais sobre a herança na linguagem de programação C#. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'c#, csharp, herança, publicação'
date: 2021-12-28
categories: [C#]
redirect_from:
  - /blog/20211228/mais-sobre-a-heranca-em-csharp/
---

Nesta publicação aprende-se a trabalhar com mais sobre a herança para que se possa usar esses mesmos conhecimentos e assim evoluir.

- a herança é um mecanismo pelo qual uma classe (subclasse) pode estender outra classe (superclasse) para tirar proveito das suas possíveis variáveis (atributos) e do seu comportamento (métodos);
- uma classe só pode herdar de apenas uma classe;
- o new é para criar algo novo, ou seja, um novo objeto, um novo array, uma nova lista, um novo dicionárioe etc.
- o virtual é usado para modificar uma declaração de um determinado método, propriedade ou evento e permite que esse mesmo seja substituído numa classe derivada;
- o override faz com que se seja possível estender ou modificar a implementação de um método herdado, propriedade ou evento abstract (vamos falar sobre o abstract num próximo vídeo) ou virtual.

```csharp
using System;

namespace Base {
  class MaisSobreAHeranca {
    public void Run() {
      var pessoa = new Filho();
      pessoa.Informacao();
      pessoa.ComidaPreferida();

      /*
        Nome: Nelson Silva
        Idade: 25
        A minha comida preferida é lasanha.
      */
    }
  }

  class Pai {
    protected string ultimoNome = "Silva";

    public virtual void ComidaPreferida() {
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

    public override void ComidaPreferida() {
      Console.WriteLine("A minha comida preferida é lasanha.");
    }
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/bGmyHB0Acvw" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/bGmyHB0Acvw){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/more-about-inheritance-in-csharp/){:target="\_blank"}.

### _Happy coding!_
