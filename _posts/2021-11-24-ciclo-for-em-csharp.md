---
layout: post
excerpt: Blog
title: 'Ciclo for em C#'
description: 'Descobre como se trabalha com o ciclo for na linguagem de programação C#. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'c#, csharp, ciclo for, ciclo, for, ciclos, publicação'
date: 2021-11-24
categories: [C#]
---

Nesta publicação aprende-se a trabalhar com o ciclo for para que se possa usar esses mesmos conhecimentos e assim evoluir.

- um ciclo permite executar uma instrução ou um conjunto de instruções várias vezes;
- o ciclo for dá voltas (itera) consoante um determinado range.

```csharp
using System;

namespace Base {
  class CicloFor {
    public void Run() {
      string[] materialEscolar = new string[6] {
        "Mochila", // 0
        "Estojo", // 1
        "Lápis", // 2
        "Borracha", // 3
        "Afia", // 4
        "Tesoura" // 5
      };

      /*
        Console.WriteLine(materialEscolar[0]);
        Console.WriteLine(materialEscolar[1]);
      */

      for (int indice = 0; indice < materialEscolar.Length; indice++) {
        Console.WriteLine($"materialEscolar[{indice}]: {materialEscolar[indice]}");
      }
    }
  }
}

/*
  materialEscolar[0]: Mochila
  materialEscolar[1]: Estojo
  materialEscolar[2]: Lápis
  materialEscolar[3]: Borracha
  materialEscolar[4]: Afia
  materialEscolar[5]: Tesoura
*/
```

Não te esqueças de [assistir ao vídeo](https://youtu.be/9h8vh0r3fwk){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/20211124/for-loop-in-csharp/){:target="\_blank"}.

### _Happy coding!_
