import { Image } from "@/shared/nextjsImports"

export default function Loader() {
  return (
    <div style={loaderContainer}>
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

const loaderContainer: React.CSSProperties = {
  paddingTop: "3rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  width: "100%",
  height: "max-content",
  fontSize: "1rem",
  color: "#494949",
}
