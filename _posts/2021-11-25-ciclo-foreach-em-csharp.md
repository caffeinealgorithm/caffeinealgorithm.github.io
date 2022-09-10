---
layout: post
excerpt: Blog
title: 'Ciclo foreach em C#'
description: 'Descobre como se trabalha com o ciclo foreach na linguagem de programação C#. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'c#, csharp, ciclo foreach, ciclo, foreach, ciclos, publicação'
date: 2021-11-25
categories: [C#]
---

Nesta publicação aprende-se a trabalhar com o ciclo foreach para que se possa usar esses mesmos conhecimentos e assim evoluir.

- um ciclo permite executar uma instrução ou um conjunto de instruções várias vezes;
- o ciclo foreach dá voltas (itera) consoante os itens de uma sequência.

```csharp
using System;
using System.Collections.Generic;

namespace Base {
  class CicloForeach {
    public void Run() {
      string comunidade = "Caffeine Algorithm";
      List<string> paises = new List<string>() {
        "Portugal",
        "Brasil",
        "Espanha",
        "França",
        "Itália",
        "Austrália",
        "Índia"
      };

      /*
        foreach (char carater in comunidade) {
          Console.WriteLine($"Carater: {carater}");
        }
      */

      foreach (string pais in paises) {
        Console.WriteLine($"País: {pais}");
      }
    }
  }
}

/*
  País: Portugal
  País: Brasil
  País: Espanha
  País: França
  País: Itália
  País: Austrália
  País: Índia
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/seMBMqxe8KA" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/seMBMqxe8KA){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/foreach-loop-in-csharp/){:target="\_blank"}.

### _Happy coding!_
