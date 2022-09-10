---
layout: post
excerpt: Blog
title: 'Erros Comuns em Java'
description: 'Descobre como se trabalha com erros comuns na linguagem de programação Java. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'java, erros communs, erros, erro, publicação'
date: 2022-03-09
categories: [Java]
---

Nesta publicação aprende-se a trabalhar com erros comuns para que se possa usar esses mesmos conhecimentos e assim evoluir.

- existem três tipos erros: erros de compilação, erros de tempo de execução e erros de lógica;
- os erros de compilação são erros que impedem a execução da nossa aplicação e são maioritariamente causados pelo mau digitar do nosso código (por exemplo a não inserção do `;` para finalizar uma determinada linha de código);
- os erros de tempo de execução são erros que ocorrem enquanto a nossa aplicação é executada e normalmente damos conta desses mesmos quando a aplicação tenta uma operação que é impossível executar (por exemplo a divisão por zero);
- os erros de lógica são erros que erros que impedem que a nossa aplicação faça o que é pretendido fazer, ou seja, o nosso código é complicado e executado sem erros, mas o resultado de uma operação por acabar por não ser o esperado (por exemplo não complementar uma dada variável do tipo string);
- destes três tipos de erros, os erros lógicos são os mais difíceis de localizar e corrigir.

```java
package com.caffeinealgorithm.programaremjava;

import java.util.Scanner;

public class ErrosComuns {
  public void Run() {
    // Erro de compilação
    System.out.println("Eu sou uma string.");

    // Erro de tempo de execução
    int x = 10, y = 0;
    // System.out.printf("Resultado da divisão: %d", x / y);

    // Erro de lógica
    Scanner inputDoUtilizador = new Scanner(System.in);
    String primeiroNome = null, ultimoNome = null;

    System.out.print("Insere o teu último nome: ");
    ultimoNome = inputDoUtilizador.nextLine();

    System.out.printf("Nome: %s %s", primeiroNome, ultimoNome);
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/HCclW4TLSyY" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/HCclW4TLSyY){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/common-mistakes-in-java/){:target="\_blank"}.

### _Happy coding!_
