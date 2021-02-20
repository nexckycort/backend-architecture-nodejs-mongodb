import colors from 'colors'

import expressLoader from 'loaders/express'
import mongoDBLoader from 'loaders/mongo'
import Logger from 'helpers/logger'
import { Loaders, PreLoaders } from 'interfaces/server.interfaces'

const loaders = async (): Promise<Loaders> => {
  Logger.info(colors.bold.italic.blue('Loading configuration... 💻'))

  const loaders: PreLoaders = {
    expressApp: undefined,
    mongoConnection: undefined
  }

  try {
    loaders.mongoConnection = await mongoDBLoader()
    await loaders.mongoConnection.command({ ping: 1 })
    Logger.info(colors.bold.green('MongoDB loaded and connected! ✌️'))
  } catch (error) {
    Logger.error(colors.red('error loading or connecting MongoDB'), error)
    throw error
  }

  try {
    loaders.expressApp = expressLoader()
    Logger.info(colors.bold.green('Express loaded ✌️'))
  } catch (error) {
    Logger.error(colors.red('error loading Express'), error)
    throw error
  }

  return loaders as Loaders
}

export default loaders
