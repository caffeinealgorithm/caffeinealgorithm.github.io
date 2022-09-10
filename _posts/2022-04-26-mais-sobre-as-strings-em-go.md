---
layout: post
excerpt: Blog
title: 'Mais sobre as Strings em Go'
description: 'Descobre como se trabalha com algo mais sobre as strings na linguagem de programação Go. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'go, golang, strings, string, publicação'
date: 2022-04-26
categories: [Go]
---

Nesta publicação aprende-se a trabalhar com algo mais sobre as strings para que se possa usar esses mesmos conhecimentos e assim evoluir.

`\n` | Nova linha
`\t` | Nova tab (indentação)
`len(variavel)` | Retorna o número de carateres (no caso da string)
`strings.ToUpper()` | Transforma todas as letras presentes na string em letras maiúsculas
`strings.ToLower()` | Transforma todas as letras presentes na string em letras minúsculas
`Printf()` | Coloca valores em determinados locais

```go
package main

import (
	"fmt"
	"strings"
)

func main() {
	primeiroNome, ultimoNome := "Nelson", "Silva"
	idade := 25

	fmt.Println("Nome:", strings.ToUpper(primeiroNome), strings.ToLower(ultimoNome), "\nIdade:", idade)

	fmt.Printf("Nome: %s %s\nIdade: %d", primeiroNome, ultimoNome, idade)

  /*
    Nome: NELSON silva
    Idade: 25
    Nome: Nelson Silva
    Idade: 25
  */
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/4xldTbYwVcM" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/4xldTbYwVcM){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/more-about-strings-in-go/){:target="\_blank"}.

### _Happy coding!_
