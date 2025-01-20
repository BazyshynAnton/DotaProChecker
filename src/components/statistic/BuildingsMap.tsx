import styles from '@/styles/statistic/BuildingsMap.module.scss'
import { buildings } from '@/utils/statistic/buildingsMap'
import Image from 'next/image'

export default function BuildingsMap() {
  return (
    <div className={styles.buildingsMap}>
      <h4>buildings map</h4>
      <div className={styles.buildingsMap__mapStatus}>
        <Image
          src={process.env.NEXT_PUBLIC_DOTA_MAP_PICTURE_URL as string}
          alt='Dota2 map'
          width={350}
          height={350}
        />
        {buildings.map((b) => {
          return (
            <span
              style={{
                position: 'absolute',
                top: b.offsetTop,
                left: b.offsetLeft,
                width: '0px',
                height: '0px',
              }}
            >
              <Image src={b.url} alt='building' width={b.width} height={b.height} />
            </span>
          )
        })}
      </div>
    </div>
  )
}
