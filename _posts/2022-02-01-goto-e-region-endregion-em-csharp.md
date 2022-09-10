---
layout: post
excerpt: Blog
title: 'goto e #region/#endregion em C#'
description: 'Descobre como se trabalha com o goto e o #region/#endregion na linguagem de programação C#. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'c#, csharp, goto, #region, region, #endregion, endregion, publicação'
date: 2022-02-01
categories: [C#]
---

Nesta publicação aprende-se a trabalhar com o goto e o #region/#endregion para que se possa usar esses mesmos conhecimentos e assim evoluir.

- o goto transfere o controlo da nossa aplicação em plena execução diretamente para um pedaço de código rotulado;
- o goto é bastante usado nos switch e nos ciclos profundamente aninhados;
- o #region permite especificar um pedaço de código que se pode expandir ou recolher e é bastante usado em grandes ficheiros (neste caso, classes) com muito código porque tem como vantagem a devida concentração (assim sendo, a do programador) apenas no pedaço de código que estamos a trabalhar porque o resto está oculto, ou seja, recolhido;
- para se fechar um bloco #region é necessário o #endregion.

```csharp
#region Bibliotecas
using System;
#endregion

namespace Base {
  class GotoERegionEndregion {
    #region Método Run()
    public void Run() {
      Console.WriteLine($"Resultado do método TestarGoto(): {TestarGoto()}");
    }
    #endregion

    #region Método TestarGoto()
    private int TestarGoto() {
      var numero = 0;

      for (int i = 1; i <= 10; i++) {
        for (int j = i; j <= 10; j++) {
          for (int k = 0; k <= 10; k++) {
            if (j == 5 && k == 5)
              goto PrimeiroCiclo;
          }

          numero++;
        }

        PrimeiroCiclo:
          continue;
      }

      return numero;
    }
    #endregion
  }
}

// Resultado do método TestarGoto(): 25
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/lbgVj7NBFAg" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/lbgVj7NBFAg){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/goto-and-region-endregion-in-csharp/){:target="\_blank"}.

### _Happy coding!_
