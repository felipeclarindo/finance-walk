export interface NavBarProps {
  active: "dashboard" | "transactions" | "categories";
}
export interface CategoryItemProps {
  readonly category: Category;
}
