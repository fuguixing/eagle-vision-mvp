import "./globals.css"
import Navbar from "../components/Navbar"

export const metadata = {
  title: "Eagle Vision MVP",
  description: "Next.js App Router + Tailwind + Express + MongoDB",
}

export default function RootLayout({ children }){
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main className="mx-auto max-w-6xl px-4 py-6">{children}</main>
      </body>
    </html>
  )
}
