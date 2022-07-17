import { getLogger } from '../src';
import { DRIVERS } from '../src/types';
import FileLogger from '../src/FileLogger';
import ConsoleLogger from '../src/ConsoleLogger';

test('default logger is file logger', () => {
  const log = getLogger();
  expect(log).toBeInstanceOf(ConsoleLogger);
});

test('when needed file logger can be used', () => {
  const log = getLogger(DRIVERS.FILE);
  expect(log).toBeInstanceOf(FileLogger);
});
