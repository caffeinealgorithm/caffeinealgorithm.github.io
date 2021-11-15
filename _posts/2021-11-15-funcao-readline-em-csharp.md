---
layout: post
excerpt: Blog
title: 'Função ReadLine() em C#'
description: 'Descobre como se trabalha com a função ReadLine() na linguagem de programação C#. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'c#, csharp, função readline, função, readline, publicação'
date: 2021-11-15
categories: [C#]
---

Nesta publicação aprende-se a trabalhar com a função `ReadLine()` para que se possa usar esses mesmos conhecimentos e assim evoluir.

- a função `ReadLine()` tem como principal objetivo "extrair" informações dadas pelo utilizador;
- resumindo, esta mesma função serve para aumentar a interação com o mesmo.

```csharp
using System;

namespace Base {
  class FuncaoReadLine {
    public void Run() {
      string primeiroNome, ultimoNome;
      int idade;

      Console.Write("Insere o teu primeiro nome: ");
      primeiroNome = Console.ReadLine();

      Console.Write("Insere o teu último nome: ");
      ultimoNome = Console.ReadLine();

      Console.Write("Insere a tua idade: ");
      idade = int.Parse(Console.ReadLine());

      Console.WriteLine($"Nome: {primeiroNome} {ultimoNome}\nIdade: {idade}");
    }
  }
}
```

Não te esqueças de [assistir ao vídeo](https://youtu.be/-C6_spcZYAs){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/20211115/readline-function-in-csharp/){:target="\_blank"}.

### _Happy coding!_
