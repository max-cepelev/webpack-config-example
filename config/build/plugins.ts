import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { resolve } from 'node:path'
import { Configuration } from 'webpack'
import { BuildOptions } from './types'

export function buildPlugins(options: BuildOptions) {
  const isProd = options.mode === 'production'
  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({
      template: resolve(options.paths.html, 'index.html'),
    }),
  ]

  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: 'css/[name]_[contenthash].css',
        chunkFilename: 'css/[name]_[contenthash].css',
      })
    )
  }
  return plugins
}
