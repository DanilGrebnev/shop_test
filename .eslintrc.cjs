module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: [
        'react-refresh',
        'eslint-plugin-simple-import-sort',
        'simple-import-sort',
    ],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        '@typescript-eslint/no-unused-vars': 'warn',
        
        // Imports sort
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'sort-imports': [
            'error',
            {
                ignoreDeclarationSort: true,
            },
        ],

        '@typescript-eslint/no-unused-vars': 'warn',

        'react-hooks/exhaustive-deps': 'off',
    },
}
