---
layout: post
excerpt: Blog
title: 'Arrays em Go'
description: 'Descobre como se trabalha com arrays na linguagem de programação Go. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'go, golang, arrays, array, publicação'
date: 2022-04-29
categories: [Go]
---

Nesta publicação aprende-se a trabalhar com arrays para que se possa usar esses mesmos conhecimentos e assim evoluir.

- um array (vetor) tem um tamanho fixo e é utilizado para armazenar um conjunto de dados de uma forma sequencial;
- é mais útil pensar em um array como um conjunto de variáveis do mesmo tipo em que essas mesmas estão posicionadas na memória de forma adjacente;
- essas variáveis são chamadas de elementos e cada um desses é identificado por um índice.

```go
package main

import "fmt"

func main() {
	var cores [5]string

	cores[0] = "Azul"
	cores[1] = "Verde"
	cores[2] = "Amarelo"
	cores[3] = "Vermelho"
	cores[4] = "Laranja"

	cores = [...]string { "Branco", "Verde", "Amarelo", "Vermelho", "Laranja" }

	fmt.Printf("Número de cores: %d\n", len(cores)) // Número de cores: 5
	fmt.Printf("Primeira cor: %s\n", cores[0]) // Primeira cor: Azul
	fmt.Printf("Última cor: %s", cores[len(cores) - 1]) // Última cor: Laranja
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/PrK3pN6geso" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/PrK3pN6geso){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/20220429/arrays-in-go/){:target="\_blank"}.

### _Happy coding!_
