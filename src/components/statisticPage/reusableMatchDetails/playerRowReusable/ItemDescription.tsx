import ReactDOM from "react-dom" // MOVE TO REACT UTILS
import { Image } from "@/components/shared/nextjsImports"
import { PlayerRowDetailsUtility } from "@/utils/statisticPage/PlayerRowDetailsUtility"

import styles from "@/styles/statisticPage/ItemDescription.module.scss"

import type { ItemDetails } from "@/types/staticPage/playerRowDetailsTypes"

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

  return ReactDOM.createPortal(
    <div className={styles.tooltip}>
      <div className={styles.tooltip__NameAndCostWrapper}>
        <div className={styles.tooltip__NameAndCostWrapper__itemPicture}>
          <Image
            src={`/pictures/dotaItemIcon/${details[item].img}.webp`}
            alt=""
            width={90}
            height={70}
          />
        </div>
        <div className={styles.tooltip__NameAndCostWrapper__nameAndCost}>
          <div
            className={styles.tooltip__NameAndCostWrapper__nameAndCost__name}
          >
            <h4>{details[item].dname}</h4>
          </div>
          {details[item].tier ? (
            <div
              className={styles.tooltip__NameAndCostWrapper__nameAndCost__tier}
            >
              <span>Tier {details[item].tier} Neutral Item</span>
            </div>
          ) : (
            <div
              className={styles.tooltip__NameAndCostWrapper__nameAndCost__cost}
            >
              <Image
                src={`/pictures/dotaIcons/gold_symbol.webp`}
                alt=""
                width={20}
                height={20}
              />
              <p>{details[item].cost}</p>
            </div>
          )}
        </div>
      </div>
      <div className={styles.tooltip__description}>
        {details[item].behavior && (
          <div className={styles.tooltip__description__target}>
            <span>TARGET:</span>
            <span style={{ color: "#ffffffde" }}> {target}</span>
          </div>
        )}
        {details[item].dispellable && (
          <div className={styles.tooltip__description__dispellable}>
            <span>DISPELLABLE:</span>
            <span
              className={
                details[item].dispellable === "Yes"
                  ? styles.tooltip__description__dispellable_typeOne
                  : styles.tooltip__description__dispellable_typeTwo
              }
            >
              {" "}
              {details[item].dispellable}
            </span>
          </div>
        )}
        {details[item].bkbpierce && (
          <div className={styles.tooltip__description__piercesDebuffImmunity}>
            <span>PIERCES DEBUFF IMMUNITY:</span>
            <span
              className={
                details[item].bkbpierce === "Yes"
                  ? styles.tooltip__description__piercesDebuffImmunity_typeOne
                  : styles.tooltip__description__piercesDebuffImmunity_typeTwo
              }
            >
              {" "}
              {details[item].bkbpierce}
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
        <div className={styles.tooltip__description__attrib}>
          {details[item].attrib?.map((att) => {
            if (!att.display) return

            const partsOfString = att.display.split("{value}")

            return (
              <div
                key={att.key}
                className={styles.tooltip__description__attrib__text}
              >
                <span>{partsOfString[0]}</span>
                <span style={{ color: "#ffffffde" }}>{att.value}</span>
                <span>{partsOfString[1]}</span>
              </div>
            )
          })}
        </div>
        {details[item].abilities && (
          <div className={styles.tooltip__description__abilities}>
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
                      ? styles.tooltip__description__abilities_active
                      : styles.tooltip__description__abilities_passive
                  }`}
                >
                  <div
                    className={`${
                      abil.type === "active"
                        ? styles.tooltip__description__abilities_active__header
                        : styles.tooltip__description__abilities_passive__header
                    }`}
                  >
                    <div
                      className={
                        styles.tooltip__description__abilities_active_passive__header__content
                      }
                    >
                      <span>
                        {abil.type === "active" ? "Active" : "Passive"}:
                      </span>
                      <span> {abil.title}</span>
                    </div>
                    <div
                      className={
                        styles.tooltip__description__abilities_active_passive__header__manaAndCooldown
                      }
                    >
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
                              color: "#ffffffde",
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
                              color: "#ffffffde",
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
                        ? styles.tooltip__description__abilities_active__description
                        : styles.tooltip__description__abilities_passive__description
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
          <div className={styles.tooltip__description__hint}>
            {details[item].hint}
          </div>
        )}
        {details[item].lore && (
          <div className={styles.tooltip__description__lore}>
            <i>{details[item].lore}</i>
          </div>
        )}
        {details[item].components && details[item].components.length > 0 && (
          <div className={styles.tooltip__description__components}>
            <span>Components:</span>
            <div className={styles.tooltip__description__components__items}>
              {details[item].components.map((component, idx) => {
                const rdUtility = new PlayerRowDetailsUtility()
                const itemCost = rdUtility.findItemCostByName(component)
                return (
                  <div
                    key={idx}
                    className={
                      styles.tooltip__description__components__items__item
                    }
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
    </div>,
    document.getElementById("tooltip_portal") as Element | DocumentFragment
  )
}
