---
layout: post
excerpt: Blog
title: 'Comentários em Go'
description: 'Descobre como se trabalha com comentários na linguagem de programação Go. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'go, golang, comentários, comentário, publicação'
date: 2022-04-27
categories: [Go]
---

Nesta publicação aprende-se a trabalhar com comentários para que se possa usar esses mesmos conhecimentos e assim evoluir.

Os comentários (de uma ou de várias linhas) servem para comentar tudo o que seja necessário para que uma outra pessoa compreenda o nosso código.

```go
package main

import "fmt"

func main() {
	// Eu sou um comentário.

	fmt.Println("Eu sou uma string.")

	/*
		Eu também sou um comentário.
		Eu faço parte deste mesmo comentário.
		Continuo a fazer parte dele.
	*/

	fmt.Println("Eu continuo a ser uma string.")
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/LUq1G_MLY84" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/LUq1G_MLY84){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/20220427/comments-in-go/){:target="\_blank"}.

### _Happy coding!_
