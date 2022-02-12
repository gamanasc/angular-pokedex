import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemons: any = []

  // Para utilizar o HttpClient, é necessário inicializá-lo no construtor
  constructor(private httpClient: HttpClient) {
    this.carregarPokemons();
  }
  // CTRL .

  async carregarPokemons() { // async pois o retorno virá após a consulta, aguardada pela promise via await
    const requisicao =
    await this.httpClient // await aguarda o recebimento dos dados
    .get<any>('https://pokeapi.co/api/v2/pokemon?limit=151') // get recebe a origem, e tipo <any> pois não sabemos o tipo do retorno
    .toPromise(); // Necessário para utilizar o await

    this.pokemons = requisicao.results;
  }
}
