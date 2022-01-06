---
layout: post
excerpt: Blog
title: 'Classe Convert em C#'
description: 'Descobre como se trabalha com a classe Convert na linguagem de programação C#. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'c#, csharp, classe convert, classe, convert, publicação'
date: 2022-01-06
categories: [C#]
---

Nesta publicação aprende-se a trabalhar com a classe Convert para que se possa usar esses mesmos conhecimentos e assim evoluir.

- esta classe tem como objetivo ajudar (através dos seus métodos) na conversão de um tipo de dados base para um outro tipo de dados base.

```csharp
using System;

namespace Base {
  class ClasseConvert {
    private string letra = "N", anoAtual = "2021";
    private char _letra = ' ';
    private int _anoAtual = 0;

    public void Run() {
      try {
        _letra = Convert.ToChar(letra);
        _anoAtual = Convert.ToInt32(anoAtual);
      }
      catch (Exception excecao) {
        Console.WriteLine(excecao);
      }
      finally {
        if (_letra != ' ')
          Console.WriteLine($"Letra: {_letra}");

        if (_anoAtual != 0)
          Console.WriteLine($"Ano atual: {_anoAtual}");
      }
    }
  }
}

/*
  Letra: N
  Ano atual: 2021
*/
```

Não te esqueças de [assistir ao vídeo](https://youtu.be/7nJbm-CN2XY){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/20220106/convert-class-in-csharp/){:target="\_blank"}.

### _Happy coding!_
