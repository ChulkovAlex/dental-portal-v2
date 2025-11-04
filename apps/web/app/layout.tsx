import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className="min-h-screen text-slate-900 dark:text-[var(--text)] bg-[var(--surface)]">
        <div className="max-w-screen-2xl mx-auto p-4">
          <header className="flex items-center justify-between py-3">
            <h1 className="text-2xl font-semibold">Dental Portal</h1>
            <button
              onClick={() => document.documentElement.classList.toggle('dark')}
              className="px-3 py-1 rounded-xl border"
            >Тема</button>
          </header>
          <nav className="flex gap-3 text-sm">
            <a href="/" className="hover:underline">Главная</a>
            <a href="/assistant" className="hover:underline">АИ-ассистент</a>
            <a href="/schedule" className="hover:underline">Расписание</a>
            <a href="/live" className="hover:underline">Текущий приём</a>
            <a href="/confirm" className="hover:underline">Подтверждение</a>
            <a href="/settings" className="hover:underline">Настройки</a>
          </nav>
          <main className="mt-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
