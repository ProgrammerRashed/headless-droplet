import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import NavigationMenuSingleItem from "./NavigationMenuSingleItem";

function MainNavigationLinks({ navigations }) {
  return (
    <NavigationMenu className="0.5xl:flex hidden items-center justify-end">
      <NavigationMenuList>
        {navigations.map((navigation, index) => (
          <NavigationMenuSingleItem
            key={index}
            navigation={navigation}
          />
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default MainNavigationLinks;
