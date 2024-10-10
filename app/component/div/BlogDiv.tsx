import React , { FC } from 'react'

interface Props {
 className?: string
 image: string
 text: string
 author : string
 title : string
 description : string
}

export const BlogDiv: FC<Props> = ({className, image, text, author, title, description}) => {
  return (
   <main>
      <section className={`${className} font-sans bg-lightBlue w-[24rem] h-[30rem] flex flex-col justify-center  items-center rounded-md gap-4 `}>
          <img src={image} className='w-80'/>
          <div className='flex gap-28  items-center'>
              <button className='text-white bg-darkBlue w-24 h-10 rounded-md'>{text}</button>
              <h1 className='text-darkBlue'>{author}</h1>
          </div>
          <p className='text-darkBlue -ml-48'>{title}</p>
          <p className='text-darkBlue -ml-[rem] text-opacity-40 text-lg'>{description}</p>
      </section>
   </main>
  )
}
