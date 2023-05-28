class Atleta {
    constructor(nome, idade, peso, altura, notas) {
      this.nome = nome;
      this.idade = idade;
      this.peso = peso;
      this.altura = altura;
      this.notas = notas;
    }
  
    calculaCategoria() {
      if (this.idade >= 9 && this.idade <= 11) {
        return "Infantil";
      } else if (this.idade >= 12 && this.idade <= 13) {
        return "Juvenil";
      } else if (this.idade >= 14 && this.idade <= 15) {
        return "Intermediário";
      } else if (this.idade >= 16 && this.idade <= 30) {
        return "Adulto";
      } else {
        return "Sem categoria";
      }
    }
  
    calculaIMC() {
      const imc = this.peso / (this.altura * this.altura);
      return imc.toFixed(2);
    }
  
    calculaMediaValida() {
      const notasValidas = this.notas.filter(nota => nota >= 0 && nota <= 10);
      const soma = notasValidas.reduce((total, nota) => total + nota, 0);
      const media = soma / notasValidas.length;
      return media.toFixed(2);
    }
  
    obtemNomeAtleta() {
      return this.nome;
    }
  
    obtemIdadeAtleta() {
      return this.idade;
    }
  
    obtemPesoAtleta() {
      return this.peso;
    }
  
    obtemNotasAtleta() {
      return this.notas;
    }
  
    obtemCategoria() {
      return this.calculaCategoria();
    }
  
    obtemIMC() {
      return this.calculaIMC();
    }
  
    obtemMediaValida() {
      return this.calculaMediaValida();
    }
  }
  
  // Uso da classe
  const atleta = new Atleta(
    "Cesar Abascal",
    30,
    80,
    1.70,
    [10, 9.34, 8.42, 10, 7.88]
  );
  
  console.log("Nome:", atleta.obtemNomeAtleta());
  console.log("Idade:", atleta.obtemIdadeAtleta());
  console.log("Peso:", atleta.obtemPesoAtleta());
  console.log("Altura:", atleta.altura);
  console.log("Notas:", atleta.obtemNotasAtleta());
  console.log("Categoria:", atleta.obtemCategoria());
  console.log("IMC:", atleta.obtemIMC());
  console.log("Média válida:", atleta.obtemMediaValida());
  