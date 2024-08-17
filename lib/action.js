"use server";

import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";

const { saveMeal } = require("./meals");

export const saveMealAction = async (formData) => {
  const slug = slugify(formData.get("title"), { lower: true });
  const extension = formData.get("image").name.split(".").pop();
  const fileName = `${slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);

  const bufferedImage = await formData.get("image").arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("saving image failed!");
    }
  });

  const meal = {
    title: formData.get("title"),
    creator_email: formData.get("email"),
    summary: formData.get("summary"),
    instructions: xss(formData.get("instructions")),
    creator: formData.get("name"),
    image: `/images/${fileName}`,
    slug,
  };

  saveMeal(meal);
};
