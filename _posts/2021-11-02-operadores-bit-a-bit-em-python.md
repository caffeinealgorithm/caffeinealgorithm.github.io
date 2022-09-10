---
layout: post
excerpt: Blog
title: 'Operadores Bit a Bit em Python'
description: 'Descobre como se trabalha com operadores bit a bit na linguagem de programação Python. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'python, operadores bit a bit, operadores bit, operadores, bit, publicação'
date: 2021-11-02
categories: [Python]
---

Nesta publicação aprende-se a trabalhar com operadores bit a bit para que se possa usar esses mesmos conhecimentos e assim evoluir.

- os operadores bit a bit operam um bit de cada vez e é importante ter a noção relativamente ao que é o código bínario.

`1` | Verdadeiro
`0` | Falso
`&` | Apenas é verdadeiro quando ambos os números corresponderem a 1 e 1
`|` | Apenas é falso quando ambos os números corresponderem a 0 e 0
`<<` | Deslocam os bits de acordo com o número dado para a esquerda
`>>` | Deslocam os bits de acordo com o número dado para a direita

- depois temos também os operadores `^` e `~`;
- tais operadores são usados maioritariamente em diversas situações (criptografia, compressão de dados, produção de hash codes, comunicação com o hardware, jogos e etc).

```python
x = 60 # 00111100
y = 13 # 00001101

print('Resultado do operador &:', x & y) # Resultado do operador &: 12 (00001100)
print('Resultado do operador |:', x | y) # Resultado do operador |: 61 (00111101)
print('Resultado do operador <<:', x << 2) # Resultado do operador <<: 240 (11110000)
print('Resultado do operador >>:', x >> 2) # Resultado do operador >>: 15 (00001111)
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/gyBY7AcVPk4" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/gyBY7AcVPk4){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/bitwise-operators-in-python/){:target="\_blank"}.

### _Happy coding!_
