import { Image } from "@/shared/nextjsImports"

import type { ItemDescriptionInterface } from "@/types/staticPage/playerRow"

import styles from "@/styles/statisticPage/ItemDescription.module.scss"

export default function Abilities({ details, item }: ItemDescriptionInterface) {
  //
  // Check for existence
  if (!details) {
    throw new Error("[DATA] Cannot get data about Item Details")
  }

  return (
    <>
      {details[item].abilities && (
        <div className={styles.tooltip__description__abilities}>
          {details[item].abilities.map((abil) => {
            //
            // Format description from JSON file:
            // replace all "\n" symbols to <br/>
            // for using in HTML
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
                    : abil.type === "use"
                    ? styles.tooltip__description__abilities_use
                    : styles.tooltip__description__abilities_passive
                }`}
              >
                <div
                  className={`${
                    abil.type === "active"
                      ? styles.tooltip__description__abilities_active__header
                      : abil.type === "use"
                      ? styles.tooltip__description__abilities_use__header
                      : styles.tooltip__description__abilities_passive__header
                  }`}
                >
                  <div
                    className={
                      styles.tooltip__description__abilities_active_passive__header__content
                    }
                  >
                    <span>
                      {abil.type === "active"
                        ? "Active"
                        : abil.type === "use"
                        ? "Use"
                        : "Passive"}
                      :
                    </span>
                    <span> {abil.title}</span>
                  </div>
                  <div
                    className={
                      styles.tooltip__description__abilities_active_passive__header__manaAndCooldown
                    }
                  >
                    {(abil.type === "active" || abil.type === "use") &&
                    details[item].mc ? (
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

                    {(abil.type === "active" || abil.type === "use") &&
                    details[item].cd ? (
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
                      : abil.type === "use"
                      ? styles.tooltip__description__abilities_use__description
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
    </>
  )
}
