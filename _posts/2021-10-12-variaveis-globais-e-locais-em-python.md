---
layout: post
excerpt: Blog
title: 'Variáveis Globais e Locais em Python'
description: 'Descobre como se trabalha com variáveis globais e locais na linguagem de programação Python. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'python, variáveis globais, variáveis locais, variáveis, globais, locais, variável, publicação'
date: 2021-10-12
categories: [Python]
---

Nesta publicação aprende-se a trabalhar com variáveis globais e locais para que se possa usar esses mesmos conhecimentos e assim evoluir.

- as variáveis globais são todas as que são definidas no exterior de uma função (na "raiz" do nosso código) e têm um alcance global;
- as variáveis locais são todas as que são definidas no interior de uma função;
- resumindo, nem todas as variáveis são acessíveis a partir de todos os locais do nosso código.

```python
acesso = 'Global'

def mudarAcesso():
  acesso = 'Local'
  print('Acesso no interior da função:', acesso)

mudarAcesso()
print('Acesso no exterior da função:', acesso)

'''
  Acesso no interior da função: Local
  Acesso no exterior da função: Global
'''
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/K6-_AwbMk34" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/K6-_AwbMk34){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/20211012/global-and-local-variables-in-python/){:target="\_blank"}.

### _Happy coding!_
