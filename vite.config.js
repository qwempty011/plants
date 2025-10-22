import { defineConfig } from 'vite'
import vituum from 'vituum'
import twig from '@vituum/vite-plugin-twig'
import { resolve } from 'path'

export default defineConfig(({ command }) => {
  // Ловим любые необработанные ошибки Vite на уровне процесса
  process.on('uncaughtException', (err) => {
    console.error('\n\x1b[31m[Vite safe mode]\x1b[0m', err.message)
    console.error('(Server kept alive — fix your Twig/HTML error above)\n')
  })

  process.on('unhandledRejection', (err) => {
    console.error('\n\x1b[31m[Vite safe mode]\x1b[0m', err.message)
    console.error('(Promise rejection caught — process not exited)\n')
  })

  return {
    plugins: [
      vituum(),
      twig({
        root: './src',
        formats: ['html', 'twig', 'json.twig', 'json'],
        namespaces: {
          component: resolve(__dirname, './src/components'),
          layout: resolve(__dirname, './src/layouts'),
        },
      }),
    ],
  }
})
