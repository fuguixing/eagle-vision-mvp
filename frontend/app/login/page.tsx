"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import api from "../../lib/api"

export default function LoginPage(){
  const [email,setEmail]=useState("admin@eaglevision.local")
  const [password,setPassword]=useState("admin123")
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState("")
  const router = useRouter()

  const submit = async (e:React.FormEvent) => {
    e.preventDefault()
    setLoading(true); setError("")
    try{
      const res = await api.post("/auth/login",{email,password})
      if(res?.status===200){ router.push("/dashboard") }
    }catch(err:any){
      setError(err?.response?.data?.message || "Login failed")
    }finally{
      setLoading(false)
    }
  }

  return (
    <div className="mx-auto max-w-md card p-6">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form onSubmit={submit} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input className="w-full rounded-lg bg-slate-800/60 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
                 value={email} onChange={e=>setEmail(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm mb-1">Password</label>
          <input type="password" className="w-full rounded-lg bg-slate-800/60 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
                 value={password} onChange={e=>setPassword(e.target.value)} />
        </div>
        {error && <div className="text-sm text-red-300">{error}</div>}
        <button className="btn-primary w-full" disabled={loading}>{loading ? "Logging in…" : "Login"}</button>
        <p className="text-xs text-slate-400">Default admin is prefilled for demo.</p>
      </form>
    </div>
  )
}
