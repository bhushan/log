export default interface Logger {
  readonly _name: string;

  info(message: string): void;

  warn(message: string): void;

  success(message: string): void;

  error(message: string): void;
}
