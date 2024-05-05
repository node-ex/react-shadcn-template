'use strict';

module.exports = {
  extends: [
    'stylelint-config-recommended',
    /*
     * Prettier plugin is not needed
     * https://stylelint.io/migration-guide/to-15/#deprecated-stylistic-rules
     */
  ],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'layer', 'apply', 'config'],
      },
    ],
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: ['theme'],
      },
    ],
    'no-descending-specificity': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
  },
};
