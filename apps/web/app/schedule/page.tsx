'use client'
import { useState } from 'react'

export default function SchedulePage(){
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState<string>('2025-11-04')
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">Расписание</h2>
      <div className="flex gap-2 items-center">
        <input type="date" value={date} onChange={e=>setDate(e.target.value)} className="border rounded px-2 py-1"/>
        <button onClick={()=>setOpen(true)} className="px-3 py-1 rounded bg-primary text-black font-medium">Показать день</button>
      </div>
      {open && (
        <div className="fixed left-0 right-0 bottom-0 h-[70vh] bg-white dark:bg-[#0F1B2E] border-t rounded-t-2xl p-4 shadow-2xl">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Список визитов — {date}</h3>
            <button className="text-sm opacity-70" onClick={()=>setOpen(false)}>Свернуть</button>
          </div>
          <div className="mt-3 overflow-auto max-h-[60vh]">
            <table className="w-full text-sm">
              <thead className="text-left opacity-70">
                <tr><th className="py-2">Время</th><th>Пациент</th><th>Доктор</th><th>Кабинет</th><th>Процедура</th><th>Статус</th></tr>
              </thead>
              <tbody>
                <tr className="border-t"><td className="py-2">09:00</td><td>Иванова А.</td><td>Иванов</td><td>Каб 1</td><td>Чистка</td><td>scheduled</td></tr>
                <tr className="border-t"><td className="py-2">10:00</td><td>Петров Б.</td><td>Петров</td><td>Каб 2</td><td>Консультация</td><td>confirmed</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  )
}
