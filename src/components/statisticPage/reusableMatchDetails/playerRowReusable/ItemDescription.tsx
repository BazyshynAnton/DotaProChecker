import { Image } from "@/components/shared/nextjsImports"

import type { ItemDetails } from "@/types/staticPage/playerRowDetailsTypes"

import styles from "@/styles/statisticPage/MatchDetails.module.scss"
import { PlayerRowDetailsUtility } from "@/utils/statisticPage/PlayerRowDetailsUtility"

export default function ItemDescription({
  details,
  item,
}: {
  details: ItemDetails | null
  item: string
}) {
  if (!details) return <div>NULL</div>

  let target: string = ""
  if (Array.isArray(details[item].behavior)) {
    details[item].behavior.forEach((str) => {
      target += str + " / "
    })

    target = target.substring(0, target.length - 2)
  } else if (typeof details[item].behavior === "string")
    target = details[item].behavior

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
        {details[item].behavior && (
          <div className={styles.target}>
            <span>TARGET:</span>
            <span style={{ color: "#fff" }}> {target}</span>
          </div>
        )}
        {details[item].dispellable && (
          <div className={styles.dispellable}>
            <span>DISPELLABLE: </span>
            <span
              style={{
                color: `${
                  details[item].dispellable === "Yes" ? "#5aa460" : "#8b0000"
                }`,
              }}
            >
              {" "}
              {details[item].dispellable}
            </span>
          </div>
        )}
        {details[item].bkbpierce && (
          <div className={styles.piercesDebuffImmunity}>
            <span>PIERCES DEBUFF IMMUNITY: </span>
            <span>
              {" "}
              <span
                style={{
                  color: `${
                    details[item].bkbpierce === "Yes" ? "#5aa460" : "#8b0000"
                  }`,
                }}
              >
                {" "}
                {details[item].bkbpierce}
              </span>
            </span>
          </div>
        )}
        {details[item].behavior &&
          details[item].dispellable &&
          details[item].bkbpierce && (
            <hr
              style={{
                width: "100%",
                height: "1.5px",
                background: "#6c7b7e",
                border: "none",
                margin: "18px 0px 13px 0px",
              }}
            />
          )}
        <div className={styles.attrib}>
          {/* 
            TODO:
              3. do something with overflow y?          
          */}
          {details[item].attrib?.map((att) => {
            if (!att.display) return

            const partsOfString = att.display.split("{value}")

            return (
              <div key={att.key} className={styles.attribTextWrapper}>
                <span>{partsOfString[0]}</span>
                <span style={{ color: "#fff" }}>{att.value}</span>
                <span>{partsOfString[1]}</span>
              </div>
            )
          })}
        </div>
        {details[item].abilities && (
          <div className={styles.abilities}>
            {details[item].abilities.map((abil) => {
              const formattedDescription = abil.description.replace(
                /\n/g,
                "<br/>"
              )

              return (
                <div
                  key={abil.title}
                  className={`${
                    abil.type === "active"
                      ? styles.activeAbil
                      : styles.passiveAbil
                  }`}
                >
                  <div
                    className={`${
                      abil.type === "active"
                        ? styles.activeAbilHeader
                        : styles.passiveAbilHeader
                    }`}
                  >
                    <div className={styles.content}>
                      <span>
                        {abil.type === "active" ? "Active" : "Passive"}:
                      </span>
                      <span> {abil.title}</span>
                    </div>
                    <div className={styles.manaAndCooldown}>
                      {abil.type === "active" && details[item].mc ? (
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <Image
                            src="/pictures/dotaIcons/ability_manacost.png"
                            alt=""
                            width={20}
                            height={20}
                          />
                          <span
                            style={{
                              color: "#fff",
                              fontWeight: "400",
                              letterSpacing: "0px",
                              paddingLeft: "3px",
                              fontSize: "1rem",
                            }}
                          >
                            {details[item].mc}
                          </span>
                        </div>
                      ) : (
                        <></>
                      )}

                      {abil.type === "active" && details[item].cd ? (
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <Image
                            src="/pictures/dotaIcons/ability_cooldown.png"
                            alt=""
                            width={20}
                            height={20}
                          />
                          <span
                            style={{
                              color: "#fff",
                              fontWeight: "400",
                              letterSpacing: "0px",
                              paddingLeft: "3px",
                              fontSize: "1rem",
                            }}
                          >
                            {details[item].cd}
                          </span>
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                  <div
                    className={`${
                      abil.type === "active"
                        ? styles.activeAbilDescription
                        : styles.passiveAbilDescription
                    }`}
                  >
                    <span
                      dangerouslySetInnerHTML={{ __html: formattedDescription }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        )}
        {details[item].hint && details[item].hint.length > 0 && (
          <div className={styles.hint}>{details[item].hint}</div>
        )}
        {details[item].lore && (
          <div className={styles.lore}>
            <i>{details[item].lore}</i>
          </div>
        )}
        {details[item].components && details[item].components.length > 0 && (
          <div className={styles.components}>
            <span className={styles.componentsHeader}>Components:</span>
            <div className={styles.componentsWrapper}>
              {details[item].components.map((component, idx) => {
                const rdUtility = new PlayerRowDetailsUtility()
                const itemCost = rdUtility.findItemCostByName(component)
                return (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "3px",
                    }}
                  >
                    <Image
                      src={`/pictures/dotaItemIcon/${component}.webp`}
                      alt=""
                      width={34}
                      height={25}
                    />
                    <span>{itemCost}</span>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
