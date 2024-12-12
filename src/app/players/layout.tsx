import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Players | DotaScope",
}

export default function PlayersLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
