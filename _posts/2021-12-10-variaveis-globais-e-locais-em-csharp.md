---
layout: post
excerpt: Blog
title: 'Variáveis Globais e Locais em C#'
description: 'Descobre como se trabalha com variáveis globais e locais na linguagem de programação C#. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'c#, csharp, variáveis globais, variáveis locais, variáveis, globais, locais, variável, publicação'
date: 2021-12-10
categories: [C#]
redirect_from:
  - /blog/20211210/variaveis-globais-e-locais-em-csharp/
---

Nesta publicação aprende-se a trabalhar com variáveis globais e locais para que se possa usar esses mesmos conhecimentos e assim evoluir.

- as variáveis globais são todas as que são definidas no exterior de uma função (na "raiz" do nosso código) e têm um alcance global;
- as variáveis locais são todas as que são definidas no interior de uma função;
- resumindo, nem todas as variáveis são acessíveis a partir de todos os locais do nosso código.

```csharp
using System;

namespace Base {
  class VariaveisGlobaisELocais {
    string acesso = "Global";

    public void Run() {
      MudarAcesso();
      Console.WriteLine($"Acesso no exterior da função: {acesso}");
    }

    public void MudarAcesso() {
      string acesso = "Local";
      Console.WriteLine($"Acesso no interior da função: {acesso}");
    }
  }
}

/*
  Acesso no interior da função: Local
  Acesso no exterior da função: Global
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/nRnTx4JWWm4" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/nRnTx4JWWm4){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/global-and-local-variables-in-csharp/){:target="\_blank"}.

### _Happy coding!_
