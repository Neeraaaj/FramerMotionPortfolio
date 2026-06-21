const NavBar = () => {
  return (
    <header className="flex justify-center px-6 pt-6">
      <div className="flex items-center gap-3 rounded-full border border-white/50 bg-white/40 px-4 py-2 backdrop-blur-sm">
        <img src="/me3d.png" alt="" className="h-8 w-8 rounded-full object-cover" />
        <span className="text-sm font-bold uppercase tracking-widest text-slate-900">Neeraj</span>
        <span className="px-2 text-slate-700">•••</span>
      </div>
    </header>
  )
}

export default NavBar
