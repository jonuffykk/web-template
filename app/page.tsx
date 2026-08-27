export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-zinc-950 p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-blue-900/20 via-zinc-950/0 to-zinc-950/0" />

      <div className="relative z-10 flex max-w-3xl flex-col items-center text-center">
        <div className="mb-6 inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-sm text-zinc-400 backdrop-blur-sm">
          <span className="mr-2 flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
          Atualizado: Next.js 16 Ready
        </div>

        <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-7xl">
          Crie experiências <br />
          <span className="bg-linear-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            digitais incríveis.
          </span>
        </h1>

        <p className="mb-10 max-w-xl text-lg text-zinc-400 sm:text-xl">
          Um template Next.js moderno, performático e pronto para escalar.
          Design minimalista focado na conversão e experiência do usuário.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="https://github.com/jonuffykk/Template"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-8 py-3 font-medium text-zinc-950 transition hover:bg-zinc-200"
          >
            Começar Agora
          </a>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-800 bg-zinc-900/50 px-8 py-3 font-medium text-white transition hover:bg-zinc-800 backdrop-blur-sm"
          >
            Ver Documentação
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-zinc-800 to-transparent" />
    </main>
  )
}
