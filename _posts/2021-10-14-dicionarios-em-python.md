---
layout: post
excerpt: Blog
title: 'Dicionários em Python'
description: 'Descobre como se trabalha com dicionários na linguagem de programação Python. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'python, dicionários, dicionário, publicação'
date: 2021-10-14
categories: [Python]
---

Nesta publicação aprende-se a trabalhar com dicionários para que se possa usar esses mesmos conhecimentos e assim evoluir.

- os dicionários são estruturas de dados que implementam mapeamentos (coleção de associações entre pares de valores);
- o primeiro elemento do par é chamado de chave (identificador) e o outro é chamado de conteúdo.

```python
idades = {'Nelson Silva': 25, 'Larissa Fernandes': 37, 'Pedro Henrique': 52, 'Raquel Soares': 68}

idades['Pedro Henrique'] = 100
del idades['Larissa Fernandes']
# idades.clear()

print(idades) # {'Nelson Silva': 25, 'Pedro Henrique': 100, 'Raquel Soares': 68}
print(idades.items()) # dict_items([('Nelson Silva', 25), ('Pedro Henrique', 100), ('Raquel Soares', 68)])
print(idades.keys()) # dict_keys(['Nelson Silva', 'Pedro Henrique', 'Raquel Soares'])
print(idades.values()) # dict_values([25, 100, 68])
```

Não te esqueças de [assistir ao vídeo](https://youtu.be/Ux328aoXQYM){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/20211014/dictionaries-in-python/){:target="\_blank"}.

### _Happy coding!_
