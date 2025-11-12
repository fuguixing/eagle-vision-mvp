"use client"
import { useEffect, useState } from "react"
import { useRouter, useParams } from "next/navigation"
import api from "../../../lib/api"

export default function EditPostPage(){
  const router = useRouter()
  const params = useParams()
  const id = params?.id as string

  const [title,setTitle]=useState("")
  const [content,setContent]=useState("")
  const [loading,setLoading]=useState(true)

  useEffect(()=>{
    if(!id) return
    (async()=>{
      try{
        const res = await api.get(`/posts/${id}`)
        setTitle(res.data.title || "")
        setContent(res.data.content || "")
      }finally{
        setLoading(false)
      }
    })()
  },[id])

  const submit = async (e:React.FormEvent) => {
    e.preventDefault()
    await api.put(`/posts/${id}`,{title,content})
    router.push("/dashboard")
  }

  if(loading) return <div className="text-center py-24">Loading…</div>

  return (
    <div className="mx-auto max-w-2xl card p-6">
      <h2 className="text-2xl font-semibold mb-4">Edit Post</h2>
      <form onSubmit={submit} className="space-y-4">
        <div>
          <label className="block text.sm mb-1">Title</label>
          <input className="w-full rounded-lg bg-slate-800/60 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
                 value={title} onChange={e=>setTitle(e.target.value)} required />
        </div>
        <div>
          <label className="block text-sm mb-1">Content</label>
          <textarea rows={6} className="w-full rounded-lg bg-slate-800/60 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
                    value={content} onChange={e=>setContent(e.target.value)} />
        </div>
        <button className="btn-primary w-full">Save</button>
      </form>
    </div>
  )
}
