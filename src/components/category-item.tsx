import { CategoryItemProps } from "@/interfaces";
import { Icon } from "./icon";
import CrudDropdown from "./crud-dropdown";


export default function CategoryItem({ category }: Readonly<CategoryItemProps>) {
  return (
    <div className="flex justify-between mt-2">
      <div className="flex gap-2">
        <Icon name={category.icon} />
        <span>{category.name}</span>
      </div>
      <div>
        <CrudDropdown />
      </div>
    </div>
  );
}
