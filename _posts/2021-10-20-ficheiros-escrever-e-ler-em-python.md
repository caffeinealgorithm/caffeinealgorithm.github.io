---
layout: post
excerpt: Blog
title: 'Ficheiros (Escrever e Ler) em Python'
description: 'Descobre como se trabalha com ficheiros (escrever e ler) na linguagem de programação Python. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'python, ficheiros, ficheiros escrever, ficheiros ler, escrever e ler, escrever, ler, publicação'
date: 2021-10-20
categories: [Python]
---

Nesta publicação aprende-se a trabalhar com ficheiros (escrever e ler) para que se possa usar esses mesmos conhecimentos e assim evoluir.

`open(ficheiro, modo)` | Abre o ficheiro
`write(texto)` | Escreve no ficheiro
`read()` | Lê o conteúdo do ficheiro
`close(ficheiro)` | Fecha o ficheiro
`'w'` | Modo de escrita (write)
`'r'` | Modo de leitura (read)

- é necessário fechar sempre o ficheiro.

```python
escreverFicheiro = open('Ficheiros-Escrever-e-Ler.txt', 'w')
escreverFicheiro.write('Eu estou a escrever na primeira linha deste ficheiro.\n')
escreverFicheiro.write('Agora estou a escrever na segunda linha.')
escreverFicheiro.close()

lerFicheiro = open('Ficheiros-Escrever-e-Ler.txt', 'r')
print(lerFicheiro.read())

'''
  Eu estou a escrever na primeira linha deste ficheiro.
  Agora estou a escrever na segunda linha.
'''

lerFicheiro.close()
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/Hh8eV7n5ieg" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/Hh8eV7n5ieg){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/files-write-and-read-in-python/){:target="\_blank"}.

### _Happy coding!_
