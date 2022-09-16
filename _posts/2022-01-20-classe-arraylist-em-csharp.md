---
layout: post
excerpt: Blog
title: 'Classe ArrayList em C#'
description: 'Descobre como se trabalha com a classe ArrayList na linguagem de programação C#. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'c#, csharp, classe arraylist, classe, arraylist, arrays, array, publicação'
date: 2022-01-20
categories: [C#]
redirect_from:
  - /blog/20220120/classe-arraylist-em-csharp/
---

Nesta publicação aprende-se a trabalhar com a classe ArrayList para que se possa usar esses mesmos conhecimentos e assim evoluir.

- esta classe (pertencente à biblioteca System.Collections) é um conjunto ordenado de valores (do tipo object) que se redimensiona dinamicamente e a sua capacidade aumenta consoante o números de valores que são adicionados (apenas se o espaço for necessário);
- esses valores que compõem um ArrayList são chamados de elementos.

```csharp
using System;
using System.Collections;

namespace Base {
  class ClasseArrayList {
    private ArrayList materiaisEscolares = new ArrayList() {
      "Mochila",
      "Estojo",
      "Lápis",
      "Borracha"
    };

    public void Run() {
      materiaisEscolares.Add("Afia");
      materiaisEscolares.Add("Tesoura");

      materiaisEscolares.Remove("Mochila");
      materiaisEscolares.Reverse();
      // materiaisEscolares.Clear();

      Console.WriteLine($"Número de materiais escolares: {materiaisEscolares.Count}");

      foreach (var materialEscolar in materiaisEscolares)
        Console.WriteLine($"Material escolar: {materialEscolar}");
    }
  }
}

/*
  Número de materiais escolares: 5
  Material escolar: Tesoura
  Material escolar: Afia
  Material escolar: Borracha
  Material escolar: Lápis
  Material escolar: Estojo
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/BKogMn09eBo" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/BKogMn09eBo){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/arraylist-class-in-csharp/){:target="\_blank"}.

### _Happy coding!_
