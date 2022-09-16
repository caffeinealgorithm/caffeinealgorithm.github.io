---
layout: post
excerpt: Blog
title: 'init em Python'
description: 'Descobre como se trabalha com o init na linguagem de programação Python. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'python, init, construtores, construtor, publicação'
date: 2021-10-25
categories: [Python]
redirect_from:
  - /blog/20211025/init-em-python/
---

Nesta publicação aprende-se a trabalhar com o init para que se possa usar esses mesmos conhecimentos e assim evoluir.

- o init basicamente é um construtor e tem como função inicializar tudo o que seja necessário ao se criar um determinado objeto.

```python
class Pessoa:
  def __init__(self, primeiroNome, ultimoNome, idade):
    self.primeiroNome = primeiroNome
    self.ultimoNome = ultimoNome
    self.idade = idade

  def informacao(self):
    print('Nome:', self.primeiroNome, self.ultimoNome)
    print('Idade:', self.idade)

  def verificarEntrada(self):
    if self.idade >= 18:
      print('Esta pessoa pode entrar no local porque é maior de idade.')
    else:
      print('Esta pessoa não pode entrar no local porque é menor de idade.')

pessoa1 = Pessoa('Nelson', 'Silva', 25)
pessoa2 = Pessoa('Larissa', 'Fernandes', 17)

pessoa1.informacao()
pessoa1.verificarEntrada()

'''
  Nome: Nelson Silva
  Idade: 25
  Esta pessoa pode entrar no local porque é maior de idade.
'''

pessoa2.informacao()
pessoa2.verificarEntrada()

'''
  Nome: Larissa Fernandes
  Idade: 17
  Esta pessoa não pode entrar no local porque é menor de idade.
'''
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/6a0ZhURjP6s" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/6a0ZhURjP6s){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/init-in-python/){:target="\_blank"}.

### _Happy coding!_
