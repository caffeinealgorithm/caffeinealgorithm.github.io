---
layout: post
excerpt: Blog
title: 'Classes e Objetos em C#'
description: 'Descobre como se trabalha com classes e objetos na linguagem de programação C#. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'c#, csharp, classes e objetos, classes, objetos, classe, objeto, publicação'
date: 2021-12-20
categories: [C#]
---

Nesta publicação aprende-se a trabalhar com classes e objetos para que se possa usar esses mesmos conhecimentos e assim evoluir.

- uma classe representa um conjunto de objetos, sendo que, define o comportamento desses mesmos através de métodos e quais estados ele é capaz de manter através dos seus atributos;
- um objeto é uma instância de uma classe e é capaz de armazenar estados através dos seus atributos e de reagir a mensagens enviadas para ele.

```csharp
using System;

namespace Base {
  class Program {
    static void Main(string[] args) {
      var inimigo1 = new ClassesEObjetos();
      var inimigo2 = new ClassesEObjetos();

      inimigo1.Ataque(); // Eu fui atacado e perdi uma vida.
      inimigo1.Ataque(); // Eu fui atacado e perdi uma vida.
      inimigo1.Ataque(); // Eu fui atacado e perdi uma vida.
      inimigo1.VerificarVida(); // Eu ainda estou em combate e tenho 2 vidas.
      inimigo2.VerificarVida(); // Eu ainda estou em combate e tenho 5 vidas.

      Console.ReadKey();
    }
  }
}
```

```csharp
using System;

namespace Base {
  class ClassesEObjetos {
    int vidas = 5;

    public void Ataque() {
      Console.WriteLine("Eu fui atacado e perdi uma vida.");
      vidas -= 1;
    }

    public void VerificarVida() {
      if (vidas <= 0)
        Console.WriteLine("Eu estou morto porque não tenho mais vidas.");
      else
        Console.WriteLine($"Eu ainda estou em combate e tenho {vidas} vidas.");
    }
  }
}
```

Não te esqueças de [assistir ao vídeo](https://youtu.be/9FNQUgfBUz8){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/20211220/classes-and-objects-in-csharp/){:target="\_blank"}.

### _Happy coding!_
