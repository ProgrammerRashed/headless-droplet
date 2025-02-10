import { getBangladeshMenuData, getKenyaMenuData, getMainMenuData } from "@/graphql/Components/getMenuData";
import { headers } from "next/headers";

async function getMenuDataHelper() {
    const headersList = await headers();
    const detectedCountry = headersList.get("x-country") || "default";


    if (detectedCountry === "kenya") {
        return await getKenyaMenuData();
    } else if (detectedCountry === "bangladesh") {
        return await getBangladeshMenuData();
    } else {
        return await getMainMenuData();
    }
}
export default getMenuDataHelper;