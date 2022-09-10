---
layout: post
excerpt: Blog
title: 'abstract em C#'
description: 'Descobre como se trabalha com o abstract na linguagem de programação C#. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'c#, csharp, abstract, publicação'
date: 2022-01-03
categories: [C#]
---

Nesta publicação aprende-se a trabalhar com o abstract para que se possa usar esses mesmos conhecimentos e assim evoluir.

- o abstract é utilizado para indicar que uma determinada classe não pode ser instanciada;
- resumindo, as classes abstract são consideradas de classes "incompletas";
- é importante saber que uma classe pode herdar de uma classe abstract e que os métodos só podem ser abstract se a classe também for;
- quando o static é aplicado a um certo membro (atributo, métodoe etc), não é necessário instanciar a tal classe para se ter acesso a esse membro devido a este ser estático.

```csharp
using System;
using System.Collections.Generic;

namespace Base {
  class Abstract {
    public void Run() {
      // ClasseX.InformacaoX();
      var classe = new ClasseY();
      classe.InformacaoY();

      /*
        País: Portugal
        País: Brasil
        País: Espanha
        País: França
        País: Itália
        País: Austrália
        País: Índia
      */
    }
  }

  abstract class ClasseX {
    public static string comunidade = "Caffeine Algorithm";
    public static List<string> paises = new List<string>() {
      "Portugal",
      "Brasil",
      "Espanha",
      "França",
      "Itália",
      "Austrália",
      "Índia"
    };

    public static void InformacaoX() {
      foreach (var carater in comunidade)
        Console.WriteLine($"Carater: {carater}");
    }

    public abstract void InformacaoY();
  }

  class ClasseY : ClasseX {
    public override void InformacaoY() {
      foreach (var pais in paises)
        Console.WriteLine($"País: {pais}");
    }
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/kic0anFXVUs" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/kic0anFXVUs){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/abstract-in-csharp/){:target="\_blank"}.

### _Happy coding!_
