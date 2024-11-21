import { Image } from "@/shared/nextjsImports"

export default function Loader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        width: "100%",
        height: "max-content",
        fontSize: "1.2rem",
        color: "#494949",
      }}
    >
      <p>Searching for your match...</p>
      <Image
        src="/pictures/dotaScopeIcons/tango.gif"
        alt="tango"
        width={32}
        height={32}
        priority
      />
    </div>
  )
}
