---
layout: post
excerpt: Blog
title: 'Switch em Go'
description: 'Descobre como se trabalha com o switch na linguagem de programação Go. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'go, golang, switch, condições, condição, publicação'
date: 2020-05-04
categories: [Go]
---

Nesta publicação aprende-se a trabalhar com o switch para que se possa usar esses mesmos conhecimentos e assim evoluir.

- o switch é uma outra forma de se trabalhar com decisões e pode somente verificar uma relação de igualdade, ou seja, não pode usar operadores de comparação (e claro, atenção que existem dois tipos de switch (por expressão e/ou por tipo));
- o case compara o que fora definido em si próprio com o conteúdo do argumento que fora definido no switch;
- o default é executado quando o conteúdo do argumento que fora definido no switch não for encontrado em nenhum case.

```go
package main

import "fmt"

func main() {
	caso := "D"

	switch (caso) {
		case "A":
			fmt.Println("O caso A existe.")
		case "B":
			fmt.Println("O caso B existe.")
		case "C":
			fmt.Println("O caso C existe.")
		default:
			fmt.Printf("O caso %s não existe.", caso)
	}
}

// O caso D não existe.
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/-MckZGlZX1A" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/-MckZGlZX1A){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/20220504/switch-in-go/){:target="\_blank"}.

### _Happy coding!_
