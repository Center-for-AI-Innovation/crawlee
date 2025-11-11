import {
  pgTable,
  serial,
  text,
  timestamp,
  jsonb,
} from 'drizzle-orm/pg-core'

export const documentsInProgress = pgTable('documents_in_progress', {
  id: serial('id').primaryKey(),
  created_at: timestamp('created_at').defaultNow().notNull(),
  s3_path: text('s3_path'),
  readable_filename: text('readable_filename'),
  course_name: text('course_name'),
  url: text('url'),
  contexts: jsonb('contexts'),
  base_url: text('base_url'),
  doc_groups: text('doc_groups'),
  error: text('error'),
  beam_task_id: text('beam_task_id'),
})
