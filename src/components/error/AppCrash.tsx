import { Image } from '@/shared/nextjsImports'
import { useEffect, useState } from '@/shared/reactImports'

import styles from '@/styles/error/AppCrash.module.scss'

export default function AppCrash({ error, reset }: { error: Error; reset: () => void }) {
  const [isHintOpen, setIsHintOpen] = useState(false)

  useEffect(() => {
    console.error(error)
  }, [error])

  const handleHintClick = () => setIsHintOpen(!isHintOpen)

  return (
    <div className={styles.error}>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '0.3rem' }}>
        <h3>Application Error</h3>
        <Image
          src={'/pictures/dotaScopeIcons/enigma_error.gif'}
          alt={'enigma_error'}
          width={22}
          height={22}
        />
      </div>
      <span onClick={handleHintClick}>why you see this error </span>
      {isHintOpen && <ErrorExplanation />}
      <button onClick={reset}>
        <span>Try again</span>
      </button>
    </div>
  )
}

function ErrorExplanation() {
  return (
    <div className={styles.errorExplanation}>
      <p>
        &bull; Opendota API is not available at that moment -{' '}
        <a href='https://www.opendota.com/' target='blank'>
          check
        </a>
        <br />
        &bull; API calls limit(2000 calls per day).
        <br />
        &bull; Match ID does not exist(if you manually search for a match).
      </p>
    </div>
  )
}
