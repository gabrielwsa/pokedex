import { Injectable } from '@nestjs/common';
// import axios, { AxiosInstance } from 'axios';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';
import { PokeResponse } from './interfaces/poke-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';


@Injectable()
export class SeedService {

  // private readonly axios: AxiosInstance = axios;
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter
  ) {}

  
  async executeSeed() {
    const data = await this.http.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=650');
    const pokemonsToInsert: { name: string, no: number }[] = [];
    await this.pokemonModel.deleteMany(); // para evitar duplicar pokemons

    data.results.forEach(async ({ name, url }) => {
      const segments = url.split('/');
      const no: number = +segments[segments.length - 2];

    //   await this.pokemonModel.create({ name, no });

      pokemonsToInsert.push({ name, no });
    });

    await this.pokemonModel.insertMany(pokemonsToInsert);
    return data.results;
  }
}
