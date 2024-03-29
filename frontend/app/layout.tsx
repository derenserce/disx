import "./globals.css"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/ThemeProvider"
import { ModeToggler } from "@/components/ModeToggler"
import { ProfileCard } from "@/components/ProfileCard"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="mx-auto max-w-7xl">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="grid grid-cols-3 gap-16 pt-4">
            {/* Left side */}
            <div className="col-span-1 flex flex-col gap-8">
              {/* Home button */}
              <div>
                <Link
                  className="link-hover flex w-max gap-2 rounded-full px-3 py-1"
                  href={"/"}
                >
                  <span className="text-2xl font-semibold text-slate-700 dark:text-white">Home</span>
                </Link>
              </div>
              {/* Profile card */}
              <div>
                <ProfileCard />
              </div>
            </div>

            {/* Content side */}
            <div className="col-span-2 flex flex-col gap-8 h-screen">
              {/* Links*/}
              <div className="flex justify-end gap-2">
                <Link
                  className="link-hover flex w-max gap-2 rounded-full px-3 py-1"
                  href={"/"}
                >
                  <span className="text-xl text-muted-foreground">Discussions</span>
                </Link>
                <Link
                  className="link-hover flex w-max gap-2 rounded-full px-3 py-1"
                  href={"/"}
                >
                  <span className="text-xl text-muted-foreground">Search</span>
                </Link>
                <ModeToggler/>
              </div>
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
