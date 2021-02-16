import { Application } from 'express'
import { Db } from 'mongodb'

export interface PreLoaders {
  expressApp: Application | undefined
  mongoConnection: Db | undefined
}

export interface Loaders {
  expressApp: Application
  mongoConnection: Db
}
