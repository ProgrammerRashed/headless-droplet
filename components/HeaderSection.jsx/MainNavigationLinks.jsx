import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import NavigationMenuSingleItem from "./NavigationMenuSingleItem";

function MainNavigationLinks() {
  return (
    <NavigationMenu className="hidden items-center justify-end xl:flex">
      <NavigationMenuList>
        <NavigationMenuSingleItem />
        <NavigationMenuSingleItem />
        <NavigationMenuSingleItem />
        <NavigationMenuSingleItem />
        <NavigationMenuSingleItem />
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default MainNavigationLinks;
