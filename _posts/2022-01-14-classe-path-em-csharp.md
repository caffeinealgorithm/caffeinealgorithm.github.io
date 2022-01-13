---
layout: post
excerpt: Blog
title: 'Classe Path em C#'
description: 'Descobre como se trabalha com a classe Path na linguagem de programação C#. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'c#, csharp, classe path, classe, path, publicação'
date: 2022-01-14
categories: [C#]
---

Nesta publicação aprende-se a trabalhar com a classe Path para que se possa usar esses mesmos conhecimentos e assim evoluir.

- esta classe (pertencente à biblioteca System.IO) fornece vários métodos estáticos para se obter informações sobre um determinado ficheiro ou diretório.

`GetFileName()` | Retorna o nome do ficheiro e a sua extensão
`GetFileNameWithoutExtension()` | Retorna o nome do ficheiro sem a extensão
`GetExtension()` | Retorna apenas a extensão do ficheiro
`GetFullPath()` | Retorna todo o caminho especificado (caminho absoluto)

- quando se usa o const ao se criar um atributo, está-se a declarar um campo constante que após essa declaração não pode ser modificado.

```csharp
using System;
using System.IO;

namespace Base {
  class ClassePath {
    private const string Ficheiro = "Ficheiro.txt";

    public void Run() {
      Console.WriteLine($"Nome do ficheiro com a extensão: {Path.GetFileName(Ficheiro)}");
      Console.WriteLine($"Nome do ficheiro sem a extensão: {Path.GetFileNameWithoutExtension(Ficheiro)}");
      Console.WriteLine($"Extensão do ficheiro: {Path.GetExtension(Ficheiro)}");
      Console.WriteLine($"Caminho absoluto até ao ficheiro: {Path.GetFullPath(Ficheiro)}");
    }
  }
}

/*
  Nome do ficheiro com a extensão: Ficheiro.txt
  Nome do ficheiro sem a extensão: Ficheiro
  Extensão do ficheiro: .txt
  Caminho absoluto até ao ficheiro: ...\Ficheiro.txt
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/8wAijtTtazs" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/8wAijtTtazs){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/20220114/path-class-in-csharp/){:target="\_blank"}.

### _Happy coding!_
