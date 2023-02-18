/*
 * @Author: Zhou Yi
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: Zhou Yi
 * @LastEditTime: 2021-08-11 20:28:31
 */
module.exports = {
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-prettier"
  ],
  "rules": {
    "color-no-invalid-hex": true,
    "font-family-no-missing-generic-family-keyword": true,
    "font-family-no-duplicate-names": true,
    "function-calc-no-invalid": true,
    "property-no-unknown": true,
    "unit-no-unknown": true,
    "selector-pseudo-class-no-unknown": [true, {
      "ignorePseudoClasses": ["global"]
    }],
    "selector-pseudo-element-no-unknown": true,
    "selector-type-no-unknown": true,
    "at-rule-no-unknown": true,
    "comment-no-empty": true,
    "no-invalid-double-slash-comments": true,
    "string-no-newline": true,
    "no-duplicate-selectors": true,
    "comment-whitespace-inside": null,
    "declaration-colon-space-after": "always",
    "declaration-block-no-duplicate-properties": true,
    "function-linear-gradient-no-nonstandard-direction": true,
    "keyframe-declaration-no-important": null,
    "media-feature-name-no-unknown": true,
    "block-no-empty": null,
    "no-empty-source": true,
    "indentation": 2,
    "max-empty-lines": 2,
    "max-line-length": 100,
    "max-nesting-depth": null,
    "no-descending-specificity": null,
    "block-opening-brace-newline-after": null,
    "block-opening-brace-newline-before": null,
    "declaration-block-semicolon-newline-after": null,
    "declaration-block-semicolon-newline-before": null,
    "function-allowed-list": null,
    "function-url-scheme-allowed-list": null,
    "unit-allowed-list": null,
    "property-allowed-list": null,
    "selector-attribute-operator-allowed-list": null,
    "media-feature-name-allowed-list": null,
    "at-rule-allowed-list": null,

    "at-rule-empty-line-before": null,
    "at-rule-name-space-after": null,
    "comment-empty-line-before": null,
    "declaration-empty-line-before": null,
    "function-comma-newline-after": null,
    "function-parentheses-newline-inside": null,
    "number-leading-zero": null,
    "selector-list-comma-newline-after": null,
    "selector-pseudo-element-colon-notation": null,
    "unit-case": null,

    "at-rule-name-case": null,
    "function-calc-no-invalid": null,
    "selector-pseudo-class-no-unknown": null
  }
}
