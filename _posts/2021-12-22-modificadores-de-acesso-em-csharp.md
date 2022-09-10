---
layout: post
excerpt: Blog
title: 'Modificadores de Acesso em C#'
description: 'Descobre como se trabalha com modificadores de acesso na linguagem de programação C#. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'c#, csharp, modificadores de acesso, modificadores, acesso, public, protected, internal, protected internal, private, publicação'
date: 2021-12-22
categories: [C#]
---

Nesta publicação aprende-se a trabalhar com modificadores de acesso para que se possa usar esses mesmos conhecimentos e assim evoluir.

- os modificadores de acesso são usados para especificar a acessibilidade declarada de uma variável (atributo), função (método), classee etc;
- existem cincos modificadores de acesso (níveis de acessibilidade): public, protected, internal, protected internal e private;
- o public faz com que o acesso não seja restrito em nenhuma parte do nosso código;
- o protected resume-se à possibilidade de acesso apenas dentro da própria classe ou dentro de uma classe derivada dessa mesma;
- o internal faz com só se seja possível ter acesso dentro do namespace atual;
- o protected internal significa que só se tem acesso no namespace atual e nas classes derivadas de um outro namespace;
- o private traduz-se no acesso apenas dentro da própria classe.

```csharp
using System;

namespace Base {
  class ModificadoresDeAcesso {
    // public, protected, internal, protected internal e private
    private void Run() {
      Console.WriteLine("Estamos a tentar aprender a trabalhar com os vários modificadores de acesso.");
    }
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/Uz-wyfqr9yU" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/Uz-wyfqr9yU){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/access-modifiers-in-csharp/){:target="\_blank"}.

### _Happy coding!_
