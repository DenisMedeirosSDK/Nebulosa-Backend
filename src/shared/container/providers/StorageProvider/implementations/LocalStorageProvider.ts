import fs from 'fs'
import { resolve } from 'path'

import upload from '@config/upload'
import { AppError } from '@shared/errors/AppError'

import { IStorageProvider } from '../IStorageProvider'

class LocalStorageProvider implements IStorageProvider {
  async save(file: string, folder: string): Promise<string> {
    await fs.promises.rename(
      resolve(upload.tmpFolder, file),
      resolve(`${upload.tmpFolder}/${folder}`, file)
    )

    return file
  }

  async delete(file: string, folder: string): Promise<void> {
    const fileName = resolve(`${upload.tmpFolder}/${folder}`, file)

    try {
      await fs.promises.stat(fileName)
    } catch (error) {
      throw new AppError('Failed to delete file')
    }

    await fs.promises.unlink(fileName)
  }
}

export { LocalStorageProvider }
