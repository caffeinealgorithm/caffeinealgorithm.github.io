---
layout: post
excerpt: Blog
title: 'Argumentos Chave em Python'
description: 'Descobre como se trabalha com argumentos chave na linguagem de programação Python. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'python, argumentos chave, argumentos, chave, argumento, publicação'
date: 2021-10-08
categories: [Python]
redirect_from:
  - /blog/20211008/argumentos-chave-em-python/
---

Nesta publicação aprende-se a trabalhar com argumentos chave para que se possa usar esses mesmos conhecimentos e assim evoluir.

- os argumentos chave têm como objetivo fazer com que não seja necessário chamar os argumentos da função ordenadamente.

```python
def imprimirABC(a, b, c):
  print('Valor de a:', a)
  print('Valor de b:', b)
  print('Valor de c:', c)

imprimirABC(c = 1, a = 2, b = 3)

'''
  Valor de a: 2
  Valor de b: 3
  Valor de c: 1
'''
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/Od8zRnsZIoE" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/Od8zRnsZIoE){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/key-arguments-in-python/){:target="\_blank"}.

### _Happy coding!_
