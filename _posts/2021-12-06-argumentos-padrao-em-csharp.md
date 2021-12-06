---
layout: post
excerpt: Blog
title: 'Argumentos Padrão em C#'
description: 'Descobre como se trabalha com argumentos padrão na linguagem de programação C#. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'c#, csharp, argumentos padrão, argumentos, padrão, argumento, publicação'
date: 2021-12-06
categories: [C#]
---

Nesta publicação aprende-se a trabalhar com argumentos padrão para que se possa usar esses mesmos conhecimentos e assim evoluir.

- os argumentos padrão têm como objetivo usar o seu valor padrão quando o utilizador não envia nenhum valor para esse mesmo argumento.

```csharp
using System;

namespace Base {
  class ArgumentosPadrao {
    public void Run() {
      EstadoDaPorta(false);
    }

    public void EstadoDaPorta(bool estado = true) {
      if (estado)
        Console.WriteLine("A porta está aberta.");
      else {
        Console.WriteLine("A porta está fechada.");
      }
    }
  }
}

// A porta está fechada.
```

Não te esqueças de [assistir ao vídeo](https://youtu.be/9Dv8IR1Hy5U){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/20211206/default-arguments-in-csharp/){:target="\_blank"}.

### _Happy coding!_