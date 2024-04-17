export type BuildPaths = {
  entry: string
  build: string
  html: string
  output: string
}

export type BuildOptions = {
  mode: 'development' | 'production'
  paths: BuildPaths
  port: number
}
