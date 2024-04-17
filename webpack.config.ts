import { resolve } from 'node:path'
import { Configuration } from 'webpack'
import { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import { buildWebpack } from './config/build'

type Environments = {
  mode?: 'development' | 'production'
  port?: number
}

export default (env: Environments): Configuration & DevServerConfiguration => {
  const config: Configuration & DevServerConfiguration = buildWebpack({
    mode: env.mode,
    port: env.port,
    paths: {
      entry: resolve(__dirname, 'src', 'index.tsx'),
      build: resolve(__dirname, 'build'),
      html: resolve(__dirname, 'public'),
      output: resolve(__dirname, 'build'),
    },
  })
  return config
}
