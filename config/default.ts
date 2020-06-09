import { resolve } from 'path';

const SOURCE_PATH = resolve(__dirname, '..', 'src');

export default {
    database : {
        url: 'postgres://app:app@127.0.0.1:56158/locations',
    },
    orm: {
        entities: [`${SOURCE_PATH}/**/*.entity.ts`],
        synchronize: false,
    },
    templates : {
        path: resolve(__dirname, '..', 'views')
    },
    public : {
        path: resolve(__dirname, '..', 'public')
    },
}