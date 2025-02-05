export const mainMenuQuery = `query NewQuery {
  customNavigationBy(slug: "main-menu") {
    id
    logo
    socialLinks {
      link
    }
    title
    navigations {
      banner_image
      group_name
      child_navigations {
        link
        title
      }
    }
    footerLogo
    donationDetails {
      btn_link
      btn_text
      label
    }
       buttonDetails {
      btn_link
      label
    }
  }
}`;
