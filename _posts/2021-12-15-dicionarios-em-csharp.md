---
layout: post
excerpt: Blog
title: 'Dicionários em C#'
description: 'Descobre como se trabalha com dicionários na linguagem de programação C#. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'c#, csharp, dicionários, dicionário, publicação'
date: 2021-12-15
categories: [C#]
redirect_from:
  - /blog/20211215/dicionarios-em-csharp/
---

Nesta publicação aprende-se a trabalhar com dicionários para que se possa usar esses mesmos conhecimentos e assim evoluir.

- os dicionários são estruturas de dados que implementam mapeamentos (coleção de associações entre pares de valores);
- o primeiro elemento do par é chamado de chave (identificador) e o outro é chamado de conteúdo.

```csharp
using System;
using System.Collections.Generic;

namespace Base {
  class Dicionarios {
    public void Run() {
      Dictionary<string, int> pessoas = new Dictionary<string, int>() {
        { "Nelson Silva", 25 },
        { "Larissa Fernandes", 37 }
      };

      pessoas.Add("Pedro Henrique", 52);
      pessoas.Add("Raquel Soares", 68);
      pessoas["Pedro Henrique"] = 100;
      pessoas.Remove("Larissa Fernandes");
      // pessoas.Clear();

      Console.WriteLine($"Número de pessoas: {pessoas.Count}\n");

      foreach (KeyValuePair<string, int> pessoa in pessoas) {
        Console.WriteLine($"Nome: {pessoa.Key}");
        Console.WriteLine($"Idade: {pessoa.Value}");
      }
    }
  }
}

/*
  Número de pessoas: 3

  Nome: Nelson Silva
  Idade: 25
  Nome: Pedro Henrique
  Idade: 100
  Nome: Raquel Soares
  Idade: 68
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/8q8-qNsEZGs" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/8q8-qNsEZGs){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/dictionaries-in-csharp/){:target="\_blank"}.

### _Happy coding!_
