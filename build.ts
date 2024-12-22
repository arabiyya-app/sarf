import type { BuildConfig } from 'bun'
import dts from 'bun-plugin-dts'

const outdir = './dist'

const buildConfig: BuildConfig = {
  entrypoints: ['./index.ts', './types.ts', './constants.ts'],
  outdir,
  minify: true,
  sourcemap: 'linked',
  plugins: [dts()],
}

const bundleEsm = async () => {
  console.time('ESM build')
  await Bun.build({ ...buildConfig, format: 'esm', naming: '[dir]/[name].js' })
  console.timeLog('ESM build')
}

const bundleCjs = async () => {
  console.time('CJS build')
  await Bun.build({ ...buildConfig, format: 'cjs', naming: '[dir]/[name].cjs' })
  console.timeLog('CJS build')
}

const exportJson = async () => {
  console.time('JSON export')

  const { sarf, sarfHelpers } = await import('./index')

  // Export sarf as-is
  await Bun.write(`${outdir}/sarf.json`, JSON.stringify(sarf))

  // Utility for type-safe Object.entries()
  const entries = <T extends object>(obj: T): [keyof T, T[keyof T]][] => {
    return Object.entries(obj) as [keyof T, T[keyof T]][]
  }

  // Replace chapters with their replaced roots
  for (const [verbType, chapters] of entries(sarf)) {
    for (const [chapterKey, chapter] of entries(chapters)) {
      if (chapter) {
        sarf[verbType][chapterKey] = sarfHelpers.replaceRoots(chapter)
      }
    }
  }

  // Export a copy of sarf with replaced roots
  await Bun.write(`${outdir}/sarf-archetypes.json`, JSON.stringify(sarf))

  console.timeLog('JSON export')
}

await Promise.all([bundleEsm(), bundleCjs(), exportJson()])

console.log('Build complete!')
