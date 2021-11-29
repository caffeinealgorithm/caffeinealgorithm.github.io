---
layout: post
excerpt: Blog
title: 'break e continue em C#'
description: 'Descobre como se trabalha com o break e o continue na linguagem de programação C#. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'c#, csharp, break e continue, break, continue, publicação'
date: 2021-11-29
categories: [C#]
---

Nesta publicação aprende-se a trabalhar com o break e o continue para que se possa usar esses mesmos conhecimentos e assim evoluir.

- o break faz com que a vida do ciclo termine, ou seja, faz com que não se itere por mais nada;
- o continue ignora todo o conteúdo da volta que está a seguir dele mesmo e passa automaticamente para a próxima iteração.

```csharp
using System;
using System.Collections.Generic;

namespace Base {
  class BreakEContinue {
    public void Run() {
      int contador = 0;
      List<string> animais = new List<string>() {
        "Cão",
        "Gato",
        "Galinha",
        "Coelho",
        "Leão"
      };

      foreach (string animal in animais) {
        Console.WriteLine($"Animal: {animal}");

        if (animal == "Galinha")
          break;
      }

      while (contador < 10) {
        contador++;

        if (contador == 5)
          continue;

        Console.WriteLine($"Contador: {contador}");
      }
    }
  }
}

/*
  Animal: Cão
  Animal: Gato
  Animal: Galinha
  Contador: 1
  Contador: 2
  Contador: 3
  Contador: 4
  Contador: 6
  Contador: 7
  Contador: 8
  Contador: 9
  Contador: 10
*/
```

Não te esqueças de [assistir ao vídeo](https://youtu.be/b4bLQ0qf5gY){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/20211129/break-and-continue-in-csharp/){:target="\_blank"}.

### _Happy coding!_
