---
layout: post
excerpt: Blog
title: 'Operadores de Comparação em Go'
description: 'Descobre como se trabalha com operadores de comparação na linguagem de programação Go. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'go, golang, operadores de comparação, operadores, comparação, publicação'
date: 2022-05-03
categories: [Go]
---

Nesta publicação aprende-se a trabalhar com operadores de comparação para que se possa usar esses mesmos conhecimentos e assim evoluir.

`==` | Igual
`!=` | Diferente
`>` | Maior
`<` | Menor
`>=` | Maior e igual
`<=` | Menor e igual
`and` | E
`or` | Ou

```go
package main

import "fmt"

func main() {
	x := 10
	y := 20

	if (x <= y || x == y) {
		fmt.Println("Esta condição é verdadeira.")
	} else {
		fmt.Println("Esta condição é falsa.")
	}
}

// Esta condição é verdadeira.
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/dvCuGh0SGv8" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/dvCuGh0SGv8){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/comparison-operators-in-go/){:target="\_blank"}.

### _Happy coding!_
