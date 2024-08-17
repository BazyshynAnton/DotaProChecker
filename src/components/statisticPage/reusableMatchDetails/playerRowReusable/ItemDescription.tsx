import styles from "@/styles/statisticPage/MatchDetails.module.scss"

export default function ItemDescription() {
  return (
    <div className={styles.itemDescriptionContainer}>
      <div className={styles.itemNameAndCost}>
        <div className={styles.itemNameAndCostWrapper}>
          <div className={styles.itemPicture}></div>
          <div className={styles.nameAndCost}>
            <h4>ITEM NAME</h4>
            {/* coins */}
            <p>XXX</p>
          </div>
        </div>
        <div className={styles.descriptionWrapper}>
          <div className={styles.attrib}>
            {/*     1
                    2
                    3
                    ... */}
          </div>
          <div className={styles.activeAbility}></div>
          <div className={styles.passiveAbility}></div>
          <div className={styles.hint}></div>
          <div className={styles.lore}></div>
          <div className={styles.components}></div>
        </div>
      </div>
    </div>
  )
}
