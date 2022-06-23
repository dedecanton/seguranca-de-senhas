import React from 'react'

type Props = {
    children: React.ReactNode,
    className?:string,
    id: string,
    sectionClassName?: string
}

const Section = ({children, className, id, sectionClassName}:Props) => {
  return (
    <section className={sectionClassName || ''} id={id}>
      <div className={`max-w-7xl mx-auto flex justify-center items-center px-2 py-10 ${className || ''}`}>
        {children}
      </div>
    </section>
  )
}

export default Section