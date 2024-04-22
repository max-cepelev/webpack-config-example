export type BuildPaths = {
  entry: string
  build: string
  html: string
  output: string
  src: string
}

export type BuildOptions = {
  mode: 'development' | 'production'
  paths: BuildPaths
  port: number
  analyzer?: boolean
}
