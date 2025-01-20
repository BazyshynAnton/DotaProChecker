import Advantage from './Advantage'
import BuildingsMap from './BuildingsMap'

import styles from '@/styles/statistic/MapAndGraph.module.scss'

export default function MapAndGraph() {
  return (
    <section className={styles.mapAndGraph}>
      <BuildingsMap />
      <Advantage />
    </section>
  )
}
