---
layout: post
excerpt: Blog
title: 'struct em C#'
description: 'Descobre como se trabalha com o struct na linguagem de programação C#. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'c#, csharp, struct, estrutura, publicação'
date: 2021-12-30
categories: [C#]
---

Nesta publicação aprende-se a trabalhar com o struct para que se possa usar esses mesmos conhecimentos e assim evoluir.

- as structs (estruturas) são quase iguais às classes, no entanto, são bem mais limitadas;
- as diferenças são que:
  - quando estamos a falar de estruturas, os campos (atributos) não podem ser inicializados sem que esses mesmos sejam declaradas como const ou static;
  - uma estrutura não pode declarar um construtor padrão (um construtor sem parâmetros);
  - quando uma estrutura é atribuída a uma nova variável, todos os dados são copiados e qualquer modificação na nova cópia, não é refletida na estrutura original;
  - as estruturas são do tipo valor e classes são do tipo referência;
  - as estruturas podem ser instanciadas sem usar o new;
  - as estruturas podem declarar construtores com parâmetros;
  - uma estrutura não pode herdar uma outra estrutura ou classe e tambem não pode ser base de uma classe;
  - uma estrutura pode implementar interfaces;
  - uma estrutura pode tomar valor de um valor nulo (null).

```csharp
using System;

namespace Base {
  class Struct {
    public void Run() {
      var estrutura = new Estrutura();
      estrutura.Numero = 200;

      // O número precisa de ser >= 0 e <= 100.
    }
  }

  struct Estrutura : INumero {
    private int numero;

    public int Numero {
      set {
        if (value >= 0 && value <= 100) {
          numero = value;
          ImprimirNumero();
        }
        else
          Console.WriteLine("O número precisa de ser >= 0 e <= 100.");
      }
    }

    public void ImprimirNumero() {
      Console.WriteLine($"Número: {numero}");
    }
  }

  interface INumero {
    void ImprimirNumero();
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/tyvCf7CUEfg" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/tyvCf7CUEfg){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/struct-in-csharp/){:target="\_blank"}.

### _Happy coding!_
