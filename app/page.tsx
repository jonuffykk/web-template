const files = [
  { path: 'app/layout.tsx', use: 'Título, descrição, idioma e fonte' },
  { path: 'app/globals.css', use: 'Cores nos temas claro e escuro' },
  { path: 'app/page.tsx', use: 'Conteúdo desta página' },
  { path: 'next.config.ts', use: 'Cabeçalhos e domínios de imagem' },
]

export default function Home() {
  return (
    <main className="mx-auto grid min-h-dvh max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-20">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl">
          Template Next.js com TypeScript e Tailwind
        </h1>
        <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">
          Next.js 16, React 19, Tailwind CSS 4 e ESLint, com fonte servida pelo próprio domínio e
          temas claro e escuro.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://github.com/jonuffykk/web-template"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-primary px-6 py-3 font-medium text-on-primary transition-transform duration-150 active:scale-[0.97]"
          >
            Copiar o template
          </a>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-border bg-surface px-6 py-3 font-medium transition-transform duration-150 active:scale-[0.97]"
          >
            Ler a documentação
          </a>
        </div>
      </div>

      <section
        aria-labelledby="arquivos"
        className="rounded-xl border border-border bg-surface p-6 sm:p-8"
      >
        <h2 id="arquivos" className="text-xl font-semibold">
          Arquivos para editar
        </h2>
        <dl className="mt-4 divide-y divide-border">
          {files.map((file) => (
            <div key={file.path} className="py-4">
              <dt>
                <code>{file.path}</code>
              </dt>
              <dd className="mt-1 text-muted">{file.use}</dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  )
}
