---
layout: post
excerpt: Blog
title: 'Construtores em C#'
description: 'Descobre como se trabalha com construtores na linguagem de programação C#. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'c#, csharp, construtores, construtor, publicação'
date: 2021-12-21
categories: [C#]
---

Nesta publicação aprende-se a trabalhar com construtores para que se possa usar esses mesmos conhecimentos e assim evoluir.

- os construtores têm como função inicializar tudo o que seja necessário ao se criar um determinado objeto;
- pode-se criar vários construtores numa classe.

```csharp
using System;

namespace Base {
  class Program {
    static void Main(string[] args) {
      var pessoa1 = new Construtores("Nelson", "Silva", 25);
      var pessoa2 = new Construtores("Larissa", "Fernandes", 17);

      pessoa1.Informacao();
      pessoa1.VerificarEntrada();

      /*
        Nome: Nelson Silva
        Idade: 25
        Esta pessoa pode entrar no local porque tem mais de 18 anos.
      */

      pessoa2.Informacao();
      pessoa2.VerificarEntrada();

      /*
        Nome: Larissa Fernandes
        Idade: 17
        Esta pessoa não pode entrar no local porque tem menos de 18 anos.
      */

      Console.ReadKey();
    }
  }
}
```

```csharp
using System;

namespace Base {
  class Construtores {
    string primeiroNome = string.Empty, ultimoNome = string.Empty;
    int idade = 0;

    public Construtores(string primeiroNome, string ultimoNome, int idade) {
      this.primeiroNome = primeiroNome;
      this.ultimoNome = ultimoNome;
      this.idade = idade;
    }

    public void Informacao() {
      Console.WriteLine($"Nome: {primeiroNome} {ultimoNome}");
      Console.WriteLine($"Idade: {idade}");
    }

    public void VerificarEntrada() {
      if (idade >= 18)
        Console.WriteLine("Esta pessoa pode entrar no local porque tem mais de 18 anos.");
      else
        Console.WriteLine("Esta pessoa não pode entrar no local porque tem menos de 18 anos.");
    }
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/b65giOzFRYU" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/b65giOzFRYU){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/constructors-in-csharp/){:target="\_blank"}.

### _Happy coding!_
