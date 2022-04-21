---
layout: post
excerpt: Blog
title: 'Variáveis em Go'
description: 'Descobre como se trabalha com variáveis do tipo inteiro, decimal (float32 e float64), string e booleano na linguagem de programação Go. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'go, golang, variáveis, variável, inteiro, decimal, float, string, booleano, publicação'
date: 2022-04-21
categories: [Go]
---

Nesta publicação aprende-se a trabalhar com variáveis do tipo inteiro, decimal (float32 e float64), string e booleano para que se possa usar esses mesmos conhecimentos e assim evoluir.

- uma variável é um objeto (uma posição localizada na memória) que representa um valor ou uma expressão;
- em algumas das linguagens de programação existentes é necessário definir o tipo de variável e em outras não, no entanto, na linguagem de programação Go pode-se optar por fazer tal definição ou não (existe a possibilidade de o tipo de variável ser detetado automaticamente consoante o seu conteúdo);
- tipos de variáveis: inteiro, decimal (float32 e float64), string, booleano e mais alguns.

```go
package main

import "fmt"

func main() {
	var inteiro int = 10
	var _string string = "Eu sou uma string."
	var semTipo = "Eu continuo a ser uma string."

	decimal := 10.5
	booleano := true

	fmt.Println("inteiro:", inteiro) // inteiro: 10
	fmt.Println("string:", _string) // string: Eu sou uma string.
	fmt.Println("sem tipo:", semTipo) // sem tipo: Eu continuo a ser uma string.
	fmt.Println("decimal:", decimal) // decimal: 10.5
	fmt.Println("booleano:", booleano) // booleano: true
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/DrlftMQf8jw" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/DrlftMQf8jw){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/20220421/variables-in-go/){:target="\_blank"}.

### _Happy coding!_
