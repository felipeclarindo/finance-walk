import * as LucideIcons from "lucide-react";

export function Icon({ name }: Readonly<{ name: string }>) {
  const LucideIcon = (LucideIcons as any)[name];
  if (!LucideIcon) return <LucideIcons.Ban color="red" />;
  return <LucideIcon />;
}
