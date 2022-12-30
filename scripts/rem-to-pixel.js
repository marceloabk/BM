const fs = require('node:fs').promises
const { join } = require('node:path')

const run = async () => {
  const path = join(__dirname, '../src/style-dictionary-dist/variables.js')

  const file = (await fs.readFile(path)).toString()

  const data = file.replace(/(\d)rem/g, '$1px') // $1 means insert first capture group
  await fs.writeFile(path, data)
}

run()
