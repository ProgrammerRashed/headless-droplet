import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import NavigationMenuSingleItem from "./NavigationMenuSingleItem";

function MainNavigationLinks({ navigations }) {
  return (
    <NavigationMenu className="hidden items-center justify-end xl:flex">
      <NavigationMenuList>
        {navigations.map((navigation) => (
          <NavigationMenuSingleItem
            key={navigation.id}
            navigation={navigation}
          />
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default MainNavigationLinks;
