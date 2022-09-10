---
layout: post
excerpt: Blog
title: 'Data e Hora em Python'
description: 'Descobre como se trabalha com a data e a hora na linguagem de programação Python. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'python, data e hora, data, hora, publicação'
date: 2021-10-19
categories: [Python]
---

Nesta publicação aprende-se a trabalhar com a data e a hora para que se possa usar esses mesmos conhecimentos e assim evoluir.

`calendar(ano)` | Retorna um calendário de um certo ano em formato de leitura
`month(ano, mes)` | Retorna o mês escolhido de um certo ano em formato de leitura
`time()` | Retorna a hora do sistema atual em ticks desde a meia-noite do dia 1 de Janeiro de 1970
`localtime(time())` | Retorna a data e a hora atual em formato estruturado
`asctime(localtime(time()))` | Retorna a data e a hora atual em formato de leitura

```python
# from calendar import *
from time import *

# print(calendar(2021))
# print(month(2021, 8))
print(time()) # 1628197388.7380881
print(localtime(time())) # time.struct_time(tm_year=2021, tm_mon=8, tm_mday=5, tm_hour=22, tm_min=3, tm_sec=8, tm_wday=3, tm_yday=217, tm_isdst=1)
print(asctime(localtime(time()))) # Thu Aug 5 22:03:08 2021
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/pT6gLZZOoIw" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/pT6gLZZOoIw){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/date-and-time-in-python/){:target="\_blank"}.

### _Happy coding!_
