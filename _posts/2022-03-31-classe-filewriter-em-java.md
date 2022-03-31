---
layout: post
excerpt: Blog
title: 'Classe FileWriter em Java'
description: 'Descobre como se trabalha com a classe FileWriter na linguagem de programação Java. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'java, classe filewriter, classe, filewriter, publicação'
date: 2022-03-31
categories: [Java]
---

Nesta publicação aprende-se a trabalhar com a classe FileWriter para que se possa usar esses mesmos conhecimentos e assim evoluir.

- esta classe tem como objetivo implementar um modo de escrita para que se possa escrever carateres em um fluxo (ficheiro) de acordo com uma codificação específica.

`FileWriter (objeto).write()` | Escreve no ficheiro todo o seu conteúdo sem mudar de linha
`FileWriter (objeto).close()` | Termina a ligação existente com o determinado ficheiro

```java
package com.caffeinealgorithm.programaremjava;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class ClasseFileWriter {
  private File ficheiro = new File("Ficheiro.txt");
  private List<String> paises = new ArrayList<>();
  private FileWriter escreverFicheiro;

  public void Run() {
    paises.add("Portugal");
    paises.add("Brasil");
    paises.add("Espanha");
    paises.add("França");
    paises.add("Itália");
    paises.add("Austrália");
    paises.add("Índia");

    if (!ficheiro.exists()) {
      try {
        ficheiro.createNewFile();
        escreverFicheiro = new FileWriter(ficheiro);

        for (String pais : paises)
          escreverFicheiro.write(pais + '\n');

        escreverFicheiro.close();
      }
      catch (IOException excecao) {
        System.out.println(excecao);
      }
    }
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/iohYifid7pM" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/iohYifid7pM){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/20220330/filewriter-class-in-java/){:target="\_blank"}.

### _Happy coding!_
