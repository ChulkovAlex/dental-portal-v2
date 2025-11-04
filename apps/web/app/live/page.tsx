export default function LivePage(){
  const Column = ({title}:{title:string}) => (
    <div className="rounded-2xl border p-3 bg-white/70 dark:bg-[#0F1B2E] min-h-[60vh]">
      <h3 className="font-semibold mb-2">{title}</h3>
      <div className="space-y-2">
        <div className="p-2 rounded-xl border">
          <div className="text-sm">09:00 — Иванова А.</div>
          <div className="text-xs opacity-70">Чистка • Ожидает</div>
        </div>
      </div>
    </div>
  )
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">Текущий приём</h2>
      <div className="grid md:grid-cols-3 gap-3">
        <Column title="Кабинет 1"/>
        <Column title="Кабинет 2"/>
        <Column title="Кабинет 3"/>
      </div>
    </section>
  )
}
