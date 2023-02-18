module.exports = {
  printWidth: 100, // 折行字数
  tabWidth: 2, // 缩进空格数
  useTabs: false, // 缩进不使用 tab，使用空格
  semi: true, // 加分号
  singleQuote: true, // 使用单引号代替双引号
  quoteProps: 'as-needed', // 对象的 key 是否用引号括起来，需要时添加
  jsxSingleQuote: true, // 在 JSX 中使用单引号代替双引号
  trailingComma: 'all', // 在对象或数组最后一个元素后面是否加逗号
  bracketSpacing: true, // 是否在对象的 {} 内部两侧加空格
  jsxBracketSameLine: false, // 多行 JSX 末尾的 '>' 是否单独放一行
  arrowParens: 'avoid', // 箭头函数参数是否加圆括号

  proseWrap: 'never', // 当 Markdown 文本超过 printWidth 时，是否换行
  htmlWhitespaceSensitivity: 'css', // 为 HTML，Vue，Angular，和 Handlebars 指定空格灵敏度

  endOfLine: 'lf', // 行尾结束符，lf - 遵守 Linux 和 macOS 规范，crlf - Windows 规范
  
};
