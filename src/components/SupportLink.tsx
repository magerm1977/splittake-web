import type { ReactNode } from "react";
import { supportEmail } from "@/lib/site";

export function SupportLink({ children }: { children?: ReactNode }) {
  return <a href={`mailto:${supportEmail}`}>{children ?? supportEmail}</a>;
}
