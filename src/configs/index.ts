import path from 'path'
import { IConfig } from '../utils/interface'
import dotenv from 'dotenv'

dotenv.config({ path: path.resolve(__dirname, './database.env') })

const config: IConfig = {
  timezone: 'Asia/Seoul',
  logs: {
    dir: 'logs',
    keep: '14d',
  },
  models: {
    job: [ path.resolve(__dirname, '../models/Jobs') ],
    dao: [ path.resolve(__dirname, '../models/DAO/') ],
  },
  server: {
    port: 3000,
  },
  database: {
    type: 'postgres',
    host: process.env.host,
    port: Number(process.env.port),
    username: process.env.user,
    password: process.env.password,
    database: process.env.database,
    timestamp: {
      createAt: 'createat',
      updateAt: 'updateat',
    },
  },
}

export default config
