"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import api from "../../lib/api"

export default function NewPostPage(){
  const [title,setTitle]=useState("")
  const [content,setContent]=useState("")
  const [loading,setLoading]=useState(false)
  const router = useRouter()

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try{
      await api.post("/posts",{title,content})
      router.push("/dashboard")
    }finally{
      setLoading(false)
    }
  }

  return (
    <div className="mx-auto max-w-2xl card p-6">
      <h2 className="text-2xl font-semibold mb-4">New Post</h2>
      <form onSubmit={submit} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Title</label>
          <input className="w-full rounded-lg bg-slate-800/60 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
                 value={title} onChange={e=>setTitle(e.target.value)} required />
        </div>
        <div>
          <label className="block text-sm mb-1">Content</label>
          <textarea rows={6} className="w-full rounded-lg bg-slate-800/60 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
                    value={content} onChange={e=>setContent(e.target.value)} />
        </div>
        <button className="btn-primary w-full" disabled={loading}>{loading ? "Saving…" : "Create"}</button>
      </form>
    </div>
  )
}
