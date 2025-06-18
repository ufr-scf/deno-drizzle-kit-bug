import { defineConfig } from "npm:drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: Deno.env.get("DB_CONNECTION") || "",
  },
});
