import { Image } from "@/components/shared/nextjsImports"

import type { ItemDetails } from "@/types/staticPage/playerRowDetailsTypes"

import styles from "@/styles/statisticPage/MatchDetails.module.scss"

export default function ItemDescription({
  details,
  item,
}: {
  details: ItemDetails | null
  item: string
}) {
  if (!details) return <div>NULL</div>

  return (
    <div className={styles.itemDescriptionContainer}>
      <div className={styles.itemNameAndCostWrapper}>
        <div className={styles.itemPicture}>
          <Image
            src={`/pictures/dotaItemIcon/${details[item].img}.webp`}
            alt=""
            width={90}
            height={70}
          />
        </div>
        <div className={styles.nameAndCost}>
          <div className={styles.name}>
            <h4>{details[item].dname}</h4>
          </div>
          <div className={styles.cost}>
            <Image
              src={`/pictures/dotaIcons/gold_symbol.webp`}
              alt=""
              width={20}
              height={20}
            />
            <p>{details[item].cost}</p>
          </div>
        </div>
      </div>
      <div className={styles.descriptionWrapper}>
        <div className={styles.attrib}>
          {/* 
            TODO:
              1. + {number need to be white} other gray.
              2. remove string about cooldown.
              3. do something with overflow y?          
          */}
          {details[item].attrib?.map((att) => (
            <span key={att.key}>
              {att.display?.replace("{value}", att.value)}
            </span>
          ))}
        </div>
        {/* <div className={styles.activeAbility}></div>
          <div className={styles.passiveAbility}></div>
          <div className={styles.hint}></div>
          <div className={styles.lore}></div>
          <div className={styles.components}></div> */}
      </div>
    </div>
  )
}
