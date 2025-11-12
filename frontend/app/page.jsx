import Link from "next/link"
export default function HomePage(){
  return (
    <section className="text-center py-16">
      <h1 className="text-4xl font-bold mb-3">Eagle Vision MERN</h1>
      <p className="text-slate-300 max-w-2xl mx-auto">Next.js App Router + TailwindCSS with an Express + MongoDB backend.</p>
      <div className="mt-6 flex items-center justify-center gap-4">
        <Link href="/dashboard" className="btn-primary">Go to Dashboard</Link>
        <Link href="/login" className="btn-outline">Login</Link>
      </div>
    </section>
  )
}
