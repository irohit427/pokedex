'use client';
import Entry from '@/components/entry'
import { Spinner } from '@/components/ui/spinner';
import { getPokemonPage } from '@/hooks/pokemonApi';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';
import useSWR from 'swr';
import useSWRInfinite from 'swr/infinite'


const Pokemons = () => {
  const [page, setPage ] = useState(1);
  const { ref, inView } = useInView();
  
  const {data, isLoading, size, setSize  } = useSWRInfinite(page => [`getPokemonPage/${page}`, page], () => getPokemonPage(page));

  const pokemonsSet = new Set();

  data?.map((d) => d.results.map((p: any) => pokemonsSet.add(p.name)));

  const pokemons = Array.from(pokemonsSet)

  useEffect(() => {
    if (inView) {
      setSize(size + 1)
      setPage(page + 1);
    }
  }, [inView]);

  if (isLoading) {
    return (
      <div className='flex items-center justify-center h-full'>
      <Image
        priority
        className='animate-spin'
        src="/pokeball.svg"
        height={600}
        width={600}
        alt="pokeball"
      />
      </div>
    )
  }

  return (
    <div>
      <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 mx-auto w-[90%] py-10 gap-x-6 gap-y-4'>
        {
          pokemons.map((pokemon: any) => (
            <Entry key={pokemon} name={pokemon} />
          ))
        }
      </div>
      <div
        className="flex justify-center items-center p-4 col-span-1 sm:col-span-2 md:col-span-3"
        ref={ref}
      >
        <Spinner />
      </div>
    </div>
  )
}

export default Pokemons