import Image from 'next/image'
import React from 'react'
import profileCharacter from "../../../public/character.png"

const AboutCoverSection = () => {
  return (
    <section className='w-full md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light'>
      <div className='w-full md:w-1/2 h-full border-r-2 border-solid border-dark dark:border-light flex justify-center'>
        <Image src={profileCharacter} alt="Elton José"
          className='w-4/5  xs:w-3/4 md:w-full h-full object-contain object-center'
          priority
          sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
        />
      </div>

      <div className='w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16'>
        <h2 className='font-bold capitalize text-4xl xs:text-5xl sxl:text-6xl  text-center lg:text-left'>
          Dicas e Insights: Desenvolvimento, Trabalho Remoto e Tecnologia
        </h2>
        <p className='font-medium capitalize mt-4 text-base'>
          Seja bem-vindo ao meu blog, onde compartilho dicas e insights sobre desenvolvimento de software, experiências de trabalho remoto e as últimas tendências em tecnologia. Explore artigos práticos que vão desde truques de codificação até estratégias para melhorar a produtividade no ambiente de trabalho virtual. Este espaço é dedicado a todos os entusiastas da tecnologia, desde desenvolvedores em início de carreira até profissionais experientes em busca de novos conhecimentos e inspiração. Junte-se a mim nesta jornada e vamos explorar juntos o fascinante mundo da tecnologia e do trabalho remoto!        </p>
      </div>
    </section>
  )
}

export default AboutCoverSection