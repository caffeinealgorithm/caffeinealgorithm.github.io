---
layout: post
excerpt: Blog
title: 'if, else if e else em Go'
description: 'Descobre como se trabalha com decisões (if, else if e else) na linguagem de programação Go. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'go, golang, if, else if, else, condições, condição, publicação'
date: 2022-05-02
categories: [Go]
redirect_from:
  - /blog/20220502/if-else-if-e-else-em-go/
---

Nesta publicação aprende-se a trabalhar com decisões (if, else if e else) para que se possa usar esses mesmos conhecimentos e assim evoluir.

```go
package main

import "fmt"

/*
  (if - se) condição for verdadeira {
    o código dentro do if é executado
  }
  (else if - senão se) condição for verdadeira (só ocorre o else if caso a condição de if seja falsa) {
    o código dentro do else if é executado
  }
  (else - senão) sem condição (só ocorre caso a condição de if e de else if sejam falsas) {
    o código dentro do else é executado
  }
*/

func main() {
	x := 30

	if x == 10 {
		fmt.Println("O valor de x é igual a 10.")
	} else if x == 20 {
		fmt.Println("O valor de x é igual a 20.")
	} else {
		fmt.Println("O valor de x é diferente de 10 e de 20.")
	}
}

// O valor de x é diferente de 10 e de 20.
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/B8Lg8TbighI" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/B8Lg8TbighI){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/if-else-if-and-else-in-go/){:target="\_blank"}.

### _Happy coding!_
