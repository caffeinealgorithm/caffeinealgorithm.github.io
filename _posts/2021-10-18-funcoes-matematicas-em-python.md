---
layout: post
excerpt: Blog
title: 'Funções Matemáticas em Python'
description: 'Descobre como se trabalha com funções matemáticas na linguagem de programação Python. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'python, funções matemáticas, funções, matemáticas, função, publicação'
date: 2021-10-18
categories: [Python]
redirect_from:
  - /blog/20211018/funcoes-matematicas-em-python/
---

Nesta publicação aprende-se a trabalhar com funções matemáticas para que se possa usar esses mesmos conhecimentos e assim evoluir.

`sin(variavel)` | Calcula o seno
`cos(variavel)` | Calcula o cosseno
`tan(variavel)` | Calcula a tangente
`floor(variavel)` | Remove o valor decimal do dado número
`ceil(variavel)` | Arredonda o dado número para o próximo
`abs(variavel)` | Retorna o valor absoluto do dado número
`fsum(variavel)` | Faz a soma de todos os números dentro de uma lista (por exemplo)
`pow(variavelA, variavelB)` | Multiplica o seu valor inicial múltiplas vezes (consoante o número de vezes)

```python
from math import *

numeros = [10, 20, 30, 40, 50]

print('Resultado da função sin():', sin(10.5)) # Resultado da função sin(): -0.87969575997167
print('Resultado da função cos():', cos(10.5)) # Resultado da função cos(): -0.4755369279959925
print('Resultado da função tan():', tan(10.5)) # Resultado da função tan(): 1.8498999934219273
print('Resultado da função floor():', floor(10.5)) # Resultado da função floor(): 10
print('Resultado da função ceil():', ceil(10.5)) # Resultado da função ceil(): 11
print('Resultado da função abs():', abs(-10.5)) # Resultado da função abs(): 10.5
print('Resultado da função fsum():', fsum(numeros)) # Resultado da função fsum(): 150.0
print('Resultado da função pow():', pow(2, 5)) # Resultado da função pow(): 32.0
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/yA_QteaN0vs" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/yA_QteaN0vs){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/math-functions-in-python/){:target="\_blank"}.

### _Happy coding!_
