---
layout: post
excerpt: Blog
title: 'Módulos em Python'
description: 'Descobre como se trabalha com módulos na linguagem de programação Python. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'python, módulos, módulo, publicação'
date: 2021-10-15
categories: [Python]
redirect_from:
  - /blog/20211015/modulos-em-python/
---

Nesta publicação aprende-se a trabalhar com módulos para que se possa usar esses mesmos conhecimentos e assim evoluir.

- os módulos são basicamente objetos com atributos que se podem ligar através de uma referência;
- estes mesmos permitem agrupar o seu código, o que torna tudo mais fácil de entender e de usar;

`dir(modulo)` | Retorna uma lista ordenada de strings contendo os nomes definidos no módulo em questão

- essa mesma lista contém os nomes de todas as variáveis e funções que foram definidas nesse mesmo módulo.

```python
# import math
# from math import sqrt
from math import *

# print('Conteúdo do módulo:', dir(math))
# print('Função sqrt:', sqrt(10))
print('Valor de pi:', pi) # Valor de pi: 3.141592653589793
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/HuvfFhMmsbI" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/HuvfFhMmsbI){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/modules-in-python/){:target="\_blank"}.

### _Happy coding!_
