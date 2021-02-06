const path = require('path');
const { generateTheme } = require('antd-theme-generator');

const options = {
  antDir: path.join(__dirname, './node_modules/ant-design-vue'), //对应具体位置
  stylesDir: path.join(__dirname, './src/styles'),    // 自己写的样式目录
  varFile: path.join(__dirname, './src/styles/variables.less'), // 自定义样式入口文件
  mainLessFile: path.join(__dirname, './src/styles/index.less'), //自定义样式入口文件
  outputFilePath: path.join(__dirname, './public/color.less'), //输出less文件路径
  themeVariables: [
    '@primary-color',
    '@secondary-color',
    '@text-color',
    '@text-color-secondary',
    '@heading-color',
    '@layout-body-background',
    '@btn-primary-bg',
    '@layout-header-background'
  ], // 需要改写的antd主题变量
  // indexFileName: 'index.html',

}

generateTheme(options).then(less => {
  console.log('Theme generated successfully');
})
  .catch(error => {
    console.log('Error', error);
  })