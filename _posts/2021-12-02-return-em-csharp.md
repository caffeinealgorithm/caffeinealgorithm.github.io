---
layout: post
excerpt: Blog
title: 'return em C#'
description: 'Descobre como se trabalha com o return na linguagem de programação C#. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'c#, csharp, return, publicação'
date: 2021-12-02
categories: [C#]
---

Nesta publicação aprende-se a trabalhar com o return para que se possa usar esses mesmos conhecimentos e assim evoluir.

- o return tem como objetivo retornar algo de uma função para que ao se chamar essa mesma se tenha acesso ao valor retornado.

```csharp
using System;

namespace Base {
  class Return {
    public void Run() {
      Console.WriteLine($"Resultado da adição: {Adicao()}");
    }

    public int Adicao() {
      int resultado = 0;

      for (int valor = 1; valor <= 10; valor++)
        resultado += valor;

      return resultado;
    }
  }
}

// Resultado da adição: 55
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/-WPMAO60yQ8" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/-WPMAO60yQ8){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/20211202/return-in-csharp/){:target="\_blank"}.

### _Happy coding!_
