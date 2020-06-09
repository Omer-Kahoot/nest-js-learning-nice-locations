import addJestHbsExtension from 'jest-hbs-extension';
import { resolve } from 'path';
import { ConfigService } from '../src/config/config.service';

//const VIEWS_PATH = resolve (__dirname, '..', 'views'); //This is already defined in another TS file, will be fixing later on.
const configService = new ConfigService();
const viewsPath = configService.get<string>('templates.path');

addJestHbsExtension(viewsPath);
