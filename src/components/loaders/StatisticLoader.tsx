import { Image } from "@/shared/nextjsImports"

export default function Loader() {
  return (
    <div style={loaderContainer}>
      <p>Loading...</p>
      <Image
        src="/pictures/dotaScopeIcons/tango.gif"
        alt="tango"
        width={22}
        height={22}
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
  color: "#ffffffb0",
}
