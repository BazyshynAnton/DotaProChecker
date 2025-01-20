'use client'

import { Image } from '@/shared/nextjsImports'

export default function InDevelopment() {
  return (
    <div style={dev}>
      <p>This page is still in development.</p>
      <Image
        src='/pictures/dotaScopeIcons/pudge_chuckle.webp'
        alt='chuckle'
        width={22}
        height={22}
      />
    </div>
  )
}

const dev: React.CSSProperties = {
  paddingTop: '5rem',
  width: '100%',
  height: 'auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  gap: '0.3rem',
  color: '#ffffffb0',
}
