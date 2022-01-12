---
layout: post
excerpt: Blog
title: 'Exceções em Python'
description: 'Descobre como se trabalha com exceções na linguagem de programação Python. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'python, exceções, exceção, publicação'
date: 2021-10-21
categories: [Python]
---

Nesta publicação aprende-se a trabalhar com exceções para que se possa usar esses mesmos conhecimentos e assim evoluir.

- uma exceção é um evento que ocorre durante a execução de um pedaço de código que interrompe o seu fluxo normal de instruções;
- resumindo, uma exceção representa um erro.

`IOError` | Quando um erro ocorre relacionado com o tratamento de ficheiros

```python
try:
  lerFicheiro = open('Ficheiros-Escrever-e-Ler.txt', 'r')
  print(lerFicheiro.read())
except IOError:
  print('O ficheiro não existe e/ou não é possível ler o seu conteúdo.')
else:
  print('O ficheiro foi lido com sucesso.')
  lerFicheiro.close()

print('Eu sei que ocorreu um erro, no entanto, o meu conteúdo ainda é apresentado na linha de comandos.')
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/4ULTUP1RWSM" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/4ULTUP1RWSM){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/20211021/exceptions-in-python/){:target="\_blank"}.

### _Happy coding!_
