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
      root: ['./src'],
      alias: {
        '@shared/': './src/shared',
        '@modules/': './src/modules',
        '@config/': './src/config',
        '@errors/': './src/errors',
        '@utils/': './src/utils',
      }
    }],
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
