import colors from 'colors'
import http from 'http'

import { name, port } from 'config'
import loaders from 'loaders'
import Logger from 'helpers/logger'

async function startServer(): Promise<void> {
  const { expressApp: app } = await loaders()

  app.set('port', port)

  const server = http.createServer(app)

  server
    .listen(port, () => {
      Logger.info(`${colors.yellow('########################################################')}
🛡️  ${colors.bold.green(`Server ${colors.blue(name)} listening on port:`)} ${colors.bold.blue(port)} 🛡️
${colors.yellow('########################################################')}`)
    })
    .on('error', (e) => Logger.error('error in server.listen ', e))
}

startServer().catch((error: Error) => Logger.error(colors.red('error when starting the api'), error))
