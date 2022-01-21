---
layout: post
excerpt: Blog
title: 'Classe Hashtable em C#'
description: 'Descobre como se trabalha com a classe Hashtable na linguagem de programação C#. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'c#, csharp, classe hashtable, classe, hashtable, hash, publicação'
date: 2022-01-21
categories: [C#]
---

Nesta publicação aprende-se a trabalhar com a classe Hashtable para que se possa usar esses mesmos conhecimentos e assim evoluir.

- esta classe (pertencente à biblioteca System.Collections) representa uma coleção de associações entre pares de valores;
- o primeiro elemento do par é chamado de chave (identificador) e o outro é chamado de conteúdo;
- a coleção de associações entre pares de valores são organizadas de acordo com o código hash da chave.

```csharp
using System;
using System.Collections;

namespace Base {
  class ClasseHashtable {
    private Hashtable pessoas = new Hashtable() {
      { "Nelson Silva", 25 },
      { "Larissa Fernandes", 37 }
    };

    public void Run() {
      pessoas.Add("Pedro Henrique", 52);
      pessoas.Add("Raquel Soares", 68);

      pessoas["Pedro Henrique"] = 100;
      pessoas.Remove("Larissa Fernandes");
      pessoas.Clear();

      Console.WriteLine($"Número de pessoas: {pessoas.Count}");

      foreach (DictionaryEntry pessoa in pessoas) {
        Console.WriteLine($"Nome: {pessoa.Key}");
        Console.WriteLine($"Idade: {pessoa.Value}");
      }
    }
  }
}

/*
  Número de pessoas: 3
  Nome: Raquel Soares
  Idade: 68
  Nome: Nelson Silva
  Idade: 25
  Nome: Pedro Henrique
  Idade: 100
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/QnhCVLqYcJM" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/QnhCVLqYcJM){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/20220121/hashtable-class-in-csharp/){:target="\_blank"}.

### _Happy coding!_
