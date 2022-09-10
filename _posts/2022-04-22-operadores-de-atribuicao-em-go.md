---
layout: post
excerpt: Blog
title: 'Operadores de Atribuição em Go'
description: 'Descobre como se trabalha com operadores de atribuição na linguagem de programação Go. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'go, golang, operadores de atribuição, operadores, atribuição, publicação'
date: 2022-04-22
categories: [Go]
---

Nesta publicação aprende-se a trabalhar com operadores de atribuição para que se possa usar esses mesmos conhecimentos e assim evoluir.

`a += 2` | `a = a + 2`
`b -= 2` | `b = b - 2`
`c *= 2` | `c = c * 2`
`d /= 2` | `d = d / 2`
`e %= 2` | `e = e % 2`

```go
package main

import "fmt"

func main() {
	x := 2

	x += 3
	fmt.Println("x = x + 3:", x) // x = x + 3: 5

	x -= 2
	fmt.Println("x = x - 2:", x) // x = x - 2: 3

	x *= 2
	fmt.Println("x = x * 2:", x) // x = x * 2: 6

	x /= 2
	fmt.Println("x = x / 2:", x) // x = x / 2: 3

	x %= 3
	fmt.Println("x = x % 3:", x) // x = x % 3: 0
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/UisnZCGsAKE" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/UisnZCGsAKE){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/assignment-operators-in-go/){:target="\_blank"}.

### _Happy coding!_
