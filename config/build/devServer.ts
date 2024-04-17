import { resolve } from 'node:path'
import { BuildOptions } from './types'

export function buildDevServer(options: BuildOptions) {
  return {
    static: resolve(__dirname, 'public'),
    hot: true,
    port: options.port ?? 3000,
    open: true,
  }
}
