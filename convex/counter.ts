import { mutation, query } from "./_generated/server";

export const increment = mutation(async ({ db }) => {
  const counterDoc = await db.query("counter").first();
  if (counterDoc) {
    await db.patch(counterDoc._id, { value: counterDoc.value + 1 });
    return counterDoc.value + 1;
  } else {
    const id = await db.insert("counter", { value: 1 });
    return 1;
  }
});

export const getCount = query(async ({ db }) => {
  const counterDoc = await db.query("counter").first();
  return counterDoc?.value ?? 0;
});