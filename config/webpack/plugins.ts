import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import { resolve } from 'node:path'
import { Configuration, DefinePlugin } from 'webpack'
import { BuildOptions } from './types'
import { platform } from 'node:process'

export function buildPlugins(options: BuildOptions) {
  const isProd = options.mode === 'production'
  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({
      template: resolve(options.paths.html, 'index.html'),
    }),
    new DefinePlugin({
      __PLATFORM__: JSON.stringify(options.platform),
    }),
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
  return plugins
}
