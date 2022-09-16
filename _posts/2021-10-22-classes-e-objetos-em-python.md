---
layout: post
excerpt: Blog
title: 'Classes e Objetos em Python'
description: 'Descobre como se trabalha com classes e objetos na linguagem de programação Python. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'python, classes e objetos, classes, objetos, classe, objeto, publicação'
date: 2021-10-22
categories: [Python]
redirect_from:
  - /blog/20211022/classes-e-objetos-em-python/
---

Nesta publicação aprende-se a trabalhar com classes e objetos para que se possa usar esses mesmos conhecimentos e assim evoluir.

- uma classe representa um conjunto de objetos, sendo que, define o comportamento desses mesmos através de métodos e quais estados ele é capaz de manter através dos seus atributos;
- um objeto é uma instância de uma classe e é capaz de armazenar estados através dos seus atributos e de reagir a mensagens enviadas para ele.

```python
class Inimigo:
  vidas = 5

  def ataque(self):
    print('Eu fui atacado e perdi uma vida.')
    self.vidas -= 1

  def verificarVida(self):
    if self.vidas <= 0:
      print('Eu estou morto porque não tenho mais vidas.')
    else:
      print('Eu ainda estou em combate e tenho', self.vidas, 'vidas.')

inimigo1 = Inimigo()
inimigo2 = Inimigo()

inimigo1.ataque() # Eu fui atacado e perdi uma vida.
inimigo1.ataque() # Eu fui atacado e perdi uma vida.
inimigo1.ataque() # Eu fui atacado e perdi uma vida.
inimigo1.verificarVida() # Eu ainda estou em combate e tenho 2 vidas.
inimigo2.verificarVida() # Eu ainda estou em combate e tenho 5 vidas.
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/JzHlMtlohNE" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/JzHlMtlohNE){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/classes-and-objects-in-python/){:target="\_blank"}.

### _Happy coding!_
