# web-template

Base em Next.js 16, React 19, TypeScript, Tailwind CSS 4 e ESLint para começar sites novos. Pequena de propósito.

## Começar

Use Node.js 22 ou mais recente.

```bash
npm install
npm run dev
```

## Comandos

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm start` | Serve o build |
| `npm run lint` | Regras do Next.js e do TypeScript |
| `npm run typecheck` | Verificação de tipos |
| `npm run check` | Lint, tipos e build |

## O que ajustar

- `app/layout.tsx`: título, descrição e idioma.
- `app/globals.css`: cores em `@theme`, com versão clara e escura.
- `app/page.tsx`: conteúdo da página inicial.
- `next.config.ts`: cabeçalhos e domínios de imagem, conforme o site.

As escolhas estão explicadas no [artigo sobre o template](https://andersonalves.site/blog/web-template-base-nextjs).

## Licença

[MIT](LICENSE)
