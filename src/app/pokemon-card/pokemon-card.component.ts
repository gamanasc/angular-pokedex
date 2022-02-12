import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass']
})
export class PokemonCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() pokemon: string = '';
  @Input() numero: number = 0;

  /**
   * Método para receber a imagem da API
   * @returns string
   */
  pegarImagemPokemon(){
    const numeroFormatado = this.leadingZeroes(this.numero);
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numeroFormatado}.png`
  }

  /**
   * Método para adicionar zeros antes do número
   * @param str string ou number
   * @param size tamanho, por padrão 3
   * @returns string formatada com os zeros à esquerda
   */
  leadingZeroes(str: string | number, size = 3): string{
    let s = String(str);

    while(s.length < (size || 2)){
      s = '0' + s
    }

    return s;
  }

}
