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

  // Helper to convert a Map to an object
  // This is needed because you can't JSON.stringify a Map
  const mapToObject = (map: Map<string, unknown>): object => {
    const obj: Record<string, unknown> = {}
    for (const [key, value] of map) {
      obj[key] = value instanceof Map ? mapToObject(value) : value
    }
    return obj
  }

  // Export sarf as-is
  await Bun.write(`${outdir}/sarf.json`, JSON.stringify(mapToObject(sarf)))

  // Replace chapters with their replaced roots
  for (const chapters of sarf.values()) {
    for (const [chapterKey, chapter] of chapters.entries()) {
      if (chapter) {
        chapters.set(chapterKey, sarfHelpers.replaceRoots(chapter))
      }
    }
  }

  // Export a copy of sarf with replaced roots
  await Bun.write(
    `${outdir}/sarf-archetypes.json`,
    JSON.stringify(mapToObject(sarf)),
  )

  console.timeLog('JSON export')
}

await Promise.all([bundleEsm(), bundleCjs(), exportJson()])

console.log('Build complete!')
