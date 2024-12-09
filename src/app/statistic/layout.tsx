import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Statistic | DotaScope",
}

export default function StatisticLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
