---
layout: post
excerpt: Blog
title: 'Função WriteLine() e Strings em C#'
description: 'Descobre como se trabalha com a função WriteLine() e com as strings na linguagem de programação C#. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'c#, csharp, função writeline, função, writeline, strings, string, publicação'
date: 2021-11-05
categories: [C#]
---

Nesta publicação aprende-se a trabalhar com a função `WriteLine()` e com as strings para que se possa usar esses mesmos conhecimentos e assim evoluir.

- a função `Write()` imprime todo o seu conteúdo na linha de comandos sem mudar de linha;
- a função `WriteLine()` imprime todo o seu conteúdo na linha de comandos e muda de linha;
- a função `ReadKey()` aguarda que uma tecla do teclado seja pressionada e só depois é que o resto do código é executado;
- uma string é um conjunto de carateres (letras, números e/ou símbolos);
- todas as strings são inicializadas e finalizadas com aspas ("string").

```csharp
using System;
namespace Base {
  class Program {
    static void Main(string[] args) {
      var video = new FuncaoWriteLineEStrings();
      video.Run();
      Console.ReadKey();
    }
  }
}
```

```csharp
using System;
namespace Base {
  class FuncaoWriteLineEStrings {
    public void Run() {
      Console.Write("Estamos a usar a função Write() e eu sou uma string.");
      Console.WriteLine("Estamos a usar a função WriteLine() e eu continuo a ser uma string.");
      Console.WriteLine("Estamos a usar novamente a função WriteLine() e eu continuo a ser uma string.");
    }
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/2-dIbl35A_w" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/2-dIbl35A_w){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/20211105/writeline-function-and-strings-in-csharp/){:target="\_blank"}.

### _Happy coding!_
