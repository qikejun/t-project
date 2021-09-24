/*
 * @Descripttion:
 * @Author: pengpeng
 * @Date: 2021-04-01 15:57:18
 * @LastEditors: pengpeng
 * @LastEditTime: 2021-04-01 16:35:52
 */
const relu1 = {
  'no-cond-assign': 2,
  'no-console': [
    'error', {
      'allow': ['log', 'warn', 'error', 'info']
    }
  ],
  // 禁止 function 定义中出现重名参数
  'no-dupe-args': 2,
  // 禁止对象字面量中出现重复的 key
  'no-dupe-keys': 2,
  // 禁止重复的 case 标签
  'no-duplicate-case': 2,
  // 禁止空语句块
  'no-empty': 2,
  // 禁止对 catch 子句的参数重新赋值
  'no-ex-assign': 2,
  // 禁止不必要的布尔转换
  'no-extra-boolean-cast': 2,
  // 禁止不必要的括号 //(a * b) + c;//报错
  'no-extra-parens': 0,

  // 强制所有控制语句使用一致的括号风格
  'curly': [2, 'all'],
  // 禁止 catch 子句的参数与外层作用域中的变量同名
  'no-catch-shadow': 0,
  // 不允许标签与变量同名
  'no-label-var': 2,
  // 禁用特定的全局变量
  'no-restricted-globals': 2,
  // 禁止 var 声明 与外层作用域的变量同名
  'no-shadow': 0,
  // 禁止覆盖受限制的标识符
  'no-shadow-restricted-names': 2,
  // 禁止将变量初始化为 undefined
  'no-undef-init': 2,
  // 禁止将 undefined 作为标识符
  'no-undefined': 0,
  // 不允许在变量定义之前使用它们
  'no-use-before-define': 0,
  //
  // 风格指南 //
  //
  // 指定数组的元素之间要以空格隔开(, 后面)， never参数：[ 之前和 ] 之后不能带空格，always参数：[ 之前和 ] 之后必须带空格
  'array-bracket-spacing': [2, 'never'],
  // 禁止或强制在单行代码块中使用空格(禁用)
  'block-spacing': [1, 'never'],
  // 强制使用一致的缩进 第二个参数为 "tab" 时，会使用tab，
  // if while function 后面的{必须与if在同一行，java风格。
  'brace-style': [2, '1tbs', {
    'allowSingleLine': true
  }],
  // 控制逗号前后的空格
  'comma-spacing': [2, {
    'before': false,
    'after': true
  }],
  // 控制逗号在行尾出现还是在行首出现 (默认行尾)
  // http://eslint.org/docs/rules/comma-style
  'comma-style': [2, 'last'],
  // "SwitchCase" (默认：0) 强制 switch 语句中的 case 子句的缩进水平
  // 以方括号取对象属性时，[ 后面和 ] 前面是否需要空格, 可选参数 never, always
  'computed-property-spacing': [2, 'never'],
  // 用于指统一在回调函数中指向this的变量名，箭头函数中的this已经可以指向外层调用者，应该没卵用了
  // e.g [0,"self"] 指定只能 var that = this. self不能指向其他任何值，this也不能赋值给self以外的其他值
  'consistent-this': [2, 'self', 'that', '_self', '_that', 'me', '_this'],
  // 强制使用命名的 function 表达式
  'func-names': 0,
  // 文件末尾强制换行
  'eol-last': 2,
  'indent': [
    'error', 2
  ],
  // 要求或禁止在函数标识符和其调用之间有空格
  'func-call-spacing': 2,
  // 强制在对象字面量的属性中键和值之间使用一致的间距
  'key-spacing': [2, {
    'beforeColon': false,
    'afterColon': true
  }],
  // 要求在注释周围有空行 ( 要求在块级注释之前有一空行)
  'lines-around-comment': [2, {
    'beforeBlockComment': true
  }],
  'func-style': 0,
  // 强制回调函数最大嵌套深度 5层
  'max-nested-callbacks': [2, 5],
  // 禁止使用指定的标识符
  'id-blacklist': 0,
  // 强制标识符的最新和最大长度
  'id-length': 0,
  // 要求标识符匹配一个指定的正则表达式
  'id-match': 0,
  // 强制在 JSX 属性中一致地使用双引号或单引号
  'jsx-quotes': 0,
  // 强制在关键字前后使用一致的空格 (前后腰需要)
  'keyword-spacing': 2,
  // 强制一行的最大长度
  'max-len': [2, 200, { 'ignoreUrls': true }],
  // 强制最大行数
  'max-lines': 0,
  // 强制 function 定义中最多允许的参数数量
  'max-params': [1, 5],
  // 强制 function 块最多允许的的语句数量
  'max-statements': [1, 200],
  // 强制每一行中所允许的最大语句数量
  'max-statements-per-line': 0,
  // 要求构造函数首字母大写 （要求调用 new 操作符时有首字母大小的函数，允许调用首字母大写的函数时没有 new 操作符。）
  'new-cap': [2, {
    'newIsCap': true,
    'capIsNew': false
  }],
  // 要求调用无参构造函数时有圆括号
  'new-parens': 2,
  // 要求或禁止 var 声明语句后有一行空行
  'newline-after-var': 0,
  // 禁止使用 Array 构造函数
  'no-array-constructor': 2,
  // 禁用按位运算符
  'no-bitwise': 0,
  // 要求 return 语句之前有一空行
  'newline-before-return': 0,
  // 要求方法链中每个调用都有一个换行符
  'newline-per-chained-call': 1,
  // 禁用 continue 语句
  'no-continue': 0,
  // 禁止在代码行后使用内联注释
  'no-inline-comments': 0,
  // 禁止 if 作为唯一的语句出现在 else 语句中
  'no-lonely-if': 0,
  // 禁止混合使用不同的操作符
  'no-mixed-operators': 0,
  // 禁止空格和 tab 的混合缩进
  'no-mixed-spaces-and-tabs': [
    'error', 'smart-tabs'
  ],
  // 不允许多个空行
  'no-multiple-empty-lines': [2, {
    'max': 2
  }],
  // 不允许否定的表达式
  'no-negated-condition': 0,
  // 不允许使用嵌套的三元表达式
  'no-nested-ternary': 0,
  // 禁止使用 Object 的构造函数
  'no-new-object': 2,
  // 禁止使用一元操作符 ++ 和 --
  'no-plusplus': 0,
  // 禁止使用特定的语法
  'no-restricted-syntax': 0,
  // 禁止 function 标识符和括号之间出现空格
  'no-spaced-func': 2,
  // 不允许使用三元操作符
  'no-ternary': 0,
  // 禁用行尾空格
  'no-trailing-spaces': 2,
  // 禁止标识符中有悬空下划线_bar
  'no-underscore-dangle': 0,
  // 禁止可以在有更简单的可替代的表达式时使用三元操作符
  'no-unneeded-ternary': 2,
  // 禁止属性前有空白
  'no-whitespace-before-property': 2,
  // 要求或禁止在 var 声明周围换行
  'one-var-declaration-per-line': 0,
  // 要求或禁止在可能的情况下要求使用简化的赋值操作符
  'operator-assignment': 0,
  // 强制操作符使用一致的换行符
  'operator-linebreak': [2, 'after', {
    'overrides': {
      '?': 'before',
      ':': 'before'
    }
  }],
  // 要求或禁止块内填充
  'padded-blocks': 0,
  // 要求对象字面量属性名称用引号括起来
  'quote-props': 0,
  // 强制使用一致的反勾号、双引号或单引号
  'quotes': [2, 'single', 'avoid-escape'],
  // 要求使用 JSDoc 注释
  'require-jsdoc': 0,
  // 要求或禁止使用分号而不是 ASI（这个才是控制行尾部分号的，）
  // "semi": [2, "always"],
  // 强制分号之前和之后使用一致的空格
  'semi-spacing': 2,
  // 要求同一个声明块中的变量按顺序排列
  'sort-vars': 0,
  // 强制在块之前使用一致的空格
  'space-before-blocks': [2, 'always'],
  // 强制在 function的左括号之前使用一致的空格
  'space-before-function-paren': [2, 'always'],
  // 强制在圆括号内使用一致的空格
  'space-in-parens': [2, 'never'],
  // 要求操作符周围有空格
  'space-infix-ops': 2,
  // 强制在一元操作符前后使用一致的空格
  'space-unary-ops': [2, {
    'words': true,
    'nonwords': false
  }],
  // 强制在注释中 // 或 /* 使用一致的空格
  'spaced-comment': [2, 'always', {
    'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!']
  }],
  // 要求或禁止 Unicode BOM
  'unicode-bom': 2,
  // 要求正则表达式被括号括起来
  'wrap-regex': 0,
  // 禁止词法声明 (let、const、function 和 class) 出现在 case或default 子句中
  'no-case-declarations': ['warn'],

  //
  // ES6.相关 //
  //
  // 要求箭头函数体使用大括号
  'arrow-body-style': 2,
  // 要求箭头函数的参数使用圆括号
  'arrow-parens': 2,
  'arrow-spacing': [2, {
    'before': true,
    'after': true
  }],
  // 强制 generator 函数中 * 号周围使用一致的空格
  'generator-star-spacing': [2, {
    'before': true,
    'after': true
  }],
  // 禁止修改类声明的变量
  'no-class-assign': 2,
  // 不允许箭头功能，在那里他们可以混淆的比较
  'no-confusing-arrow': 0,
  // 禁止修改 const 声明的变量
  'no-const-assign': 2,
  // 禁止类成员中出现重复的名称
  'no-dupe-class-members': 2,
  // 每个模块只能使用一个import
  'no-duplicate-imports': 2,
  // 禁止 Symbolnew 操作符和 new 一起使用
  'no-new-symbol': 2,
  // 允许指定模块加载时的进口
  'no-restricted-imports': 0,
  // 禁止在构造函数中，在调用 super() 之前使用 this 或 super
  'no-this-before-super': 2,
  // 禁止不必要的计算性能键对象的文字
  'no-useless-computed-key': 0,
  // 要求使用 let 或 const 而不是 var
  'no-var': 1,
  // 要求或禁止对象字面量中方法和属性使用简写语法
  'object-shorthand': 0,
  // 要求使用箭头函数作为回调
  'prefer-arrow-callback': 0,
  // 要求使用 const 声明那些声明后不再被修改的变量
  'prefer-const': 0,
  // 要求在合适的地方使用 Reflect 方法
  'prefer-reflect': 0,
  // 要求使用扩展运算符而非 .apply()
  'prefer-spread': 0,
  // 要求使用模板字面量而非字符串连接
  'prefer-template': 0,
  // Suggest using the rest parameters instead of arguments
  'prefer-rest-params': 0,
  // 要求generator 函数内有 yield
  'require-yield': 2,
  // 要求或禁止模板字符串中的嵌入表达式周围空格的使用
  'template-curly-spacing': 1,
  // 强制在 yield* 表达式中 * 周围使用空格
  'yield-star-spacing': 2,

  // 强制使用一致的换行风格
  'linebreak-style': [2, 'unix'],
  // 在JSX中强制布尔属性符号
  'react/jsx-boolean-value': 2,
  // 在JSX中验证右括号位置
  // "react/jsx-closing-bracket-location": 1,
  // 在JSX属性和表达式中加强或禁止大括号内的空格。
  'react/jsx-curly-spacing': [2, {
    'when': 'never',
    'children': true
  }],
  // 在数组或迭代器中验证JSX具有key属性
  'react/jsx-key': 2,
  // 限制JSX中单行上的props的最大数量
  'react/jsx-max-props-per-line': [1, {
    'maximum': 5
  }],
  // 防止在JSX中重复的props
  'react/jsx-no-duplicate-props': 2,
  //  //防止使用未包装的JSX字符串
  // "react/jsx-no-literals": 0,
  // 在JSX中禁止未声明的变量
  'react/jsx-no-undef': 2,
  // 为用户定义的JSX组件强制使用PascalCase
  'react/jsx-pascal-case': 0,
  // 防止反应被错误地标记为未使用
  'react/jsx-uses-react': 2,
  // 防止在JSX中使用的变量被错误地标记为未使用
  'react/jsx-uses-vars': 2,
  // 防止在componentDidMount中使用setState
  'react/no-did-mount-set-state': 2,
  // 防止在componentDidUpdate中使用setState
  'react/no-did-update-set-state': 2,
  // 防止使用未知的DOM属性
  'react/no-unknown-property': 2,
  // 为React组件强制执行ES5或ES6类
  'react/prefer-es6-class': 2,
  // 防止在React组件定义中丢失props验证
  // "react/prop-types": 1,
  // 使用JSX时防止丢失React
  'react/react-in-jsx-scope': 2,
  // 防止没有children的组件的额外结束标签
  'react/self-closing-comp': 0,
  // 禁止不必要的bool转换
  // "no-extra-boolean-cast": 0,
  // 防止在数组中遍历中使用数组key做索引
  // "react/no-array-index-key": 0,
  // 不使用弃用的方法
  'react/no-deprecated': 2,
  // 在JSX属性中强制或禁止等号周围的空格
  'react/jsx-equals-spacing': 2,
  'react/jsx-filename-extension': [2, {
    'extensions': ['.js', '.jsx']
  }],
  // 禁止未使用的变量
  'no-unused-vars': 0
}
const relu2 = {
  'react/forbid-prop-types': 0, // 禁止在propTypes中使用 'any','array','object' 这三类含糊的类型定义，可以使用arrayOf/shape替代，https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
  'react/jsx-filename-extension': [0, { extensions: ['.jsx'] }], // 包含jsx语法的js文件，需要以.jsx后缀结尾，否者会给出警告，https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
  'react/no-deprecated': 0, // 禁止使用react被废弃的方法，https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
  // 'react/require-default-props': [1, { forbidDefaultForRequired: true }], // 需要定义非required Props的默认值，否则会给出警告，https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
  // 'react/prop-types': [2, { ignore: ['store', 'dispatch', 'history', 'location', 'params', 'route', 'routeParams', 'children'] }], // 忽略 redux 和 react-router相关的属性校验
  // https://a11yproject.com/，可访问性检查
  'jsx-a11y/click-events-have-key-events': 0, // 非button元素(element)监听onClick事件时，必须监听onKeyUp/onKeyDown/onKeyPress三个键盘事件中的一个，https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/click-events-have-key-events.md
  'jsx-a11y/no-static-element-interactions': 0, // 给非语义化的静态元素(static element)监听事件时，必须给出对应的role属性，https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
  // 'jsx-a11y/anchor-is-valid': 1, // 当a标签当button使用时，给出警告，https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md

  // 'import/no-named-as-default': 1, // 一个模块（js文件）没有定义export default时，会给出警告，https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
  'import/prefer-default-export': 0, // 一个模块（js文件）只有一个export时必须是export default, https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
  'no-console': 1, // 禁止使用console.log/console.warn/console.error，https://eslint.org/docs/rules/no-console
  'no-multi-assign': 0, // 禁止变量链式连续赋值（a=b=c=0），https://eslint.org/docs/rules/no-multi-assign
  'no-underscore-dangle': 1, // 变量名不能使用_开头
  'consistent-return': 0, // function的返回值类型必须一致，https://cn.eslint.org/docs/rules/consistent-return
  'arrow-body-style': ['error', 'as-needed'], // 箭头函数体只有一行时，不允许使用大括号， https://eslint.org/docs/rules/arrow-body-style
  'no-plusplus': [0, { allowForLoopAfterthoughts: true }], // 禁止使用'++'和'--'操作符，for循环除外，https://eslint.org/docs/rules/no-plusplus
  'array-callback-return': 0, // Array的method（如：reduce、map、sort等）对应的回调函数，必须有return语句，https://eslint.org/docs/rules/array-callback-return
  'no-param-reassign': 0, // 禁止对函数的输入参数赋值，https://eslint.org/docs/rules/no-param-reassign
  'no-restricted-globals': 2, // 禁用全局变量检查，https://eslint.org/docs/rules/no-restricted-globals
  'generator-star-spacing': ['error', 'before'], // generator函数的*号之前需要有空格
  'accessor-pairs': 2,
  'arrow-spacing': [
    2,
    {
      before: true,
      after: true
    }
  ],
  'block-spacing': [2, 'always'],
  'brace-style': [
    2,
    '1tbs',
    {
      allowSingleLine: true
    }
  ],
  camelcase: [
    0,
    {
      properties: 'always'
    }
  ],
  // 'comma-dangle': [2, 'never'],
  'comma-dangle': ['error', {
    'arrays': 'only-multiline',
    'objects': 'only-multiline',
    'imports': 'never',
    'exports': 'never',
    'functions': 'never'
  }],
  'comma-spacing': [
    2,
    {
      before: false,
      after: true
    }
  ],
  'comma-style': [2, 'last'],
  'constructor-super': 2,
  curly: [2, 'multi-line'],
  'dot-location': [2, 'property'],
  'eol-last': 2,
  eqeqeq: ['error', 'always', { null: 'ignore' }],
  'handle-callback-err': [2, '^(err|error)$'],
  indent: [
    2,
    2,
    {
      SwitchCase: 1
    }
  ],
  'jsx-quotes': [2, 'prefer-single'],
  'key-spacing': [
    2,
    {
      beforeColon: false,
      afterColon: true
    }
  ],
  'keyword-spacing': [
    2,
    {
      before: true,
      after: true
    }
  ],
  'new-cap': [
    2,
    {
      newIsCap: true,
      capIsNew: false
    }
  ],
  'new-parens': 2,
  'no-array-constructor': 2,
  'no-caller': 2,
  'no-class-assign': 2,
  'no-cond-assign': 2,
  'no-const-assign': 'off',
  'no-control-regex': 0,
  'no-delete-var': 2,
  'no-dupe-args': 2,
  'no-dupe-class-members': 2,
  'no-dupe-keys': 2,
  'no-duplicate-case': 2,
  'no-empty-character-class': 2,
  'no-empty-pattern': 2,
  'no-eval': 2,
  'no-ex-assign': 2,
  'no-extend-native': 2,
  'no-extra-bind': 2,
  'no-extra-boolean-cast': 2,
  'no-extra-parens': [2, 'functions'],
  'no-fallthrough': 2,
  'no-floating-decimal': 2,
  'no-func-assign': 2,
  'no-implied-eval': 2,
  'no-inner-declarations': [2, 'functions'],
  'no-invalid-regexp': 2,
  'no-irregular-whitespace': 2,
  'no-iterator': 2,
  'no-label-var': 2,
  'no-labels': [
    2,
    {
      allowLoop: false,
      allowSwitch: false
    }
  ],
  'no-lone-blocks': 2,
  'no-mixed-spaces-and-tabs': 2,
  'no-multi-spaces': 2,
  'no-multi-str': 2,
  'no-multiple-empty-lines': [
    2,
    {
      max: 1
    }
  ],
  'no-native-reassign': 2,
  'no-negated-in-lhs': 2,
  'no-new-object': 2,
  'no-new-require': 2,
  'no-new-symbol': 2,
  'no-new-wrappers': 2,
  'no-obj-calls': 2,
  'no-octal': 2,
  'no-octal-escape': 2,
  'no-path-concat': 2,
  'no-proto': 2,
  'no-redeclare': 2,
  'no-regex-spaces': 2,
  'no-return-assign': [2, 'except-parens'],
  'no-self-assign': 2,
  'no-self-compare': 2,
  'no-sequences': 2,
  'no-shadow-restricted-names': 2,
  'no-spaced-func': 2,
  'no-sparse-arrays': 2,
  'no-this-before-super': 2,
  'no-throw-literal': 2,
  'no-trailing-spaces': 2,
  'no-undef': 2,
  'no-undef-init': 2,
  'no-unexpected-multiline': 2,
  'no-unmodified-loop-condition': 2,
  'no-unneeded-ternary': 'off',
  'no-unreachable': 2,
  'no-unsafe-finally': 2,
  // 'no-unused-vars': [
  //   2,
  //   {
  //     vars: 'all',
  //     args: 'none'
  //   }
  // ],
  'no-useless-call': 2,
  'no-useless-computed-key': 2,
  'no-useless-constructor': 2,
  'no-useless-escape': 0,
  'no-whitespace-before-property': 2,
  'no-with': 2,
  'one-var': [
    2,
    {
      initialized: 'never'
    }
  ],
  'operator-linebreak': [
    2,
    'after',
    {
      overrides: {
        '?': 'before',
        ':': 'before'
      }
    }
  ],
  'padded-blocks': [2, 'never'],
  quotes: [
    2,
    'single',
    {
      avoidEscape: true,
      allowTemplateLiterals: true
    }
  ],
  semi: [2, 'never'],
  'semi-spacing': [
    2,
    {
      before: false,
      after: true
    }
  ],
  'space-before-blocks': [2, 'always'],
  'space-before-function-paren': [2, 'always'],
  'space-in-parens': [2, 'never'],
  'space-infix-ops': 2,
  'space-unary-ops': [
    2,
    {
      words: true,
      nonwords: false
    }
  ],
  'spaced-comment': [
    2,
    'always',
    {
      markers: [
        'global',
        'globals',
        'eslint',
        'eslint-disable',
        '*package',
        '!',
        ','
      ]
    }
  ],
  'template-curly-spacing': [2, 'never'],
  'use-isnan': 2,
  'valid-typeof': 2,
  'wrap-iife': [2, 'any'],
  'yield-star-spacing': [2, 'both'],
  yoda: [2, 'never'],
  'prefer-const': 2,
  'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
  'object-curly-spacing': [
    2,
    'always',
    {
      objectsInObjects: false
    }
  ],
  'array-bracket-spacing': [2, 'never']
  //

}
module.exports = {
  root: true,
  parser: 'babel-eslint',
  // parserOptions: {
  //   parser: 'babel-eslint',
  //   sourceType: 'module'
  // },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    // ...
    'plugin:react-hooks/recommended'
  ],
  rules: relu2
}
