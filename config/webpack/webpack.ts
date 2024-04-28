import { Configuration } from 'webpack'
import { buildLoaders } from './loaders'
import { buildPlugins } from './plugins'
import { buildDevServer } from './devServer'
import { buildResolvers } from './resolvers'
import { BuildOptions } from './types'

export function buildWebpack(options: BuildOptions): Configuration {
  const isDev = options.mode === 'development'
  return {
    mode: options.mode ?? 'development',
    entry: options.paths.entry,
    devtool: isDev && 'inline-source-map',
    output: {
      clean: true,
      path: options.paths.output,
      filename: '[name]_[contenthash].js',
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devServer: buildDevServer(options),
  }
}
