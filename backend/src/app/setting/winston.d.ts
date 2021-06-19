import * as winston from 'winston';
import { WinstonInter } from '../interfaces/winston';
export default class WinstonLog {
    winston: typeof winston;
    _console: WinstonInter;
    constructor();
}
