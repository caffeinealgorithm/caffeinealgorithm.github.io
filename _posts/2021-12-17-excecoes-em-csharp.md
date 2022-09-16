---
layout: post
excerpt: Blog
title: 'Exceções em C#'
description: 'Descobre como se trabalha com exceções na linguagem de programação C#. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'c#, csharp, exceções, exceção, publicação'
date: 2021-12-17
categories: [C#]
redirect_from:
  - /blog/20211217/excecoes-em-csharp/
---

Nesta publicação aprende-se a trabalhar com exceções para que se possa usar esses mesmos conhecimentos e assim evoluir.

- uma exceção é um evento que ocorre durante a execução de um pedaço de código que interrompe o seu fluxo normal de instruções;
- resumindo, uma exceção representa um erro;
- o try executa todo o pedaço de código presente nele mesmo e passa automaticamente para o catch;
- o catch verifica o resultado do que fora executado dentro do try e transmite o que estiver contido nele mesmo (na maioria das vezes a própria exceção);
- o finally é executado caso haja alguma exceção ou não.

```csharp
using System;

namespace Base {
  class Excecoes {
    public void Run() {
      int[] numeros = new int[5] {
        1, 2, 3, 4, 5
      };

      try {
        Console.WriteLine($"Conteúdo do elemento: {numeros[4]}");
      }
      catch (Exception excecao) {
        // Console.WriteLine("O código presente no try não está a funcionar corretamente.");
        Console.WriteLine(excecao);
      }
      finally {
        Console.WriteLine("Eu faço parte do finally e sou executado caso haja alguma exceção ou não.");
      }
    }
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/Gw6RYAu0yOo" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/Gw6RYAu0yOo){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/exceptions-in-csharp/){:target="\_blank"}.

### _Happy coding!_
