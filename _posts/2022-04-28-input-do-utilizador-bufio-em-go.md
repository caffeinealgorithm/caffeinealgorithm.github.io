---
layout: post
excerpt: Blog
title: 'Input do Utilizador (bufio) em Go'
description: 'Descobre como se trabalha com o input do utilizador (bufio) na linguagem de programação Go. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'go, golang, função input, função, input, publicação'
date: 2022-04-28
categories: [Go]
redirect_from:
  - /blog/20220428/input-do-utilizador-bufio-em-go/
---

Nesta publicação aprende-se a trabalhar com o input do utilizador (bufio) para que se possa usar esses mesmos conhecimentos e assim evoluir.

- a biblioteca bufio em junção com a função `NewReader()` e a função `ReadString()` têm como principal objetivo "extrair" informações dadas pelo utilizador;
- resumindo, esta mesma junção serve para aumentar a interação com o mesmo;

```go
package main

import (
	"fmt"
	"bufio"
	"os"
	"strings"
)

func main() {
	inputDoUtilizador := bufio.NewReader(os.Stdin)

	fmt.Print("Insere o teu primeiro nome: ")
	primeiroNome, _ := inputDoUtilizador.ReadString('\n')

	fmt.Print("Insere o teu último nome: ")
	ultimoNome, _ := inputDoUtilizador.ReadString('\n')

	fmt.Print("Insere a tua idade: ")
	idade, _ := inputDoUtilizador.ReadString('\n')

	/*
		CR+LF -> \r\n
		CR -> \r
		LF -> \n
	*/

	fmt.Printf("Nome: %s %s\nIdade: %s",
						 strings.ReplaceAll(primeiroNome, "\r\n", ""),
						 strings.ReplaceAll(ultimoNome, "\r\n", ""),
						 strings.ReplaceAll(idade, "\r\n", ""))
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/3HDVH40ZR2w" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/3HDVH40ZR2w){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/user-input-bufio-in-go/){:target="\_blank"}.

### _Happy coding!_
