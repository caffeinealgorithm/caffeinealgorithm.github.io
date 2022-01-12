---
layout: post
excerpt: Blog
title: 'Erros Comuns em Python'
description: 'Descobre como se trabalha com erros comuns na linguagem de programação Python. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'python, erros communs, erros, erro, publicação'
date: 2021-10-13
categories: [Python]
---

Nesta publicação aprende-se a trabalhar com erros comuns para que se possa usar esses mesmos conhecimentos e assim evoluir.

`NameError: name 'variavel' is not defined` | Quando a variável apresentada não estiver definida
`IndentationError: expected an indented block` | Quando a indentação não for feita corretamente
`SyntaxError: EOL while scanning string literal` | Quando uma string não for finalizada (fechada)
`SyntaxError: invalid syntax` | Quando uma função não for fechada corretamente e não só

```python
variavel = 'Eu sou uma string.'
print(variavell) # NameError: name 'variavell' is not defined

def funcao():
print('Eu faço parte desta função.') # IndentationError: expected an indented block

print('Eu também sou uma string.)' # SyntaxError: EOL while scanning string literal

print('Somos todos uma string.' # SyntaxError: invalid syntax
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/k9s22aFgo9s" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/k9s22aFgo9s){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/20211013/common-mistakes-in-python/){:target="\_blank"}.

### _Happy coding!_
