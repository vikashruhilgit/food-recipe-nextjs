import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 100));
  // throw new Error("meals load fail");
  return db.prepare("select * from meals").all();
}

export const getMeal = (id) => {
  return db.prepare("select * from meals where slug=?").get(id);
};

export const saveMeal = (meal) => {
  return db
    .prepare(
      `INSERT INTO meals VALUES (
         null,
         @slug,
         @title,
         @image,
         @summary,
         @instructions,
         @creator,
         @creator_email
      )`
    ).run(meal)
};