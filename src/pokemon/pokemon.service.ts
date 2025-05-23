import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { isValidObjectId, Model } from 'mongoose';
import { Pokemon } from './entities/pokemon.entity';
import { InjectModel } from '@nestjs/mongoose';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PokemonService {

  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly configService: ConfigService,
  ){}


  async create(createPokemonDto: CreatePokemonDto) {
    
    try {
        createPokemonDto.name = createPokemonDto.name.toLowerCase();
        const pokemon = await this.pokemonModel.create(createPokemonDto);
        return pokemon;
    } catch (error) {
        this.handleExceptions(error);
    }
  }

  findAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto;
    //* com os parametros sort vamos ordenar os pokemons pelo no em ordem crescente
    //* e o select('-__v') vai remover o campo __v do retorno
    return this.pokemonModel.find().limit(limit).skip(offset).sort({ no: 1 }).select('-__v');
  }

  async findOne(term: string) {
    let pokemon: Pokemon | null = null;

    //no
    if (!isNaN(+term)) {
      pokemon = await this.pokemonModel.findOne({ no: term });
    }

    //mongo id
    if( isValidObjectId(term)) {
      pokemon = await this.pokemonModel.findById(term);
    }

    //name
    if( !pokemon ) {
      pokemon = await this.pokemonModel.findOne({ name: term.toLowerCase() });
    }

    if (!pokemon ) throw new NotFoundException(`Pokemon with id, name or no ${term} not found`);

    return pokemon;
  }

  async update(term: string, updatePokemonDto: UpdatePokemonDto) {

    const pokemon = await this.findOne(term);
    if( updatePokemonDto.name ){
        updatePokemonDto.name = updatePokemonDto.name.toLowerCase();
    }

    await pokemon.updateOne(updatePokemonDto, { new: true });

    return { ...pokemon.toJSON(), ...updatePokemonDto };
  }

  async remove(id: string) {
    //! tbm existe o deleteMany onde seria algo similar a select * from table delete
    const result = await this.pokemonModel.deleteOne({ _id: id });
    if( result.deletedCount === 0 ) throw new NotFoundException(`Pokemon with id ${id} not found`);

    return result;
  }

  private handleExceptions(error: any) {
    if (error.code === 11000) {
      throw new BadRequestException(`Pokemon exists in db ${JSON.stringify(error.keyValue)}`);
    }
    throw new InternalServerErrorException(`Can't create Pokemon - Check server logs`);
  }
}
