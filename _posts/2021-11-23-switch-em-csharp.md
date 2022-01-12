---
layout: post
excerpt: Blog
title: 'Switch em C#'
description: 'Descobre como se trabalha com o switch na linguagem de programação C#. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'c#, csharp, switch, condições, condição, publicação'
date: 2021-11-23
categories: [C#]
---

Nesta publicação aprende-se a trabalhar com o switch para que se possa usar esses mesmos conhecimentos e assim evoluir.

- o switch é uma outra forma de se trabalhar com decisões e pode somente verificar uma relação de igualdade, ou seja, não pode usar operadores de comparação;
- o case compara o que fora definido em si próprio com o conteúdo do argumento que fora definido no switch;
- o default é executado quando o conteúdo do argumento que fora definido no switch não for encontrado em nenhum case.

```csharp
using System;

namespace Base {
  class Switch {
    public void Run() {
      char caso = 'D';

      switch (caso) {
        case 'A':
          Console.WriteLine("O caso A existe.");
          break;
        case 'B':
          Console.WriteLine("O caso B existe.");
          break;
        case 'C':
          Console.WriteLine("O caso C existe.");
          break;
        default:
          Console.WriteLine($"O caso {caso} não existe.");
          break;
      }
    }
  }
}

// O caso D não existe.
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/vqC8km6r22k" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/vqC8km6r22k){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/20211123/switch-in-csharp/){:target="\_blank"}.

### _Happy coding!_
