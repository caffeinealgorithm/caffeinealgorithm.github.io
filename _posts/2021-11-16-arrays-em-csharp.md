---
layout: post
excerpt: Blog
title: 'Arrays em C#'
description: 'Descobre como se trabalha com arrays na linguagem de programação C#. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'c#, csharp, arrays, array, publicação'
date: 2021-11-16
categories: [C#]
---

Nesta publicação aprende-se a trabalhar com arrays para que se possa usar esses mesmos conhecimentos e assim evoluir.

- um array (vetor) tem um tamanho fixo e é utilizado para armazenar um conjunto de dados de uma forma sequencial;
- é mais útil pensar em um array como um conjunto de variáveis do mesmo tipo em que essas mesmas estão posicionadas na memória de forma adjacente;
- essas variáveis são chamadas de elementos e cada um desses é identificado por um índice.

```csharp
using System;

namespace Base {
  class Arrays {
    public void Run() {
      /*
        string[] cores = new string[5];

        cores[0] = "Azul";
        cores[1] = "Verde";
        cores[2] = "Amarelo";
        cores[3] = "Vermelho";
        cores[4] = "Laranja";
      */

      string[] cores = new string[] {
        "Azul",
        "Verde",
        "Amarelo",
        "Vermelho",
        "Laranja"
      };

      Console.WriteLine($"Número de cores: {cores.Length}"); // Número de cores: 5
      Console.WriteLine($"Primeira cor: {cores[0]}"); // Primeira cor: Azul
      Console.WriteLine($"Última cor: {cores[cores.Length - 1]}"); // Última cor: Laranja
    }
  }
}
```

Não te esqueças de [assistir ao vídeo](https://youtu.be/Us3VJyBFbbY){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/20211116/arrays-in-csharp/){:target="\_blank"}.

### _Happy coding!_
