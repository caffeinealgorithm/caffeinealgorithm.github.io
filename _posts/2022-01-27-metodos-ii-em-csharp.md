---
layout: post
excerpt: Blog
title: 'Métodos II em C#'
description: 'Descobre como se trabalha com dois métodos específicos (IndexOf() e Trim()) na linguagem de programação C#. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'c#, csharp, métodos, método, funções, função, publicação'
date: 2022-01-27
categories: [C#]
redirect_from:
  - /blog/20220127/metodos-ii-em-csharp/
---

Nesta publicação aprende-se a trabalhar com dois métodos específicos (`IndexOf()` e `Trim()`) para que se possa usar esses mesmos conhecimentos e assim evoluir.

`IndexOf()` | Retorna uma substring a partir da primeira ocorrência de um carater (ou até mesmo de conjunto de carateres) até ao fim da determinada string
`Trim()` | Elimina os espaços presentes no início e no fim de uma string, ou seja, retorna uma cópia modificada da string original

```csharp
using System;

namespace Base {
  class MetodosII {
    private string loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur.";

    public void Run() {
      // IndexOf()
      var indice = 0;

      while ((indice = loremIpsum.IndexOf('i', indice)) != -1) {
        Console.WriteLine(loremIpsum.Substring(indice));
        indice++;
      }

      // Trim()
      Console.Write("Insere o teu primeiro nome: ");
      var primeiroNome = Console.ReadLine();

      Console.Write("Insere o teu último nome: ");
      var ultimoNome = Console.ReadLine();

      Console.WriteLine($"Nome (sem o uso do método Trim()): {primeiroNome} {ultimoNome}");
      Console.WriteLine($"Nome (com o uso do método Trim()): {primeiroNome.Trim()} {ultimoNome.Trim()}");
    }
  }
}

/*
  ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur.
  it amet, consectetur adipiscing elit. Vestibulum consectetur.
  ipiscing elit. Vestibulum consectetur.
  iscing elit. Vestibulum consectetur.
  ing elit. Vestibulum consectetur.
  it. Vestibulum consectetur.
  ibulum consectetur.
  Insere o teu primeiro nome:          Nelson
  Insere o teu último nome:    Silva
  Nome (sem o uso do método Trim()):          Nelson          Silva
  Nome (com o uso do método Trim()): Nelson Silva
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/r9h6UzvoRCE" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/r9h6UzvoRCE){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/methods-ii-in-csharp/){:target="\_blank"}.

### _Happy coding!_
