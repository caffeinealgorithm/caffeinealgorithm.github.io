---
layout: post
excerpt: Blog
title: 'Métodos I em C#'
description: 'Descobre como se trabalha com dois métodos específicos (Substring() e Split()) na linguagem de programação C#. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'c#, csharp, métodos, método, funções, função, publicação'
date: 2022-01-26
categories: [C#]
redirect_from:
  - /blog/20220126/metodos-i-em-csharp/
---

Nesta publicação aprende-se a trabalhar com dois métodos específicos (`Substring()` e `Split()`) para que se possa usar esses mesmos conhecimentos e assim evoluir.

`Substring()` | Retorna uma substring (uma nova string com os carateres de um certo intervalo) de acordo com o índice de ínicio e o comprimento, sendo que, o comprimento é opcional
`Split()` | Divide um conjunto de carateres (de acordo com o determinado parâmetro/argumento) e retorna esse mesmo em subconjuntos de carateres, ou seja, retorna um array de strings (a classe Regex é referente ao uso de expressões regulares)

```csharp
using System;
using System.Text.RegularExpressions;

namespace Base {
  class MetodosI {
    private string umDoisTres = "UmDoisTrês", nome = "Nelson Gomes da Silva";

    public void Run() {
      // Substring()
      Console.WriteLine($"1: {umDoisTres.Substring(0, 2)}");
      Console.WriteLine($"2: {umDoisTres.Substring(2, 4)}");
      Console.WriteLine($"3: {umDoisTres.Substring(6)}");

      // Split()
      var palavras = nome.Split(' ');

      foreach (var palavra in palavras)
        Console.WriteLine($"Palavra: {palavra}");

      var _palavras = Regex.Split(nome, " Gomes da ");
      Console.WriteLine($"Nome: {_palavras[0]} {_palavras[1]}");
    }
  }
}

/*
  1: Um
  2: Dois
  3: Três
  Palavra: Nelson
  Palavra: Gomes
  Palavra: da
  Palavra: Silva
  Nome: Nelson Silva
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/nLboEkX1VNI" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/nLboEkX1VNI){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/methods-i-in-csharp/){:target="\_blank"}.

### _Happy coding!_
