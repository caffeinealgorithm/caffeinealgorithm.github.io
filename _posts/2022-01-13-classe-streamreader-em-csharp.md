---
layout: post
excerpt: Blog
title: 'Classe StreamReader em C#'
description: 'Descobre como se trabalha com a classe StreamReader na linguagem de programação C#. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'c#, csharp, classe streamreader, classe, streamreader, publicação'
date: 2022-01-13
categories: [C#]
---

Nesta publicação aprende-se a trabalhar com a classe StreamReader para que se possa usar esses mesmos conhecimentos e assim evoluir.

- esta classe (pertencente à biblioteca System.IO) implementa um modo de leitura para que se possa ler os carateres presentes em um fluxo (ficheiro) de acordo com uma codificação específica.

`StreamReader (objeto).ReadLine()` | Lê apenas uma linha presente no conteúdo do ficheiro
`StreamReader (objeto).ReadToEnd()` | Lê todo o conteúdo do ficheiro até ao fim

```csharp
using System;
using System.IO;

namespace Base {
  class ClasseStreamReader {
    private StreamReader lerFicheiro;

    public void Run() {
      using (lerFicheiro = new StreamReader("Ficheiro.txt")) {
        var linha = string.Empty;

        /*
          while ((linha = lerFicheiro.ReadLine()) != null)
            Console.WriteLine(linha);
        */

        Console.WriteLine(lerFicheiro.ReadToEnd());
      }
    }
  }
}

/*
  Portugal
  Brasil
  Espanha
  França
  Itália
  Austrália
  Índia
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/NpjrizaL77w" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/NpjrizaL77w){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/streamreader-class-in-csharp/){:target="\_blank"}.

### _Happy coding!_
