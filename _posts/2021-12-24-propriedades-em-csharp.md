---
layout: post
excerpt: Blog
title: 'Propriedades em C#'
description: 'Descobre como se trabalha com o propriedades na linguagem de programação C#. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'c#, csharp, propriedades, propriedade, get, set, publicação'
date: 2021-12-24
categories: [C#]
---

Nesta publicação aprende-se a trabalhar com o propriedades para que se possa usar esses mesmos conhecimentos e assim evoluir.

- as propriedades (get e set) são membros que oferecem um mecanismo flexível para leitura, gravação ou cálculo do valor de um campo particular (neste caso um atributo que seja private - modificador de acesso);
- estas mesmas permitem que os dados sejam acessados facilmente e ainda ajudam a promover a segurança e a flexibilidade dos métodos;
- é importante saber também que as propriedades permitem que uma classe exponha um maneira pública de obter e definir valor, ocultando o código de implementação ou verificação;
- as propriedades que não implementam um set são somente de leitura.

```csharp
using System;

namespace Base {
  class Program {
    static void Main(string[] args) {
      var pessoa = new Propriedades();

      pessoa.PrimeiroNome = "Nelson";
      pessoa.UltimoNome = "Silva";
      pessoa.Informacao();
      Console.WriteLine($"Idade: {pessoa.idade}");

      /*
        Nome: Nelson Silva
        Idade: 25
      */

      Console.ReadKey();
    }
  }
}
```

```csharp
using System;

namespace Base {
  class Propriedades {
    private string primeiroNome = string.Empty, ultimoNome = string.Empty;
    private int idade = 25;
    // public int variavel { get; set; }

    public string PrimeiroNome {
      set {
        if (value != string.Empty)
          primeiroNome = value;
        else
          Console.WriteLine("A string referente ao primeiro nome não pode estar vazia.");
      }
    }

    public string UltimoNome {
      set {
        if (value != string.Empty)
          ultimoNome = value;
        else
          Console.WriteLine("A string referente ao último nome não pode estar vazia.");
      }
    }

    public int Idade { get => idade; }

    public void Informacao() {
      Console.WriteLine($"Nome: {primeiroNome} {ultimoNome}");
    }
  }
}
```

Não te esqueças de [assistir ao vídeo](https://youtu.be/QjvCyY5a2BM){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/20211224/properties-in-csharp/){:target="\_blank"}.

### _Happy coding!_
