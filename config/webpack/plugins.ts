import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'

import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import { resolve } from 'node:path'
import { Configuration, DefinePlugin } from 'webpack'
import { BuildOptions } from './types'

export function buildPlugins(options: BuildOptions) {
  const isProd = options.mode === 'production'
  const isDev = options.mode === 'development'
  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({
      template: resolve(options.paths.html, 'index.html'),
    }),
    new DefinePlugin({
      __PLATFORM__: JSON.stringify(options.platform),
    }),
    // Выносит проверку типов в отдельный процесс не нагружая сборку
    new ForkTsCheckerWebpackPlugin(),
  ]

  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: 'css/[name]_[contenthash].css',
        chunkFilename: 'css/[name]_[contenthash].css',
      })
    )
    if (options.analyzer) {
      plugins.push(new BundleAnalyzerPlugin())
    }
  }

  if (isDev) {
    plugins.push(new ReactRefreshWebpackPlugin())
  }
  return plugins
}
