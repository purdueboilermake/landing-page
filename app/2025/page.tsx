/**
 * app/2025/page.tsx
 * 2025 page, which should redirect to the /2025/home page
 * @AshokSaravanan222
 * 02/13/2025
 */

import { redirect } from "next/navigation";

export default function Page() {
  redirect("/");
}
