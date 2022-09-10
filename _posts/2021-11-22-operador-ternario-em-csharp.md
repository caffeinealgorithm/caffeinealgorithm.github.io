---
layout: post
excerpt: Blog
title: 'Operador Ternário em C#'
description: 'Descobre como se trabalha com o operador ternário na linguagem de programação C#. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'c#, csharp, operador ternário, operador, ternário, publicação'
date: 2021-11-22
categories: [C#]
---

Nesta publicação aprende-se a trabalhar com o operador ternário para que se possa usar esses mesmos conhecimentos e assim evoluir.

- o operador ternário (`?:`) serve para simplificar uma decisão sem ser necessário usar o if ou o else.

```csharp
using System;

namespace Base {
  class OperadorTernario {
    // (condição) ? condição for verdadeira : condição for falsa

    public void Run() {
      int idade = 25;
      bool eMaiorDeIdade;

      /*
        if (idade >= 18) {
          eMaiorDeIdade = true;
        }
        else {
          eMaiorDeIdade = false;
        }
      */

      eMaiorDeIdade = (idade >= 18) ? true : false;

      Console.WriteLine($"É maior de idade: {eMaiorDeIdade}");
    }
  }
}

// É maior de idade: True
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/KMHQmYq6Kms" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/KMHQmYq6Kms){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/ternary-operator-in-csharp/){:target="\_blank"}.

### _Happy coding!_
