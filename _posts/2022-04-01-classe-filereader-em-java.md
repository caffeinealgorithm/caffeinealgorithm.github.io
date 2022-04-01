---
layout: post
excerpt: Blog
title: 'Classe FileReader em Java'
description: 'Descobre como se trabalha com a classe FileReader na linguagem de programação Java. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'java, classe filereader, classe, filereader, publicação'
date: 2022-04-01
categories: [Java]
---

Nesta publicação aprende-se a trabalhar com a classe FileReader para que se possa usar esses mesmos conhecimentos e assim evoluir.

- esta classe implementa um modo de leitura para que se possa ler os carateres presentes em um fluxo (ficheiro) de acordo com uma codificação específica.

`FileReader (objeto).read()` | Lê todo o conteúdo do ficheiro até ao fim
`FileReader (objeto).close()` | Termina a ligação existente com o determinado ficheiro

```java
package com.caffeinealgorithm.programaremjava;

import java.io.File;
import java.io.FileReader;
import java.io.IOException;

public class ClasseFileReader {
  private File ficheiro = new File("Ficheiro.txt");
  private char[] carateres = new char[100];
  private FileReader lerFicheiro;

  public void Run() {
    if (ficheiro.exists()) {
      try {
        lerFicheiro = new FileReader(ficheiro);
        lerFicheiro.read(carateres);

        for (char carater : carateres)
          System.out.print(carater);

        lerFicheiro.close();
      }
      catch (IOException excecao) {
        System.out.println(excecao);
      }
    }
  }
}

/*
  Portugal
  Brasil
  Espanha
  França
  Itália
  Austrália
  Índia
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/22Np9fJQv-E" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/22Np9fJQv-E){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/20220401/filereader-class-in-java/){:target="\_blank"}.

### _Happy coding!_
