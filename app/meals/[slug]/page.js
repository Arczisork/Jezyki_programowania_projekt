"use client";

import { usePathname } from "next/navigation";

export default function MealDetailsPage({ params }) {
  const pathname = usePathname();

  return (
    <main>
      <h1>Meal details: {params.slug}</h1>
      <p>Aktualny URL: {pathname}</p>
    </main>
  );
}
