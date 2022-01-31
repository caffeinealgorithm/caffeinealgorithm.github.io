---
layout: post
excerpt: Blog
title: 'Operador de Coalescência Nula em C#'
description: 'Descobre como se trabalha com o operador de coalescência nula na linguagem de programação C#. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'c#, csharp, operador de coalescência nula, operador, coalescência nula, coalescência, nula, publicação'
date: 2022-01-31
categories: [C#]
---

Nesta publicação aprende-se a trabalhar com o operador de coalescência nula para que se possa usar esses mesmos conhecimentos e assim evoluir.

- o operador de coalescência nula (??) retorna o que tiver à esquerda se o conteúdo não for null (caso contrário retorna o que tiver à direita).

```csharp
using System;

namespace Base {
  class OperadorCoalescenciaNula {
    private string nome;

    public string Nome {
      get {
        return nome ?? "O conteúdo é simplesmente nulo.";
      }

      set {
        nome = value;
      }
    }

    public void Run() {
      Console.WriteLine(Nome);

      Nome = "Nelson Silva";
      Console.WriteLine($"Nome: {Nome}");

      Nome = null;
      Console.WriteLine(Nome);

      VerificarTamanho(null);
      VerificarTamanho("Coalescência Nula");
    }

    private void VerificarTamanho(string palavra) {
      if (palavra?.Length > 5)
        Console.WriteLine($"\"{palavra}\": Esta palavra tem mais de 5 carateres.");
    }
  }
}

/*
  O conteúdo é simplesmente nulo.
  Nome: Nelson Silva
  O conteúdo é simplesmente nulo.
  "Coalescência Nula": Esta palavra tem mais de 5 carateres.
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/s-X26LwvxC0" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/s-X26LwvxC0){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/20220131/null-coalescence-operator-in-csharp/){:target="\_blank"}.

### _Happy coding!_
