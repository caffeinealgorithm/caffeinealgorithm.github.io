---
layout: post
excerpt: Blog
title: 'ref e out em C#'
description: 'Descobre como se trabalha com o ref e out na linguagem de programação C#. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'c#, csharp, ref e out, ref, out, publicação'
date: 2021-12-09
categories: [C#]
---

Nesta publicação aprende-se a trabalhar com o ref e out para que se possa usar esses mesmos conhecimentos e assim evoluir.

- o ref e o out fazem praticamente a mesma coisa (criam um ligação com o argumento enviado para a determinada função);
- se o conteúdo desse mesmo argumento mudar, ambos mudam (dentro e fora da função);
- a única diferença que existe entre o ref e o out é apenas para o compilador, o ref transmite ao compilador que o argumento fora inicializado antes de entrar na função enquanto que o out transmite que o argumento será inicializado dentro da função.

```csharp
using System;

namespace Base {
  class RefEOut {
    public void Run() {
      int numero = 0;

      Console.WriteLine($"Número antes da função: {numero}");
      Out(out numero);
      Console.WriteLine($"Número depois da função: {numero}");
    }

    public void Normal(int numero) {
      numero = 1;
    }

    public void Ref(ref int numero) {
      numero = 2;
    }

    public void Out(out int numero) {
      numero = 3;
    }
  }
}

/*
  Número antes da função: 0
  Número depois da função: 3
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/IOUI--CFDFs" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/IOUI--CFDFs){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/ref-and-out-in-csharp/){:target="\_blank"}.

### _Happy coding!_
