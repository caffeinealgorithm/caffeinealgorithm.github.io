---
layout: post
excerpt: Blog
title: 'break e continue em Python'
description: 'Descobre como se trabalha com o break e o continue na linguagem de programação Python. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'python, break e continue, break, continue, publicação'
date: 2021-09-30
categories: [Python]
redirect_from:
  - /blog/20210930/break-e-continue-em-python/
---

Nesta publicação aprende-se a trabalhar com o break e o continue para que se possa usar esses mesmos conhecimentos e assim evoluir.

- o break faz com que a vida do ciclo termine, ou seja, faz com que não se itere por mais nada;
- o continue ignora todo o conteúdo da volta que está a seguir dele mesmo e passa automaticamente para a próxima iteração.

```python
animais = ['Cão', 'Gato', 'Galinha', 'Coelho', 'Leão']
contador = 0

for animal in animais:
  print('Animal:', animal)

  if animal == 'Coelho':
    break

'''
  Animal: Cão
  Animal: Gato
  Animal: Galinha
  Animal: Coelho
'''

while contador < 10:
  contador += 1

  if contador == 5:
    continue

  print('Número da volta:', contador)

'''
  Número da volta: 1
  Número da volta: 2
  Número da volta: 3
  Número da volta: 4
  Número da volta: 6
  Número da volta: 7
  Número da volta: 8
  Número da volta: 9
  Número da volta: 10
'''
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/bh0yUxxWBZE" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/bh0yUxxWBZE){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/break-and-continue-in-python/){:target="\_blank"}.

### _Happy coding!_
