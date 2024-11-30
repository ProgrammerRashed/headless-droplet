import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import NavigationMenuSingleItem from "./NavigationMenuSingleItem";

function MainNavigationLinks() {
  return (
    <div className="flex items-center justify-end">
      <NavigationMenu className="hidden items-center justify-end xl:flex">
        <NavigationMenuList>
          <NavigationMenuSingleItem />
          <NavigationMenuSingleItem />
          <NavigationMenuSingleItem />
          <NavigationMenuSingleItem />
          <NavigationMenuSingleItem />
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default MainNavigationLinks;
