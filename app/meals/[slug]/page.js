import React from "react";

import Image from "next/image";

import { getMeal } from "@/lib/meals";

import classes from "./page.module.css";
import { notFound } from "next/navigation";

export default function pages({ params }) {
  const meal = getMeal(params.slug);

  if(!meal){
    notFound()
  }

  const instructions = meal.instructions.replace(/\n/g, '<br />');
  
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`email:${meal.creator_email}`}>{meal.creator_email}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main className={classes.main}>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: instructions,
          }}
        ></p>
      </main>
    </>
  );
}
