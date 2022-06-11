// reset will make sure after message, color will be reverted to default color
const reset = '\x1b[0m';
const fgCyan = '\x1b[36m';
const fgRed = '\x1b[31m';
const fgGreen = '\x1b[32m';
const fgYellow = '\x1b[33m';

import Logger from './contracts/Logger';
import { TYPES } from './types';

export default class ConsoleLogger implements Logger {
  _name: string = 'ConsoleLogger';

  info(message: string): void {
    ConsoleLogger.writeLog(TYPES.INFO, message, fgCyan);
  }

  warn(message: string): void {
    ConsoleLogger.writeLog(TYPES.WARN, message, fgYellow);
  }

  success(message: string): void {
    ConsoleLogger.writeLog(TYPES.SUCCESS, message, fgGreen);
  }

  error(message: string): void {
    ConsoleLogger.writeLog(TYPES.ERROR, message, fgRed);
  }

  private static writeLog(type: string, message: string, color: string) {
    const prefix = `${color}[${type}]${reset}: ${new Date().toString()} `;
    // tslint:disable-next-line:no-console
    console.log(prefix, message);
  }
}
