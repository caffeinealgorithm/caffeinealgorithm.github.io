---
layout: post
excerpt: Blog
title: 'Função Println() e Strings em Go'
description: 'Descobre como se trabalha com a função Println() e com as strings na linguagem de programação Go. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'go, golang, função println, função, println, strings, string, publicação'
date: 2022-04-19
categories: [Go]
---

Nesta publicação aprende-se a trabalhar com a função `Println()` e com as strings para que se possa usar esses mesmos conhecimentos e assim evoluir.

- a função `Println()` imprime todo o seu conteúdo na linha de comandos e muda de linha (depois temos a função `Print()` que não muda de linha e a função `Printf()` que coloca valores em determinados locais - certamente que iremos usar este último método durante a série e nesse momento eu explico melhor o funcionamento dessa mesma função - `Printf()`);
- uma string é um conjunto de carateres (letras, números e/ou símbolos);
- todas as strings são inicializadas e finalizadas com aspas ("string");
- o carater de escape é o `\` e tem como objetivo fazer com que o carater que esteja a seguir faça parte da string;
- pode-se incrementar (juntar o conteúdo das várias strings) com um vírgula.

```go
package main

import "fmt"

func main() {
	fmt.Println("Estamos a usar a função Println() e eu sou uma string.")
	fmt.Println("A Maria disse que o Miguel estava \"doente\".") // A Maria disse que o Miguel estava "doente".
	fmt.Println("Caffeine", "Algorithm") // Caffeine Algorithm
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/cCq9DRRNX5A" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/cCq9DRRNX5A){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/20220419/print-function-and-strings-in-go/){:target="\_blank"}.

### _Happy coding!_
