---
layout: post
excerpt: Blog
title: 'Classe StreamWriter em C#'
description: 'Descobre como se trabalha com a classe StreamWriter na linguagem de programação C#. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'c#, csharp, classe streamwriter, classe, streamwriter, publicação'
date: 2022-01-12
categories: [C#]
redirect_from:
  - /blog/20220112/classe-streamwriter-em-csharp/
---

Nesta publicação aprende-se a trabalhar com a classe StreamWriter para que se possa usar esses mesmos conhecimentos e assim evoluir.

- esta classe (pertencente à biblioteca System.IO) tem como objetivo implementar um modo de escrita para que se possa escrever carateres em um fluxo (ficheiro) de acordo com uma codificação específica.

`StreamWriter (objeto).Write()` | Escreve no ficheiro todo o seu conteúdo sem mudar de linha
`StreamWriter (objeto).WriteLine()` | Escreve no ficheiro todo o seu conteúdo e muda de linha
`StreamWriter (objeto).Close()` | Termina a ligação existente com o determinado ficheiro

- o using garante o uso correto do mecanismo que liberta os recursos que não estão a ser geridos/utiizados.

```csharp
using System.Collections.Generic;
using System.IO;

namespace Base {
  class ClasseStreamWriter {
    private StreamWriter escreverFicheiro;
    private List<string> paises = new List<string>() {
      "Portugal",
      "Brasil",
      "Espanha",
      "França",
      "Itália",
      "Austrália",
      "Índia"
    };

    public void Run() {
      /*
        escreverFicheiro = new StreamWriter("Ficheiro.txt");

        foreach (var pais in paises)
          escreverFicheiro.WriteLine(pais);

        escreverFicheiro.Close();
      */

      using (escreverFicheiro = new StreamWriter("Ficheiro.txt")) {
        foreach (var pais in paises)
          escreverFicheiro.WriteLine(pais);
      }
    }
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/7Hjm23B-quw" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/7Hjm23B-quw){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/streamwriter-class-in-csharp/){:target="\_blank"}.

### _Happy coding!_
