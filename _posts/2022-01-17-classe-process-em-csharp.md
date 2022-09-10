---
layout: post
excerpt: Blog
title: 'Classe Process em C#'
description: 'Descobre como se trabalha com a classe Process na linguagem de programação C#. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'c#, csharp, classe process, classe, process, publicação'
date: 2022-01-17
categories: [C#]
---

Nesta publicação aprende-se a trabalhar com a classe Process para que se possa usar esses mesmos conhecimentos e assim evoluir.

- esta classe (pertencente à biblioteca System.Diagnostics) fornece acesso a processos locais/remotos e permite iniciar/parar os processos do sistema.

`Start()` | É iniciado um determinado processo
`Kill()` | Interrompe imediatamente o processo associado
`Close()` | Liberta todos os recursos que estão associados a um determinado processo
`GetProcesses()` | Retorna todos os processos que estejam a correr naquele exato momento
`GetProcessesByName()` | Retorna todos os processos com o tal nome que estejam a correr naquele exato momento

```csharp
using System;
using System.Diagnostics;
using System.Linq;

namespace Base {
  class ClasseProcess {
    // private Process processo;
    private Process[] processos;

    public void Run() {
      /*
        processo = Process.Start("notepad.exe");
        processo.Kill();

        Console.Write("Pesquisar por: ");
        var pesquisa = Console.ReadLine();
        PesquisarNoGoogle(pesquisa);
      */

      processos = Process.GetProcessesByName("chrome");
      Console.WriteLine($"Número de processos: {processos.Count()}");

      foreach (var processo in processos)
        Console.WriteLine($"Nome do processo: {processo.ProcessName}");
    }

    private void PesquisarNoGoogle(string pesquisa) {
      var aplicacao = @"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe";
      Process.Start(aplicacao, $"https://www.google.com/search?q={pesquisa}".Replace(' ', '+'));
    }
  }
}

/*
  Número de processos: 28
  Nome do processo: chrome
  Nome do processo: chrome
  Nome do processo: chrome
  ...
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/yXHX-nA4Gsk" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/yXHX-nA4Gsk){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/process-class-in-csharp/){:target="\_blank"}.

### _Happy coding!_
