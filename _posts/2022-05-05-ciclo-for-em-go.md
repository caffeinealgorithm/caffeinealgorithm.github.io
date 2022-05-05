---
layout: post
excerpt: Blog
title: 'Ciclo for em Go'
description: 'Descobre como se trabalha com o ciclo for na linguagem de programação Go. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'go, golang, ciclo for, ciclo, for, ciclos, publicação'
date: 2022-05-05
categories: [Go]
---

Nesta publicação aprende-se a trabalhar com o ciclo for para que se possa usar esses mesmos conhecimentos e assim evoluir.

- um ciclo permite executar uma instrução ou um conjunto de instruções várias vezes;
- existem três tipos de um ciclo for e esse mesmo dá voltas (itera) consoante um determinado range e/ou uma determinada condição (tendo ela que ser verdadeira);
- é importante saber um ciclo infinito acontece sempre que uma determinada condição não deixa de ser verdadeira e tal resume-se a um ciclo que não pára de iterar.

```go
package main

import "fmt"

func main() {
	// materialEscolar := [...]string { "Mochila", "Estojo", "Lápis", "Borracha", "Afia", "Tesoura" }

	/*
    fmt.Println(materialEscolar[0]);
	  fmt.Println(materialEscolar[1]);

    for indice := 0; indice < len(materialEscolar); indice++ {
		  fmt.Printf("materialEscolar[%d]: %s\n", indice, materialEscolar[indice])

	  for indice, material := range materialEscolar {
		  fmt.Printf("materialEscolar[%d]: %s\n", indice, material)
	  }
  */

	numero := 1

	for (numero <= 10) {
		fmt.Printf("Número: %d\n", numero)
		numero++
	}
}

/*
  Número: 1
  Número: 2
  Número: 3
  Número: 4
  Número: 5
  Número: 6
  Número: 7
  Número: 8
  Número: 9
  Número: 10
/*
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/w7hXnuh5G2E" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/w7hXnuh5G2E){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/20220505/for-loop-in-go/){:target="\_blank"}.

### _Happy coding!_
