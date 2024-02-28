import React from 'react'

const HomeMain = ({language, setLanguage}) => {

     const langs = [
        // ru
        {
            title:"Кошелек и Инструменты",
            text:"BTCA предоставляет вам инструменты и ресурсы, чтобы вы всегда могли контролировать свои средства.",
            dowload:"Скачать кошелек",
            lan:"ru"
        },

        // eng
        {
            title:"Wallet and Tools",
            text:"BTCA provides you with the tools and resources to ensure you are always in control of your funds.",
            dowload:"Download wallet",
            lan:"eng"
        }
     ]
  return ( 
    <section className='py-20 home-main'>
        <div className=' containerb'>
           <div className='w-full max-w-[420px]'>
           {
            langs.map((e)=>{
                if (e.lan === language) {
                    return (
                      <div>
                        <h2 className='title-gradient font-bold text-[42px] leading-10 mb-3'>{e.title}</h2>
                        <p className='text-white font-semibold text-lg leading-8 mb-10'>{e.text}</p>
                      </div>
                    )
                }
            })
           }
           </div>
        </div>
    </section>
  )
}

export default HomeMain