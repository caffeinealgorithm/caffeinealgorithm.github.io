---
layout: post
excerpt: Blog
title: 'partial em C#'
description: 'Descobre como se trabalha com o partial na linguagem de programação C#. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'c#, csharp, partial, publicação'
date: 2021-12-31
categories: [C#]
---

Nesta publicação aprende-se a trabalhar com o partial para que se possa usar esses mesmos conhecimentos e assim evoluir.

- o partial é utilizado para informar ao compilador que a determinada classe existe em um outro ficheiro (ou bem mais do que um);
- resumindo, com o uso do partial podemos ter a mesma classe em vários ficheiros;
- é importante saber que o partial é muito usado quando se trabalha em equipa e que os métodos também podem usar o partial;
- não se pode utilizar modificadores de acesso em métodos partial.

```csharp
using System;

namespace Base {
  class Partial {
    public void Run() {
      var pessoa = new Pessoa();
      pessoa.Informacao();

      /*
        Nome: Nelson Silva
        Idade: 25
      */
    }
  }

  partial class Pessoa {
    private string primeiroNome = "Nelson";
    partial void _Informacao();

    public void Informacao() {
      _Informacao();
    }
  }

  partial class Pessoa {
    private string ultimoNome = "Silva";
    private int idade = 25;

    partial void _Informacao() {
      Console.WriteLine($"Nome: {primeiroNome} {ultimoNome}");
      Console.WriteLine($"Idade: {idade}");
    }
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/xwk4Xx5-zO0" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/xwk4Xx5-zO0){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/partial-in-csharp/){:target="\_blank"}.

### _Happy coding!_
