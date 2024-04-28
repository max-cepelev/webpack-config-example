import { resolve } from 'node:path'
import { Configuration } from 'webpack'
import { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import { BuildPlatform, buildWebpack } from './config'

type Environments = {
  mode?: 'development' | 'production'
  port?: number
  analyzer?: boolean
  platform?: BuildPlatform
}

export default (env: Environments): Configuration & DevServerConfiguration => {
  const config: Configuration & DevServerConfiguration = buildWebpack({
    mode: env.mode,
    port: env.port,
    analyzer: env.analyzer,
    platform: env.platform,
    paths: {
      entry: resolve(__dirname, 'src', 'index.tsx'),
      build: resolve(__dirname, 'build'),
      html: resolve(__dirname, 'public'),
      output: resolve(__dirname, 'build'),
      src: resolve(__dirname, 'src'),
      public: resolve(__dirname, 'public'),
    },
  })
  return config
}
