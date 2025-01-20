import { Image } from '@/shared/nextjsImports'

export default function AppError() {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffffb0',
        gap: '0.5rem',
      }}
    >
      <h3>Error</h3>
      <Image src='/pictures/dotaScopeIcons/cheeky.gif' alt='puck' width={22} height={22} />
    </div>
  )
}
