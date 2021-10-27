---
layout: post
excerpt: Blog
title: 'Múltipla Herança em Python'
description: 'Descobre como se trabalha com a múltipla herança na linguagem de programação Python. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'python, múltipla herança, herança, publicação'
date: 2021-10-27
categories: [Python]
---

Nesta publicação aprende-se a trabalhar com a múltipla herança para que se possa usar esses mesmos conhecimentos e assim evoluir.

- a herança é um mecanismo pelo qual uma classe (subclasse) pode estender outra classe (superclasse) para tirar proveito das suas possíveis variáveis (atributos) e do seu comportamento (métodos);
- a múltipla herança faz com que seja possível herdar de várias classes.

```python
class Pai:
  altura = 'Entre 180 e 190 centímetros'
  corDosOlhos = 'Castanhos'

class Mae:
  def corPreferida(self):
    print('A minha cor preferida é o branco.')

class Filho(Pai, Mae):
  def informacao(self):
    print('Nome: Nelson Silva')
    print('Idade: 25')
    print('Altura:', self.altura)
    print('Cor dos olhos:', self.corDosOlhos)

pessoa = Filho()
pessoa.informacao()
pessoa.corPreferida()

'''
  Nome: Nelson Silva
  Idade: 25
  Altura: Entre 180 e 190 centímetros
  Cor dos olhos: Castanhos
  A minha cor preferida é o branco.
'''
```

Não te esqueças de [assistir ao vídeo](https://youtu.be/e4N5AHTSKG0){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/20211027/multiple-inheritance-in-python/){:target="\_blank"}.

### _Happy coding!_
