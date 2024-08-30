// Next.js
import { Image } from "@/components/shared/nextjsImports"

// Styles
import styles from "@/styles/statisticPage/PlayerRow.module.scss"

// Types
import type { DetailsAboutHero } from "@/types/staticPage/playerRowDetailsTypes"
import type { Player } from "@/types/staticPage/staticPageTypes"

export default function HeroAndNickname({
  detailsAboutHero,
  player,
}: {
  detailsAboutHero: DetailsAboutHero
  player: Player
}) {
  return (
    <div className={styles.playerRow__playerDataCell__inCell__heroAndNickname}>
      <div
        className={
          styles.playerRow__playerDataCell__inCell__heroAndNickname__hero
        }
      >
        <div
          className={
            styles.playerRow__playerDataCell__inCell__heroAndNickname__hero__icon
          }
          style={{
            borderRight: `3px solid ${detailsAboutHero.playerColor}`,
          }}
        >
          <Image
            src={`/pictures/dotaHeroIcon/${detailsAboutHero.heroLocalizedName}.png`}
            alt={detailsAboutHero.heroLocalizedName}
            width={256}
            height={144}
            quality={100}
          />
        </div>
        <div
          className={
            styles.playerRow__playerDataCell__inCell__heroAndNickname__hero__level
          }
        >
          {player.level}
        </div>
        <span
          style={{
            background: `${detailsAboutHero.heroVariant.color}`,
          }}
        >
          {detailsAboutHero.heroVariant.icon && (
            <Image
              src={`/pictures/dotaHeroFacetIcon/${detailsAboutHero.heroVariant.icon}.png`}
              alt={detailsAboutHero.heroVariant.icon}
              width={72}
              height={72}
            />
          )}
        </span>
      </div>
      <div
        className={
          styles.playerRow__playerDataCell__inCell__heroAndNickname__nickname
        }
      >
        <div
          className={
            player.team_number === 0
              ? styles.playerRow__playerDataCell__inCell__heroAndNickname__nickname_radiant
              : styles.playerRow__playerDataCell__inCell__heroAndNickname__nickname_dire
          }
        >
          {player.personaname ? player.personaname : "Anonymous"}
        </div>
      </div>
    </div>
  )
}
