---
layout: post
excerpt: Blog
title: 'Lambda em C#'
description: 'Descobre como se trabalha com o lambda na linguagem de programação C#. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'c#, csharp, lambda, publicação'
date: 2022-02-02
categories: [C#]
---

Nesta publicação aprende-se a trabalhar com o lambda para que se possa usar esses mesmos conhecimentos e assim evoluir.

- o lambda é usado na criação de funções anónimas e estas são assim chamadas porque não são declaradas com os termos de criação de uma típica função;
- resumindo, o lambda tem como principal objetivo simplificar certas e determinadas funções, sendo que estas, muitas das vezes não utilizam o termo "return" e sim uma expressão;
- o LINQ (Language-Integrated Query) traduzido à letra representa as consultas integradas à linguagem.

```csharp
using System;
using System.Linq;

namespace Base {
  class Lambda {
    private int[] numeros = new int[] {
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
    };

    public void Run() {
      /*
        Console.WriteLine($"Total de números pares: {ContarNumerosPares()}");
        Console.WriteLine($"Total de números ímpares: {ContarNumerosImpares()}");
      */

      Console.WriteLine($"Total de números pares: {numeros.Count(numero => numero % 2 == 0)}");
      Console.WriteLine($"Total de números ímpares: {numeros.Count(numero => numero % 2 != 0)}");
    }

    private int ContarNumerosPares() {
      var contador = 0;

      foreach (var numero in numeros) {
        if (numero % 2 == 0)
          contador++;
      }

      return contador;
    }

    private int ContarNumerosImpares() {
      var contador = 0;

      foreach (var numero in numeros) {
        if (numero % 2 != 0)
          contador++;
      }

      return contador;
    }
  }
}

/*
  Total de números pares: 5
  Total de números ímpares: 6
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/BrpYkREnwfM" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/BrpYkREnwfM){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/lambda-in-csharp/){:target="\_blank"}.

### _Happy coding!_
