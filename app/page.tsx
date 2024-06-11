"use client"

import Spline from '@splinetool/react-spline';
import Link from 'next/link'

export default function Home() {
    return (
      <main className='flex min-h-screen h-fit flex-col items-center justify-center relative'>
        <Navbar />
        <header id="home" className="flex flex-col-reverse md:flex-row w-full h-screen max-w-7xl items-center justify-center p-8 relative overflow-x-hidden">
          <div className='w-full h-2/4 md:h-full md:w-2/5 flex flex-col justify-center items-center md:items-start gap-8'>
            <div className='flex flex-col gap-2'>
              <h1 className='text-4xl font-black md:text-8xl drop-shadow-2xl'>Insightful</h1>
              <h2 className='text-md md:text-2xl drop-shadow-2xl'>Insightful é uma ferramenta de otimização de vendas alimentada por inteligência artificial que fornece insights baseados em dados para impulsionar o desempenho de vendas.</h2>
            </div>
            <p className='max-w-md text-sm md:text-base text-zinc-500 drop-shadow-2xl'>Insightful é uma ferramenta de otimização de vendas baseada em IA que fornece insights baseados em dados para aumentar o desempenho de vendas.
</p>
            <div className='w-full flex items-center justify-center md:justify-start gap-4'>
              <button className='w-48 h-12 sm:text-sm rounded bg-white text-black hover:bg-fuchsia-700 hover:text-white transition-colors border-2 border-slate-950'>Experimente 7 dias grátis!</button>
              <button className='w-48 h-12 text-sm sm:text-base rounded bg-white text-black hover:bg-fuchsia-700 hover:text-white transition-colors border-2 border-slate-950'>Contato</button>
            </div>
          </div>
  
          <div className='w-full h-2/4 md:h-full md:w-3/5 flex items-center justify-center relative -z-10'>
            <Spline className="w-full flex scale-[.25] sm:scale-[.35] lg:scale-[.5] items-center justify-center md:justify-start" scene='https://prod.spline.design/pvM5sSiYV2ivWraz/scene.splinecode'/>
          </div>
        </header>
    </main>
  )
}
function Navbar() {
  return (
    <div className='w-full h-16 backdrop-filter backdrop-blur-xl bg-opacity-20 border-b flex items-center justify-center'>
      <div className='max-w-7xl w-full flex items-center justify-between p-4'>
        <h6 className='font-bold'>Insightful</h6>
        <ul className='flex gap-8'>
          <li><Link className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base drop-shadow-2xl' href="#home">Home</Link></li>
          <li><Link className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base' href="#about">Sobre</Link></li>
          <li><Link className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base' href="#pricing">Preços</Link></li>
        </ul>
      </div>
    </div>
  )
}