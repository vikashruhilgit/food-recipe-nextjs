"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";

import classes from "./meals-form-submit.module.css"

export default function MealsFormSubmit() {
  const { pending } = useFormStatus();
  return (
    <p className={classes.actions}>
      <button disabled={pending}>
        {pending ? "Submitting..." : "Share Meal"}
      </button>
    </p>
  );
}