---
layout: post
excerpt: Blog
title: 'Interfaces em C#'
description: 'Descobre como se trabalha com interfaces na linguagem de programação C#. Obtém respostas às tuas dúvidas com a teoria e os exemplos apresentados.'
keywords: 'c#, csharp, interfaces, interface, publicação'
date: 2021-12-29
categories: [C#]
---

Nesta publicação aprende-se a trabalhar com interfaces para que se possa usar esses mesmos conhecimentos e assim evoluir.

- uma interface contém definições para um grupo de funcionalidades relacionadas que uma classe ou estrutura (vamos falar de estruturas (struct) no próximo vídeo) podem implementar;
- resumindo, uma interface é como se fosse um contrato e qualquer classe ou estrutura que implementa uma dada interface deve implementar todos os seus membros;
- é importante saber também que uma classe ou uma estrutura podem implementar várias interfaces.

```csharp
using System;

namespace Base {
  class Interfaces {
    public void Run() {
      var carro = new Carro("Nissan", "Juke", "Dianteira", "Manual", "Gasóleo", 1461, 175, 110, 25070);
      carro.Informacao();

      /*
        Marca: Nissan
        Modelo: Juke
        Localização do motor: Dianteira
        Transmissão: Manual
        Combustível: Gasóleo
        Cilindrada: 1461 cc
        Velocidade máxima: 175 km/h
        Potência máxima: 110 cv
        Preço: 25070 euros
      */
    }
  }

  class Carro : ICarro {
    private string marca, modelo, localizacaoDoMotor, transmissao, combustivel;
    private int cilindrada, velocidadeMaxima, potenciaMaxima;
    private double preco;

    public Carro(string marca, string modelo, string localizacaoDoMotor, string transmissao, string combustivel,
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

    public void Informacao() {
      Console.WriteLine($"Marca: {marca}");
      Console.WriteLine($"Modelo: {modelo}");
      Console.WriteLine($"Localização do motor: {localizacaoDoMotor}");
      Console.WriteLine($"Transmissão: {transmissao}");
      Console.WriteLine($"Combustível: {combustivel}");
      Console.WriteLine($"Cilindrada: {cilindrada} cc");
      Console.WriteLine($"Velocidade máxima: {velocidadeMaxima} km/h");
      Console.WriteLine($"Potência máxima: {potenciaMaxima} cv");
      Console.WriteLine($"Preço: {preco} euros");
    }
  }

  interface ICarro {
    void Informacao();
  }
}
```

Não te esqueças de [assistir ao vídeo](https://youtu.be/mPUUj1xwe7U){:target="\_blank"} e podes sempre ler esta publicação [em inglês](https://nelsonsilvadev.com/blog/20211229/interfaces-in-csharp/){:target="\_blank"}.

### _Happy coding!_
