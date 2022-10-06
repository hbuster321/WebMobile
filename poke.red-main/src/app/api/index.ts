import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Pokedex, Pokemon, PokemonSpecies, Type } from "../type";

export const PokeAPI = createApi({
  reducerPath: "PokeAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokedex: builder.query<Pokedex, number | string>({
      query: (id) => `pokedex/${id}`,
    }),
    getPokemonSpeciesById: builder.query<PokemonSpecies, number | string>({
      query: (id) => `pokemon-species/${id}`,
    }),
    getPokemonById: builder.query<Pokemon, number | string>({
      query: (id) => `pokemon/${id}`,
    }),
    getAbilityById: builder.query<Type, number | string>({
      query: (id) => `ability/${id}`,
    }),
    getStatById: builder.query<Type, number | string>({
      query: (id) => `stat/${id}`,
    }),
    getTypeById: builder.query<Type, number | string>({
      query: (id) => `type/${id}`,
    }),
  }),
});

export const {
  useGetPokedexQuery,
  useGetPokemonSpeciesByIdQuery,
  useGetPokemonByIdQuery,
  useGetAbilityByIdQuery,
  useGetStatByIdQuery,
  useGetTypeByIdQuery,
} = PokeAPI;
