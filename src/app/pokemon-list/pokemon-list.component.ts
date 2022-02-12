import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent implements OnInit {

  // Para utilizar o service incluso no provider do módulo +
  // é necessário inicializar no construtor uma variável +
  // private, com o tipo do service
  constructor(public pokemonService: PokemonService) { }

  ngOnInit(): void {
  }

}
