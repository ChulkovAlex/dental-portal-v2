export default function SettingsPage(){
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">Настройки</h2>
      <div className="grid md:grid-cols-2 gap-3">
        <div className="rounded-2xl border p-3 bg-white/70 dark:bg-[#0F1B2E]">
          <h3 className="font-semibold">Общие</h3>
          <p className="text-sm opacity-80">Название, тема, таймзона…</p>
        </div>
        <div className="rounded-2xl border p-3 bg-white/70 dark:bg-[#0F1B2E]">
          <h3 className="font-semibold">iDent Sync</h3>
          <p className="text-sm opacity-80">Параметры подключения, журналы обмена…</p>
        </div>
      </div>
    </section>
  )
}
