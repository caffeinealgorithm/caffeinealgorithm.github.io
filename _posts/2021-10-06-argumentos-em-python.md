---
layout: post
excerpt: Blog
title: 'Argumentos em Python'
description: 'Descobre como se trabalha com argumentos na linguagem de programação Python. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'python, argumentos, argumento, publicação'
date: 2021-10-06
categories: [Python]
---

Nesta publicação aprende-se a trabalhar com argumentos para que se possa usar esses mesmos conhecimentos e assim evoluir.

- os argumentos são como se fossem variáveis que recebem os seus valores (o seu conteúdo) quando a função é chamada;
- esses mesmos argumentos são considerados de variáveis locais porque só existem dentro da função;
- as variáveis locais são descartadas quando se retorna ao ponto de chamada.

```python
def dadosPessoais(nome, idade, nacionalidade):
  print('Nome:', nome)
  print('Idade:', idade)
  print('Nacionalidade:', nacionalidade)

dadosPessoais('Nelson Silva', 25, 'Portuguesa')
dadosPessoais('Larissa Fernandes', 37, 'Brasileira')

'''
  Nome: Nelson Silva
  Idade: 25
  Nacionalidade: Portuguesa
  Nome: Larissa Fernandes
  Idade: 37
  Nacionalidade: Brasileira
'''
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/rYJermgsgKk" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/rYJermgsgKk){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/20211006/arguments-in-python/){:target="\_blank"}.

### _Happy coding!_
