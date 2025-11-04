export default function QuestionnairePage({ params }: { params: { token: string } }){
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">Анкета пациента</h2>
      <p className="text-sm opacity-80">Токен: {params.token}</p>
      <form className="grid gap-2 max-w-md">
        <input className="border rounded px-3 py-2" placeholder="Фамилия"/>
        <input className="border rounded px-3 py-2" placeholder="Имя"/>
        <input className="border rounded px-3 py-2" placeholder="Телефон"/>
        <button className="mt-2 px-4 py-2 rounded bg-primary font-medium">Отправить</button>
      </form>
    </section>
  )
}
