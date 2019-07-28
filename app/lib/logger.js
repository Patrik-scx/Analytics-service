const { createLogger, format, transports } = require('winston');

const {
  combine, timestamp, printf,
} = format;

const myFormat = printf(info => `${info.timestamp} ${info.level}: ${JSON.stringify(info.message)}`);
const logger = createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    myFormat,
  ),
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({}));
}

module.exports = logger;
