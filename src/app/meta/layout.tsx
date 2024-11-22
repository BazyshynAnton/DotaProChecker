import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Meta | DotaScope",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <section>{children}</section>
}
