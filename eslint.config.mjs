import eslintConfigNext from 'eslint-config-next'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier'

import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals'),
  {
    plugins: {
      'prettier-plugin': eslintPluginPrettier,
      'prettier-config': eslintConfigPrettier,
      'next-config': eslintConfigNext,
    },
  },
]

export default eslintConfig
