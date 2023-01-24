import { DataSource } from 'typeorm'
import * as path from 'path'

const dbName = 'database'

// In dev mode db file dnName.sql should be in root directory
// In build mode (portable) in data folder in folder with .exe file
export const dataSource = new DataSource({
  type: 'sqlite',
  database:
    process.env.NODE_ENV === 'development'
      ? `./${dbName}.sql`
      : path.join(
          process.env.PORTABLE_EXECUTABLE_DIR || '',
          'data',
          `${dbName}.sql`
        ),
  synchronize: true,
  entities: [],
})

export const connectToDb = async (): Promise<void> => {
  try {
    await dataSource.initialize()
    console.log('Connection to database established successfully')
  } catch (e) {
    console.log(e)
    console.log('Connection to database failed')
  }
}
