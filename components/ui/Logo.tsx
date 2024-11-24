import React from 'react'

interface LogoProps {
  secondary?: boolean
}

const Logo: React.FC<LogoProps> = ({ secondary }) => {
  return (
    <div className={`md:text-3xl text-xl font-medium ${secondary ? 'text-white' : 'text-darkblue'}`}>Billify</div>
  )
}

export default Logo