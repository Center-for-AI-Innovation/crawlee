import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import 'dotenv/config';
import * as schema from '../db/schema.js';

const connectionString = `postgres://${process.env.POSTGRES_USERNAME}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_ENDPOINT}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DATABASE}`;

const isLocal =
  process.env.POSTGRES_ENDPOINT === "localhost" ||
  process.env.POSTGRES_ENDPOINT === "127.0.0.1"

const clientOptions = isLocal
  ? {}
  : {
      ssl: { rejectUnauthorized: false },
    };

const pool = new Pool({
  connectionString,
  ...clientOptions,
});

export const db = drizzle(pool, { schema });

