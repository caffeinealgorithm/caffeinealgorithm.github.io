---
layout: post
excerpt: Blog
title: 'Argumentos Flexíveis em Python'
description: 'Descobre como se trabalha com argumentos flexíveis na linguagem de programação Python. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'python, argumentos flexíveis, argumentos, flexíveis, argumento, publicação'
date: 2021-10-11
categories: [Python]
redirect_from:
  - /blog/20211011/argumentos-flexiveis-em-python/
---

Nesta publicação aprende-se a trabalhar com argumentos flexíveis para que se possa usar esses mesmos conhecimentos e assim evoluir.

- os argumentos flexíveis têm como objetivo fazer com que não seja necessário definir todos os argumentos de uma função quando forem indefinidos;
- resumindo, os argumentos flexíveis não têm um tamanho definido;
- é necessário colocar o símbolo `*` antes de um argumento flexível ser definido na função.

```python
def imprimirArgumentos(*argumentos):
  for argumento in argumentos:
    print('Argumento:', argumento)

imprimirArgumentos('Eu sou uma string.', 1, 1.5, True, ['ABC', 'DEF', 'GHI'])

'''
  Argumento: Eu sou uma string.
  Argumento: 1
  Argumento: 1.5
  Argumento: True
  Argumento: ['ABC', 'DEF', 'GHI']
'''
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/LhcLdqNjvpc" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/LhcLdqNjvpc){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/flexible-arguments-in-python/){:target="\_blank"}.

### _Happy coding!_
