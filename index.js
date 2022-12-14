const fs = require('fs')
const path = require('path')

module.exports = async function(prompts) {
  const lib = await prompts({
    name: 'value',
    initial: true,
    type: 'confirm',
    message: 'Create a library project?',
  })

  if (lib.value) {
    return {
      ts: true,
      lib: true,
      test: true,
      dirs: ['src'],
      framework: 'vanilla',
      files: [
        ['src/index.ts', fs.readFileSync(resolve('files/lib/src/index.ts'))],
        ['test/hello.test.ts', fs.readFileSync(resolve('files/lib/test/hello.test.ts'))]
      ],
      lint: ['stylelint', 'eslint', 'commitlint']
    }
  } else {
    return {
      dirs: ['src'],
      framework: 'vanilla',
      files: [
        ['src/index.ejs', fs.readFileSync(resolve('files/business/index.ejs'))],
        ['src/assets/js/index.js', fs.readFileSync(resolve('files/business/assets/js/index.js'))],
        ['src/assets/css/base.css', fs.readFileSync(resolve('files/business/assets/css/base.css'))],
        ['src/assets/css/index.scss', fs.readFileSync(resolve('files/business/assets/css/index.scss'))]
      ],
      lint: ['stylelint', 'eslint', 'commitlint']
    }
  }
}

function resolve(filePath) {
  return path.join(__dirname, filePath)
}
