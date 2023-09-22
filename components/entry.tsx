import usePokemon from '@/hooks/usePokemon'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { pokemonTypes } from '@/constant';

const Entry = ({ name }: {
  name: string,
}) => {
  const { pokemon, isLoading } = usePokemon(name);
  return (
    <Link href={"/" + name }>
      <div>
        {isLoading && <>
          <div>
          <Image
            priority
            className='animate-spin'
            src="/pokeball.svg"
            height={120}
            width={102}
            alt="pokeball"
          />
          </div>
          
        </>}
        {pokemon && 
          <Card className='hover:scale-[102%] ease-in-out duration-200 shadow-zinc-300 items-center flex flex-col justify-center max-h-[410px] 
          bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-yellow-400 to-lime-600
            dark:bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-800
            '>
            <CardContent>
              <Image src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} 
                width={200}
                height={200}
                className='pt-10'
              />
            </CardContent>
            <CardHeader className='flex flex-col items-center justify-center'>
              <CardTitle className='capitalize text-white'>{pokemon.name}</CardTitle>
              <CardDescription className='flex gap-2'>
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
              </CardDescription>
            </CardHeader>
          
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
        </Card>
        }
      </div>
    </Link>
  )
}

export default Entry