---
layout: post
excerpt: Blog
title: 'Herança em Python'
description: 'Descobre como se trabalha com a herança na linguagem de programação Python. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'python, herança, publicação'
date: 2021-10-26
categories: [Python]
---

Nesta publicação aprende-se a trabalhar com a herança para que se possa usar esses mesmos conhecimentos e assim evoluir.

- a herança é um mecanismo pelo qual uma classe (subclasse) pode estender outra classe (superclasse) para tirar proveito das suas possíveis variáveis (atributos) e do seu comportamento (métodos).

```python
class Pai:
  ultimoNome = 'Silva'

  def comidaPreferida(self):
    print('A minha comida preferida é arroz de marisco.')

class Filho(Pai):
  primeiroNome = 'Nelson'
  idade = 25

  def informacao(self):
    print('Nome:', self.primeiroNome, self.ultimoNome)
    print('Idade:', self.idade)

pessoa = Filho()
pessoa.informacao()
pessoa.comidaPreferida()

'''
  Nome: Nelson Silva
  Idade: 25
  A minha comida preferida é arroz de marisco.
'''
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/7cVfMDDAk64" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/7cVfMDDAk64){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/20211026/inheritance-in-python/){:target="\_blank"}.

### _Happy coding!_
