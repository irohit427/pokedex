import usePokemon from '@/hooks/usePokemon'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';

const EvolutionCard = ({ name }: {
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
            dark:bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-900 to-zinc-800'>
            <CardContent>
              <Image src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} 
                width={200}
                height={200}
                className='pt-10'
              />
            </CardContent>
        </Card>
        }
      </div>
    </Link>
  )
}

export default EvolutionCard