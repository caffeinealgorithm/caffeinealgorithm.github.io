---
layout: post
excerpt: Blog
title: 'Classe File em C#'
description: 'Descobre como se trabalha com a classe File na linguagem de programação C#. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'c#, csharp, classe file, classe, file, publicação'
date: 2022-01-11
categories: [C#]
---

Nesta publicação aprende-se a trabalhar com a classe File para que se possa usar esses mesmos conhecimentos e assim evoluir.

- esta classe (pertencente à biblioteca System.IO) fornece métodos estáticos para criar, copiar, apagar, mover e abrir um único ficheiro de cada vez.

`Create()` | Cria um ficheiro no caminho especificado
`Copy()` | Copia um ficheiro existente para um novo ficheiro (não é permitida a substituição de um ficheiro com o mesmo nome)
`Delete()` | Apaga um determinado ficheiro
`Move()` | Move o ficheiro especificado para um outro local (existe a opção de alterar o nome do dado ficheiro)
`Open()` | Abre um determinado ficheiro sendo possível aceder a esse mesmo
`Exists()` | Verifica se um dado ficheiro existe ou não

```csharp
using System;
using System.IO;

namespace Base {
  class ClasseFile {
    public void Run() {
      // File.Create("Ficheiro-Create.txt");
      // File.Copy("Ficheiro-Create.txt", "Ficheiro-Copy.txt", true);
      // File.Delete("Ficheiro-Copy.txt");
      // File.Move("Ficheiro-Create.txt", "Ficheiro-Move.txt");

      File.Delete("Ficheiro-Move.txt");

      if (File.Exists("Ficheiro-Move.txt"))
        Console.WriteLine("O ficheiro \"Ficheiro-Move.txt\" existe.");
      else
        Console.WriteLine("O ficheiro \"Ficheiro-Move.txt\" não existe.");
    }
  }
}

// O ficheiro "Ficheiro-Move.txt" não existe.
```

Não te esqueças de [assistir ao vídeo](https://youtu.be/jW8uXGlFwZo){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/20220111/file-class-in-csharp/){:target="\_blank"}.

### _Happy coding!_
