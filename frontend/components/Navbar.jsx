"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar(){
  const pathname = usePathname()
  const isActive = (p)=> pathname === p
  return (
    <header className="sticky top-0 z-40 bg-gradient-to-r from-brand to-brand2 shadow-lg">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-white font-semibold text-lg tracking-wide flex items-center gap-2">
          <span className="text-xl">🦅</span> Eagle Vision
        </Link>
        <div className="flex items-center gap-3">
          <Link href="/dashboard" className={`px-3 py-2 rounded-lg text-sm ${isActive('/dashboard') ? 'bg-white/20 text-white' : 'text-white/90 hover:bg-white/10'}`}>Dashboard</Link>
          <Link href="/new-post" className="btn-primary">+ New Post</Link>
          <Link href="/login" className={`px-3 py-2 rounded-lg text-sm ${isActive('/login') ? 'bg-white/20 text-white' : 'text-white/90 hover:bg-white/10'}`}>Login</Link>
        </div>
      </nav>
    </header>
  )
}
