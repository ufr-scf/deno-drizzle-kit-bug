import { pgTable, uuid } from "npm:drizzle-orm/pg-core"

export const test_table = pgTable("test", {
  id: uuid().primaryKey().defaultRandom(),
})
