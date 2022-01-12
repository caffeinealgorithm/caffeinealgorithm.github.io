---
layout: post
excerpt: Blog
title: 'if, else if e else em C#'
description: 'Descobre como se trabalha com decisões (if, else if e else) na linguagem de programação C#. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'c#, csharp, if, else if, else, condições, condição, publicação'
date: 2021-11-18
categories: [C#]
---

Nesta publicação aprende-se a trabalhar com decisões (if, else if e else) para que se possa usar esses mesmos conhecimentos e assim evoluir.

```csharp
using System;

namespace Base {
  class IfElseIfEElse {
    /*
      (if - se) condição for verdadeira {
        o código dentro do if é executado
      }
      (else if - senão se) condição for verdadeira (só ocorre o else if caso a condição de if seja falsa) {
        o código dentro do else if é executado
      }
      (else - senão) sem condição (só ocorre caso a condição de if e de else if sejam falsas) {
        o código dentro do else é executado
      }
    */

    public void Run() {
      int x = 30;

      if (x == 10) {
        Console.WriteLine("O valor de x é igual a 10.");
      }
      else if (x == 20) {
        Console.WriteLine("O valor de x é igual a 20.");
      }
      else {
        Console.WriteLine("O valor de x é diferente de 10 e de 20.");
      }
    }
  }
}

// O valor de x é diferente de 10 e de 20.
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/x7FJnvDzVtg" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/x7FJnvDzVtg){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/20211118/if-else-if-and-else-in-csharp/){:target="\_blank"}.

### _Happy coding!_
