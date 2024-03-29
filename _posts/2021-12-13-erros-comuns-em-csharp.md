---
layout: post
excerpt: Blog
title: 'Erros Comuns em C#'
description: 'Descobre como se trabalha com erros comuns na linguagem de programação C#. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'c#, csharp, erros communs, erros, erro, publicação'
date: 2021-12-13
categories: [C#]
redirect_from:
  - /blog/20211213/erros-comuns-em-csharp/
---

Nesta publicação aprende-se a trabalhar com erros comuns para que se possa usar esses mesmos conhecimentos e assim evoluir.

- existem três tipos erros: erros de compilação, erros de tempo de execução e erros de lógica;
- os erros de compilação são erros que impedem a execução da nossa aplicação e são maioritariamente causados pelo mau digitar do nosso código (por exemplo a não inserção do ';' para finalizar uma determinada linha de código);
- os erros de tempo de execução são erros que ocorrem enquanto a nossa aplicação é executada e normalmente damos conta desses mesmos quando a aplicação tenta uma operação que é impossível executar (por exemplo a divisão por zero);
- os erros de lógica são erros que impedem que a nossa aplicação faça o que é pretendido fazer, ou seja, o nosso código é complicado e executado sem erros, mas o resultado de uma operação por acabar por não ser o esperado (por exemplo não complementar uma dada variável do tipo string);
- destes três tipos de erros, os erros lógicos são os mais difíceis de localizar e corrigir.

```csharp
using System;

namespace Base {
  class ErrosComuns {
    public void Run() {
      // Erro de compilação
      Console.WriteLine("Eu sou uma string.");

      // Erro de tempo de execução
      int x = 10, y = 0;
      // Console.WriteLine($"Resultado da divisão: {x / y}");

      // Erro de lógica
      string primeiroNome = string.Empty, ultimoNome = string.Empty;

      Console.Write("Insere o teu último nome: ");
      ultimoNome = Console.ReadLine();

      Console.WriteLine($"Nome: {primeiroNome} {ultimoNome}");
    }
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/zTZxnegO2Ro" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/zTZxnegO2Ro){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/common-mistakes-in-csharp/){:target="\_blank"}.

### _Happy coding!_
