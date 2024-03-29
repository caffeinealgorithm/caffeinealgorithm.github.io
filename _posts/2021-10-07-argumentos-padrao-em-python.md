---
layout: post
excerpt: Blog
title: 'Argumentos Padrão em Python'
description: 'Descobre como se trabalha com argumentos padrão na linguagem de programação Python. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'python, argumentos padrão, argumentos, padrão, argumento, publicação'
date: 2021-10-07
categories: [Python]
redirect_from:
  - /blog/20211007/argumentos-padrao-em-python/
---

Nesta publicação aprende-se a trabalhar com argumentos padrão para que se possa usar esses mesmos conhecimentos e assim evoluir.

- os argumentos padrão têm como objetivo usar o seu valor padrão quando o utilizador não envia nenhum valor para esse mesmo argumento.

```python
def estadoDaPorta(estado = True):
  if estado:
    print('A porta está aberta.')
  else:
    print('A porta está fechada.')

estadoDaPorta(False) # A porta está fechada.
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/dWk0XVIto3w" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/dWk0XVIto3w){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/default-arguments-in-python/){:target="\_blank"}.

### _Happy coding!_
