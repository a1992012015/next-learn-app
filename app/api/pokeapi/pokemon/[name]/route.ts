import { NextResponse } from "next/server";

import { pokemonClient } from "@/services/pokemon.service";

export async function GET(request: Request, { params }: { params: { name: string } }) {
  const species = await pokemonClient.getPokemonSpeciesByName(params.name);
  const pokemon = await pokemonClient.getPokemonByName(params.name);
  return NextResponse.json({ species, pokemon });
}
