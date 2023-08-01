import chalk from 'chalk';
import ts from '@/utils/timestamp';

enum LogTypeColor {
  INFO = "#3F92FF",
  ERROR = "#CC1313",
  SUCCESS = "#65CC65",
  WARNING = "#F7C600",
  DEBUG = "#999999"
}
type LogType = keyof typeof LogTypeColor;

const log = (message: string) => { console.log(message) }

const getPrefix = (type: LogType) => {
  return chalk.bold(`[${chalk.hex(LogTypeColor[type])(type.toUpperCase())}] ${chalk.grey(ts.getTime())} `)
}

export default {
  header: (message: string)=> {
    log(chalk.bold.bgGray(`\n -------------------------------- ${message} -------------------------------- \n`));
  },

  info(message: string) {
    log(getPrefix("INFO") + message);
  },

  error(message: string) {
    log(getPrefix("ERROR") + chalk.hex(LogTypeColor['ERROR'])(message));
  },

  success(message: string) {
    log(getPrefix("SUCCESS") + message);
  },

  warn(message: string) {
    log(getPrefix("WARNING") + message);
  },

  debug(message: string) {
    log(getPrefix("DEBUG") + message);
  }
}
