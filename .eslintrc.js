module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': 0,
    'react/require-default-props': 0,
    'react/jsx-fragments': 0,
  },
};
