module.exports = {
    "rules": {
        "import/default": 0,
        "import/dynamic-import-chunkname": 0,
        "import/export": 2,
        "import/exports-last": 0,
        "import/extensions": 0,
        "import/first": 2,
        "import/group-exports": 0,
        "import/max-dependencies": 0,
        "import/named": 0,
        "import/namespace": 2,
        "import/newline-after-import": 2,
        "import/no-absolute-path": 2,
        "import/no-amd": 2,
        "import/no-anonymous-default-export": [
            1,
            {
                "allowAnonymousClass": false,
                "allowAnonymousFunction": false,
                "allowArray": false,
                "allowArrowFunction": false,
                "allowCallExpression": true,
                "allowLiteral": false,
                "allowObject": false
            }
        ],
        "import/no-commonjs": [
            1,
            {
                "allowRequire": true
            }
        ],
        "import/no-cycle": 2,
        "import/no-default-export": 0,
        "import/no-deprecated": 2,
        "import/no-duplicates": 2,
        "import/no-dynamic-require": 2,
        "import/no-extraneous-dependencies": [
            1,
            {
                "devDependencies": false,
                "optionalDependencies": false,
                "peerDependencies": false
            }
        ],
        "import/no-import-module-exports": 0,
        "import/no-internal-modules": 0,
        "import/no-mutable-exports": 2,
        "import/no-named-as-default": 0,
        "import/no-named-as-default-member": 2,
        "import/no-named-default": 0,
        "import/no-named-export": 0,
        "import/no-nodejs-modules": 0,
        "import/no-relative-packages": 0,
        "import/no-relative-parent-imports": 0,
        "import/no-restricted-paths": 0,
        "import/no-self-import": 2,
        "import/no-unassigned-import": 0,
        "import/no-unresolved": 0,
        "import/no-unused-modules": 2,
        "import/no-useless-path-segments": 2,
        "import/no-webpack-loader-syntax": 2,
        "import/order": [
            2,
            {
                "alphabetize": {
                    "order": "asc"
                },
                "groups": [
                    "builtin",
                    "external",
                    "internal",
                    "parent",
                    "sibling",
                    "index",
                    "object",
                    "type"
                ],
                "newlines-between": "never",
                "pathGroups": [
                    {
                        "group": "external",
                        "pattern": "@**",
                        "position": "after"
                    }
                ],
                "pathGroupsExcludedImportTypes": [
                    "builtin",
                    "external",
                    "object"
                ]
            }
        ],
        "import/prefer-default-export": 0,
        "import/unambiguous": 2,
        "sort-imports": [
            1,
            {
                "allowSeparatedGroups": false,
                "ignoreCase": false,
                "ignoreDeclarationSort": true,
                "ignoreMemberSort": false,
                "memberSyntaxSortOrder": [
                    "none",
                    "all",
                    "multiple",
                    "single"
                ]
            }
        ]
    }
};
