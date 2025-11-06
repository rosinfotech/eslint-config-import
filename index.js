import { importX } from 'eslint-plugin-import-x';

export default {
    plugins: {
        'import-x': importX,
    },

    disabledRules: {
        'import-x/no-cycle': 'off',
    },

    rules: {
        'import-x/first': 'error',
        'import-x/newline-after-import': ['error', { count: 2 }],
        'import-x/no-duplicates': 'error',
        'import-x/no-empty-named-blocks': 'error',
        'import-x/no-unassigned-import': ['error', { allow: ['**/*.css', '**/*.scss'] }],
        'import-x/no-unused-modules': 'error',
        'import-x/no-useless-path-segments': 'error',
        'import-x/order': [
            'error',
            {
                alphabetize: {
                    caseInsensitive: true,
                    order: 'asc',
                },
                groups: ['type', 'builtin', 'external', 'internal', 'index', 'parent', 'sibling'],
                named: true,
                pathGroups: [
                    {
                        group: 'internal',
                        pattern: '@/**',
                    },
                ],
                sortTypesGroup: true,
            },
        ],
    },

    settings: {},
};
