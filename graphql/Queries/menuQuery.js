import { gql } from "@apollo/client";

export const mainMenuQuery = gql`
  query NewQuery {
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
          nested_child_navigations {
            link
            title
          }
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
  }
`;

export const bangldeshMenuQuery = gql`
  query NewQuery {
    customNavigationBy(slug: "bangladesh-menu") {
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
  }
`;

export const kenyaMenuQuery = gql`
  query NewQuery {
    customNavigationBy(slug: "kenya-menu") {
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
  }
`;
