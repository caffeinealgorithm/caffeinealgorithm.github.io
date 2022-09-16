---
layout: post
excerpt: Blog
title: 'Classe Debug em C#'
description: 'Descobre como se trabalha com a classe Debug na linguagem de programação C#. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'c#, csharp, classe debug, classe, debug, publicação'
date: 2022-01-19
categories: [C#]
redirect_from:
  - /blog/20220119/classe-debug-em-csharp/
---

Nesta publicação aprende-se a trabalhar com a classe Debug para que se possa usar esses mesmos conhecimentos e assim evoluir.

- esta classe (pertencente à biblioteca System.Diagnostics) fornece um conjunto de métodos e propriedades que ajudam a depurar o código

`Write()` | Imprime todo o seu conteúdo na janela "Diagnostic Tools" sem mudar de linha
`WriteLine()` | Imprime todo o seu conteúdo na janela "Diagnostic Tools" e muda de linha
`Print()` | Faz exatamente a mesma coisa

```csharp
using System.Diagnostics;

namespace Base {
  class ClasseDebug {
    private string[] cores = new string[] {
      "Azul",
      "Verde",
      "Amarelo",
      "Vermelho",
      "Laranja"
    };

    public void Run() {
      for (int indice = 0; indice < cores.Length; indice++)
        Debug.WriteLine($"cores[{indice}]: {cores[indice]}");
    }
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/DU1TJ_QGS_s" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/DU1TJ_QGS_s){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/debug-class-in-csharp/){:target="\_blank"}.

### _Happy coding!_
