---
layout: post
excerpt: Blog
title: 'delegate em C#'
description: 'Descobre como se trabalha com o delegate na linguagem de programação C#. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'c#, csharp, delegate, publicação'
date: 2022-01-04
categories: [C#]
redirect_from:
  - /blog/20220104/delegate-em-csharp/
---

Nesta publicação aprende-se a trabalhar com o delegate para que se possa usar esses mesmos conhecimentos e assim evoluir.

- o delegate é um tipo que representa referências aos métodos com uma lista de parâmetros e com um tipo de retorno;
- resumindo, ao se instanciar um delegate, pode-se associar a determinada instância a qualquer método com uma assinatura e um tipo de retorno compatíveis;
- é importante saber que o delegate permite que vários métodos possam ser chamados através de um único evento.

```csharp
using System;

namespace Base {
  class Delegate {
    private delegate void ConjuntoDeMetodos(string nome);

    public void Run() {
      Console.Write("Insere o teu primeiro e último nome: ");
      var nome = Console.ReadLine();

      var conjuntoDeMetodos = new ConjuntoDeMetodos(ImprimirNome);
      conjuntoDeMetodos += ImprimirNomeEmMaiusculas;
      conjuntoDeMetodos += ImprimirNomeEmMinusculas;
      conjuntoDeMetodos(nome);
    }

    public void ImprimirNome(string nome) {
      Console.WriteLine($"Nome: {nome}");
    }

    public void ImprimirNomeEmMaiusculas(string nome) {
      Console.WriteLine($"Nome em maiúsculas: {nome.ToUpper()}");
    }

    public void ImprimirNomeEmMinusculas(string nome) {
      Console.WriteLine($"Nome em minúsculas: {nome.ToLower()}");
    }
  }
}

/*
  Nome: Nelson Silva
  Nome em maiúsculas: NELSON SILVA
  Nome em minúsculas: nelson silva
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/bbXsVSa952Y" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/bbXsVSa952Y){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/delegate-in-csharp/){:target="\_blank"}.

### _Happy coding!_
