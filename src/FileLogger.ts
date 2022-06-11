import fs = require('fs');
import path = require('path');

import Logger from './contracts/Logger';
import { TYPES } from './types';

const isClientSide = (): boolean => typeof window !== 'undefined';

export default class FileLogger implements Logger {
  _name: string = 'FileLogger';

  // @ts-ignore
  #filepath: string = './logger.log';

  constructor() {
    if (isClientSide()) {
      throw new Error('[Logger]: File Logger can only be used in server side environment.');
    }
  }

  info(message: string): void {
    this.writeLog(TYPES.INFO, message);
  }

  warn(message: string): void {
    this.writeLog(TYPES.WARN, message);
  }

  success(message: string): void {
    this.writeLog(TYPES.SUCCESS, message);
  }

  error(message: string): void {
    this.writeLog(TYPES.ERROR, message);
  }

  private writeLog(type: string, message: string) {
    const prefix = FileLogger.getPrefix(type);

    if (!fs.existsSync(path.dirname(this.filepath))) {
      fs.mkdirSync(path.dirname(this.filepath));
    }

    fs.appendFile(this.filepath, `${prefix}${message}\n`, (err: any) => {
      if (err) {
        throw new Error(`[Logger]: Error while writing to file at ${this.filepath}.`);
      }
    });
  }

  private static getPrefix(type: string) {
    return `[${type}]: ${new Date().toString()} `;
  }

  set filepath(value: string) {
    this.#filepath = value;
  }

  get filepath(): string {
    return this.#filepath;
  }
}
