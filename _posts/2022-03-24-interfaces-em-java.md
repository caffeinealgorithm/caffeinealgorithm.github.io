---
layout: post
excerpt: Blog
title: 'Interfaces em Java'
description: 'Descobre como se trabalha com interfaces na linguagem de programação Java. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'java, interfaces, interface, publicação'
date: 2022-03-24
categories: [Java]
---

Nesta publicação aprende-se a trabalhar com interfaces para que se possa usar esses mesmos conhecimentos e assim evoluir.

- uma interface contém definições para um grupo de funcionalidades relacionadas que uma classe pode implementar;
- resumindo, uma interface é como se fosse um contrato e qualquer classe que implementa uma dada interface deve implementar todos os seus membros;
- é importante saber também que uma classe pode implementar várias interfaces.

```java
package com.caffeinealgorithm.programaremjava;

public class Interfaces {
  public void Run() {
    var carro = new Carro("Nissan", "Juke", "Dianteira", "Manual", "Gasóleo", 1461, 175, 110, 25070);
    carro.informacao();

    /*
      Marca: Nissan
      Modelo: Juke
      Localização do motor: Dianteira
      Transmissão: Manual
      Combustível: Gasóleo
      Cilindrada: 1461 cc
      Velocidade máxima: 175 km/h
      Potência máxima: 110 cv
      Preço: 25070.00 euros
    */
  }
}

class Carro implements ICarro {
  private String marca, modelo, localizacaoDoMotor, transmissao, combustivel;
  private int cilindrada, velocidadeMaxima, potenciaMaxima;
  private double preco;

  public Carro(String marca, String modelo, String localizacaoDoMotor, String transmissao, String combustivel,
               int cilindrada, int velocidadeMaxima, int potenciaMaxima, double preco) {
    this.marca = marca;
    this.modelo = modelo;
    this.localizacaoDoMotor = localizacaoDoMotor;
    this.transmissao = transmissao;
    this.combustivel = combustivel;
    this.cilindrada = cilindrada;
    this.velocidadeMaxima = velocidadeMaxima;
    this.potenciaMaxima = potenciaMaxima;
    this.preco = preco;
  }

  public void informacao() {
    System.out.printf("Marca: %s\n", marca);
    System.out.printf("Modelo: %s\n", modelo);
    System.out.printf("Localização do motor: %s\n", localizacaoDoMotor);
    System.out.printf("Transmissão: %s\n", transmissao);
    System.out.printf("Combustível: %s\n",combustivel);
    System.out.printf("Cilindrada: %d cc\n", cilindrada);
    System.out.printf("Velocidade máxima: %d km/h\n", velocidadeMaxima);
    System.out.printf("Potência máxima: %d cv\n", potenciaMaxima);
    System.out.printf("Preço: %.2f euros", preco);
  }
}

interface ICarro {
  void informacao();
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/0I7MyvAkBK0" frameborder="0" allowfullscreen></iframe>
</div>

Não te esqueças de [assistir ao vídeo](https://youtu.be/0I7MyvAkBK0){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/20220324/interfaces-in-java/){:target="\_blank"}.

### _Happy coding!_
