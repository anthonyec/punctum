import * as knex from 'knex';

// @ts-ignore
import * as config from '../knexfile';

export default knex(config.development);