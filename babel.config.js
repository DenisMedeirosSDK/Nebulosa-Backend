module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@shared': './src/shared',
        '@modules': './src/modules',
        '@config': './src/config',
        '@errors': './src/errors',
        '@utils': './src/utils',
      }
    }],
    "babel-plugin-transform-typescript-metadata",
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }],
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
