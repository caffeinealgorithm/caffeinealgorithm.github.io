---
layout: post
excerpt: Blog
title: 'Variáveis em C#'
description: 'Descobre como se trabalha com variáveis do tipo inteiro, decimal (double), string, char e booleano na linguagem de programação C#. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'c#, csharp, variáveis, variável, inteiro, decimal, double, string, char, booleano, publicação'
date: 2021-11-09
categories: [C#]
---

Nesta publicação aprende-se a trabalhar com variáveis do tipo inteiro, decimal (double), string, char e booleano para que se possa usar esses mesmos conhecimentos e assim evoluir.

- uma variável é um objeto (uma posição localizada na memória) que representa um valor ou uma expressão;
- em algumas das linguagens de programação existentes não é necessário definir o tipo de variável mas no C# é;
- tipos de variáveis: inteiro, decimal (double), string, char, booleano, arrays, listas, dicionários e mais alguns;
- é de referir que vamos falar de arrays, listas e de dicionários nas próximas publicações.

```csharp
using System;

namespace Base {
  class Variaveis {
    public void Run() {
      int inteiro = 10;
      double _double = 10.5;
      string _string = "Eu sou uma string.";
      char carater = 'c';
      bool booleano = true;

      Console.WriteLine("inteiro: " + inteiro); // inteiro: 10
      Console.WriteLine("double: " + _double); // double: 10,5
      Console.WriteLine("string: " + _string); // string: Eu sou uma string.
      Console.WriteLine("carater: " + carater); // carater: c
      Console.WriteLine("booleano: " + booleano); // booleano: True
    }
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/H1D_3_XgI9E" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/H1D_3_XgI9E){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/variables-in-csharp/){:target="\_blank"}.

### _Happy coding!_
