import { defineDb, defineTable, column } from "astro:db";

const Guestbook = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    author: column.text(),
    link: column.text({ optional: true }),
    content: column.text(),
    country: column.text(),
    timestamp: column.date(),
  },
});

export default defineDb({
  tables: { Guestbook },
});
