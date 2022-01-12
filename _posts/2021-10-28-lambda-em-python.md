---
layout: post
excerpt: Blog
title: 'Lambda em Python'
description: 'Descobre como se trabalha com o lambda na linguagem de programação Python. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'python, lambda, publicação'
date: 2021-10-28
categories: [Python]
---

Nesta publicação aprende-se a trabalhar com o lambda para que se possa usar esses mesmos conhecimentos e assim evoluir.

- o lambda é usado na criação de funções anónimas e estas são assim chamadas porque não são declaradas com o termo "def";
- resumindo, o lambda tem como principal objetivo simplificar certas e determinadas funções, sendo que estas, não utilizam o termo "return" e sim uma expressão.

```python
'''
  def adicao(a, b, c):
    return a + b + c
'''

adicao = (lambda a, b, c : a + b + c)

print('Resultado da adição:', adicao(25, 30, 45)) # Resultado da adição: 100
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/0bSYL5vnh6k" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/0bSYL5vnh6k){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/20211028/lambda-in-python/){:target="\_blank"}.

### _Happy coding!_
