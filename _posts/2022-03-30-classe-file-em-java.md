---
layout: post
excerpt: Blog
title: 'Classe File em Java'
description: 'Descobre como se trabalha com a classe File na linguagem de programação Java. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'java, classe file, classe, file, publicação'
date: 2022-03-30
categories: [Java]
redirect_from:
  - /blog/20220330/classe-file-em-java/
---

Nesta publicação aprende-se a trabalhar com a classe File para que se possa usar esses mesmos conhecimentos e assim evoluir.

- esta classe fornece métodos para criar, apagar, obter o caminho absoluto e verificar a existência de um único ficheiro de cada vez.

`File (objeto).createNewFile()` | Cria um ficheiro no caminho especificado
`File (objeto).delete()` | Apaga o determinado ficheiro
`File (objeto).getAbsolutePath()` | Obtém o caminho absoluto do ficheiro
`File (objeto).exists()` | Verifica se o dado ficheiro existe ou não

```java
package com.caffeinealgorithm.programaremjava;

import java.io.File;
import java.io.IOException;

public class ClasseFile {
  private File ficheiro = new File("Ficheiro.txt");

  public void Run() {
    /*
      try {
        ficheiro.createNewFile();
      }
      catch (IOException excecao) {
        System.out.println(excecao);
      }
    */

    ficheiro.delete();

    // System.out.println(ficheiro.getAbsolutePath());

    if (ficheiro.exists())
      System.out.println("O ficheiro \"Ficheiro.txt\" existe.");
    else
      System.out.println("O ficheiro \"Ficheiro.txt\" não existe.");
  }
}

// O ficheiro "Ficheiro.txt" não existe.
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/_d2WykDSZyM" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/_d2WykDSZyM){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/file-class-in-java/){:target="\_blank"}.

### _Happy coding!_
