'use client';

import EvolutionCard from '@/components/evolutionCard';
import { pokemonTypes } from '@/constant';
import useEvolution from '@/hooks/useEvolution';
import usePokemon from '@/hooks/usePokemon';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from '@/components/ui/progress';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';


interface Params {
  params: {
    pokemon: string
  }
}

const Pokemon = () => {
  const params = useParams()
  const { pokemon, isLoading } = usePokemon(params.pokemon.toString());
  const { evolutions, speciesData, isLoading: evolutionLoading } = useEvolution(pokemon?.species.url!);
  const text = new Set();
  speciesData?.flavor_text_entries.map((entry: any) => {
    if (entry.language.name === 'en') {
      text.add(entry.flavor_text);
    }
  });

  const weaknessSet = new Set();
  const strengthSet = new Set();
  const resistanceSet = new Set();
  const vulnerableSet = new Set();

  pokemon?.types.map((type: any) => pokemonTypes[type.type.name].weakness.map((type: string) => weaknessSet.add(type)));
  pokemon?.types.map((type: any) => pokemonTypes[type.type.name].strength.map((type: string) => strengthSet.add(type)));
  pokemon?.types.map((type: any) => pokemonTypes[type.type.name].resistance.map((type: string) => resistanceSet.add(type)));
  pokemon?.types.map((type: any) => pokemonTypes[type.type.name].vulnerable.map((type: string) => vulnerableSet.add(type)));
  
  const description = Array.from(text).join(' ');
  
  const weakness = Array.from(weaknessSet);
  const strength = Array.from(strengthSet);
  const resistance = Array.from(resistanceSet);
  const vulnerable = Array.from(vulnerableSet);

  return (
    <>
    {pokemon === null && <p>Pokemon not found</p>}
    {pokemon && <div className='flex lg:flex-row justify-between md:flex-col pb-[1px]'>
      <div className='w-1/3 px-10 flex flex-col gap-6'>
        <div className='relative z-10 pt-10'>
          <Image src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} 
            width={400}
            height={400}
          />
        </div>
        
        <span className='text-xs font-light'>Evolutions</span>
        <div className='flex gap-2'>
          {evolutions?.map((pokemon: string) => (<EvolutionCard name={pokemon} key={pokemon} /> ))}
        </div>
      </div>
      <div className='w-2/3 
        dark:bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-800 to-zinc-900
        border border-b-0 shadow-md drop-shadow-lg ring-1 ring-zinc-200 rounded-tl-2xl flex flex-col gap-10 pl-10
        dark:shadow-zinc-300 dark:ring-zinc-600 mt-6
        '>
        <div className='pt-6 '>
          <p className='capitalize text-4xl font-bold'>{pokemon.name}</p>
          <div className='flex flex-row gap-2 pt-3'>
          {
            pokemon.types.map((type: any) => {
              return (
                <div key={type.type.name}>
                  <p>{}</p>
                  <Image src={pokemonTypes[type.type.name].image} alt={type.type.name} width={36} height={36} />
                </div>
              )
            }
          )}
          </div>
        </div>
        <Tabs defaultValue="about" className="w-full">
          <TabsList className='w-[90%] flex justify-evenly'>
            <TabsTrigger value="about" className='text-lg w-full'>About</TabsTrigger>
            <TabsTrigger value="stats" className='text-lg w-full'>Stats</TabsTrigger>
            <TabsTrigger value="moves" className='text-lg w-full'>Moves</TabsTrigger>
          </TabsList>

          <TabsContent value="about">
            <div className='w-[90%] pt-4 pl-2 text-justify flex flex-col pb-6'>
              <div className='flex gap-2'>
                <Card className='px-4 flex flex-col justify-center items-center py-4 w-1/5'>
                  <div>
                    <p>{(pokemon.weight / 10 * 2.20462).toFixed(2)}</p>
                  </div>
                  <div>
                    <span className='text-xs'>Weight</span>
                  </div>
                </Card>
                <Card className='px-4 flex flex-col justify-center items-center py-4 w-1/5'>
                  <div>
                    <p>{pokemon.height/10} m</p>
                  </div>
                  <div>
                    <span className='text-xs'>Height</span>
                  </div>
                </Card>
                <Card className='px-4 flex flex-col justify-center items-center py-4 w-1/5'>
                  <div>
                    <p className='capitalize'>{speciesData?.habitat.name}</p>
                  </div>
                  <div>
                    <span className='text-xs'>Habitat</span>
                  </div>
                </Card>
                <Card className='px-4 flex flex-col justify-center items-center py-4 w-1/5'>
                  <div>
                    <p className='capitalize'>{speciesData?.growth_rate.name}</p>
                  </div>
                  <div>
                    <span className='text-xs'>Growth Rate</span>
                  </div>
                </Card>
              </div>
              <div className='py-6'>
                <p>{description}</p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="stats" className='w-[90%] pt-4 pl-2 pb-10'>
            {
              pokemon.stats.map((stat: any) => (
                <div key={stat.stat.name} className='flex items-center py-1'>
                  <div className='w-1/3'>
                    <p className='uppercase'>{stat.stat.name}</p>
                  </div>
                  
                  <Progress value={stat.base_stat} /> <span className='pl-4 text-sm font-light'>({stat.base_stat})</span>
                </div>
              ))
            }
            <Separator className='mt-4 bg-white'/>
            <div className='flex pt-4 pb-2 items-center flex-wrap'>
              <div className='w-1/4'>Weakness</div >
              <div className='flex gap-2'>
                {
                  weakness.map((type: any) => (
                    <div key={type}>
                      <Image src={pokemonTypes[type].image} alt='type' width={36} height={36} />
                    </div>
                  ))
                }
              </div>
            </div>

            <div className='flex py-2 items-center flex-wrap'>
              <div className='w-1/4'>Strength</div >
              <div className='flex gap-2'>
                {
                  strength.map((type: any) => (
                    <div key={type}>
                      <Image src={pokemonTypes[type].image} alt='type' width={36} height={36} />
                    </div>
                  ))
                }
              </div>
            </div>

            <div className='flex py-2 items-center flex-wrap'>
              <div className='w-1/4'>Resistance</div >
              <div className='flex gap-2'>
                {
                  resistance.map((type: any) => (
                    <div key={type}>
                      <Image src={pokemonTypes[type].image} alt='type' width={36} height={36} />
                    </div>
                  ))
                }
              </div>
            </div>

            <div className='flex py-2 items-center flex-wrap'>
              <div className='w-1/4'>Vulnerable</div >
              <div className='flex gap-2'>
                {
                  vulnerable.map((type: any) => (
                    <div key={type}>
                      <Image src={pokemonTypes[type].image} alt='type' width={36} height={36} />
                    </div>
                  ))
                }
              </div>
            </div>

          </TabsContent>

          <TabsContent value="moves" className='w-[90%] pt-4 pl-2 pb-10'>
            <div className='flex gap-2 flex-wrap'>
              {
                
                pokemon.moves.map((move: any) => (
                  <div key={move.move.name} className='capitalize dark:bg-black border shadow-sm px-4 py-2 rounded-md'>{move.move.name}</div>
                ))
                
              }
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      
    </div>}
    </>
  )
}

export default Pokemon