import ConsoleLogger from './ConsoleLogger';
import FileLogger from './FileLogger';
import { DRIVERS } from './types';

export const getLogger = (driver: DRIVERS.CONSOLE | DRIVERS.FILE = DRIVERS.CONSOLE): ConsoleLogger | FileLogger =>
  driver === DRIVERS.CONSOLE ? new ConsoleLogger() : new FileLogger();
