---
layout: post
excerpt: Blog
title: 'Operadores Aritméticos em Go'
description: 'Descobre como se trabalha com operadores aritméticos na linguagem de programação Go. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'go, golang, operadores aritméticos, operadores, aritméticos, publicação'
date: 2022-04-20
categories: [Go]
redirect_from:
  - /blog/20220420/operadores-aritmeticos-em-go/
---

Nesta publicação aprende-se a trabalhar com operadores aritméticos para que se possa usar esses mesmos conhecimentos e assim evoluir.

`+` | Adição
`-` | Subtração
`*` | Multiplicação
`/` | Divisão
`%` | Resto

```go
package main

import "fmt"

func main() {
	fmt.Println("Adição:", (10 + 10)) // Adição: 20
	fmt.Println("Subtração:", (10.5 - 5.5 - 4.5)) // Subtração: 0.5
	fmt.Println("Multiplicação:", (-10 * 2)) // Multiplicação: -20
	fmt.Println("Divisão:", (10 / 10)) // Divisão: 1.0
	fmt.Println("Resto:", (8 % 2)) // Resto: 0
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/PUpojD6_Swo" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/PUpojD6_Swo){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/arithmetic-operators-in-go/){:target="\_blank"}.

### _Happy coding!_
