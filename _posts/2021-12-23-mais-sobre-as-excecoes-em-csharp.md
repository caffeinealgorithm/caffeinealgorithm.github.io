---
layout: post
excerpt: Blog
title: 'Mais sobre as Exceções em C#'
description: 'Descobre como se trabalha com mais sobre as exceções na linguagem de programação C#. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'c#, csharp, exceções, exceção, publicação'
date: 2021-12-23
categories: [C#]
---

Nesta publicação aprende-se a trabalhar com mais sobre as exceções para que se possa usar esses mesmos conhecimentos e assim evoluir.

- uma exceção é um evento que ocorre durante a execução de um pedaço de código que interrompe o seu fluxo normal de instruções;
- resumindo, uma exceção representa um erro;
- existe a possibilidade de se criar exceções próprias e de as usar com o throw;
- o throw é usado para sinalizar a ocorrência da exceção durante a execução do programa.

```csharp
using System;

namespace Base {
  class MaisSobreAsExcecoes {
    private Exception stringVazia = new Exception("Não se pode verificar uma string que esteja vazia.");

    public void Run() {
      try {
        VerificarString("Nelson Silva");
      }
      catch (Exception excecao) {
        Console.WriteLine(excecao);
      }
    }

    private void VerificarString(string _string) {
      if (_string == string.Empty)
        throw stringVazia;
    }
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/06RgzwoqPDU" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/06RgzwoqPDU){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/20211223/more-about-exceptions-in-csharp/){:target="\_blank"}.

### _Happy coding!_
