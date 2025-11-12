import Link from "next/link"

export const dynamic = "force-dynamic"
export const revalidate = 0

export default async function DashboardPage(){
  const base = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8080/api"
  const res = await fetch(`${base}/posts`, { cache: "no-store" })
  const posts = await res.json()

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-semibold">Dashboard</h3>
        <Link href="/new-post" className="btn-primary">+ New Post</Link>
      </div>

      {!posts.length && <p className="text-slate-300">No posts yet. Create your first post.</p>}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-2">
        {posts.map((p)=> (
          <article key={p._id || p.id} className="card p-5 flex flex-col">
            <h4 className="text-lg font-semibold">{p.title}</h4>
            <p className="text-slate-300 mt-2 flex-1">{(p.content||"").slice(0,140)}{(p.content||"").length>140?"…":""}</p>
            <div className="mt-4 flex items-center justify-between">
              <Link href={`/edit/${p._id || p.id}`} className="btn-outline text-sm px-4 py-2">Edit</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
