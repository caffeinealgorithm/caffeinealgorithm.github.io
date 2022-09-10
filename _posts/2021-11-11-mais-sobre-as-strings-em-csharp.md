---
layout: post
excerpt: Blog
title: 'Mais sobre as Strings em C#'
description: 'Descobre como se trabalha com algo mais sobre as strings na linguagem de programação C#. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'c#, csharp, strings, string, publicação'
date: 2021-11-11
categories: [C#]
---

Nesta publicação aprende-se a trabalhar com algo mais sobre as strings para que se possa usar esses mesmos conhecimentos e assim evoluir.

`\n` | Nova linha
`\t` | Nova tab (indentação)
`variavel.Length` | Retorna o número de carateres (no caso da string)
`variavel.ToUpper()` | Transforma todas as letras presentes na string em letras maiúsculas
`variavel.ToLower()` | Transforma todas as letras presentes na string em letras minúsculas

```csharp
using System;

namespace Base {
  class MaisSobreAsStrings {
    public void Run() {
      string primeiroNome = "Nelson";
      string ultimoNome = "Silva";
      int idade = 25;

      Console.WriteLine($"Nome: {primeiroNome} {ultimoNome}\nIdade: {idade}");

      /*
        Nome: Nelson Silva
        Idade: 25
      */
    }
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/pKGz-CCpye8" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/pKGz-CCpye8){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/more-about-strings-in-csharp/){:target="\_blank"}.

### _Happy coding!_
