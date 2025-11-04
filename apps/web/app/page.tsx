export default function Page(){
  return (
    <section className="grid gap-4 md:grid-cols-2">
      <div className="p-4 rounded-2xl border bg-white/70 dark:bg-[#0F1B2E]">
        <h3 className="text-lg font-semibold">Сегодня в работе</h3>
        <p className="text-sm opacity-80">Заглушка: 12 визитов</p>
      </div>
      <div className="p-4 rounded-2xl border bg-white/70 dark:bg-[#0F1B2E]">
        <h3 className="text-lg font-semibold">Ожидают подтверждения</h3>
        <p className="text-sm opacity-80">Заглушка: 3 врача</p>
      </div>
    </section>
  )
}
