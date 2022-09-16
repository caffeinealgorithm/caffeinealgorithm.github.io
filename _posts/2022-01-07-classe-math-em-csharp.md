---
layout: post
excerpt: Blog
title: 'Classe Math em C#'
description: 'Descobre como se trabalha com a classe Math na linguagem de programação C#. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'c#, csharp, classe math, classe, math, publicação'
date: 2022-01-07
categories: [C#]
redirect_from:
  - /blog/20220107/classe-math-em-csharp/
---

Nesta publicação aprende-se a trabalhar com a classe Math para que se possa usar esses mesmos conhecimentos e assim evoluir.

- esta classe tem como objetivo fornecer constantes e métodos estáticos para se trabalhar com funções trigonométricas, logarítmicas e outras funções matemáticas comuns.

`Sin(variavel)` | Calcula o seno
`Cos(variavel)` | Calcula o cosseno
`Tan(variavel)` | Calcula a tangente
`Floor(variavel)` | Remove o valor decimal do dado número
`Ceiling(variavel)` | Arredonda o dado número para o próximo
`Abs(variavel)` | Retorna o valor absoluto do dado número
`Sqrt(variavel)` | Retorna a raiz quadrada do dado número
`Pow(variavelA, variavelB)` | Multiplica o seu valor inicial múltiplas vezes (consoante o número de vezes)

```csharp
using System;

namespace Base {
  class ClasseMath {
    public void Run() {
      Console.WriteLine($"Resultado do método Sin(): {Math.Sin(10.5)}");
      Console.WriteLine($"Resultado do método Cos(): {Math.Cos(10.5)}");
      Console.WriteLine($"Resultado do método Tan(): {Math.Tan(10.5)}");
      Console.WriteLine($"Resultado do método Floor(): {Math.Floor(10.5)}");
      Console.WriteLine($"Resultado do método Ceiling(): {Math.Ceiling(10.5)}");
      Console.WriteLine($"Resultado do método Abs(): {Math.Abs(-10.5)}");
      Console.WriteLine($"Resultado do método Sqrt(): {Math.Sqrt(9)}");
      Console.WriteLine($"Resultado do método Pow(): {Math.Pow(2, 5)}");
    }
  }
}

/*
  Resultado do método Sin(): -0,87969575997167
  Resultado do método Cos(): -0,4755369279959925
  Resultado do método Tan(): 1,8498999934219273
  Resultado do método Floor(): 10
  Resultado do método Ceiling(): 11
  Resultado do método Abs(): 10,5
  Resultado do método Sqrt(): 3
  Resultado do método Pow(): 32
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/ZCr9-qfctoU" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/ZCr9-qfctoU){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/math-class-in-csharp/){:target="\_blank"}.

### _Happy coding!_
