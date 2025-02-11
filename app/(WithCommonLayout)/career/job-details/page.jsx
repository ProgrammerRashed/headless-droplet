import JobDetailsHeroSection from "@/components/detailsPage/jobDetailsHeroSection/JobDetailsHeroSection";
import RichContentAreaSection from "@/components/detailsPage/richContentAreaSection/RichContentAreaSection";

function JobDetailsPage() {
  return (
    <>
      <JobDetailsHeroSection
        data={{
          sectionHeading: "Program Officer Emergency",
          linkDetails: { title: "Apply Now", link: "/" },
        }}
      />
      <RichContentAreaSection
        data={{
          sectionClassName: "!max-w-[1108px]",
          shareButtons: false,
          buttonDetails: { title: "Apply Now", link: "/" },
          content: `
            <h2>About Organization</h2>
            <p>
              Lectus gravida sed cras tempus pretium dolor tempor hendrerit. Lobortis in mi ac leo ullamcorper commodo quis diam quis. Tempus ut ultricies nunc a gravida. Arcu eu vitae interdum aenean blandit odio justo in. Semper purus mauris tempus auctor sed tincidunt ornare. Scelerisque sit euismod netus mattis. Sem orci dictum interdum eget mi semper ornare pretium vitae. Blandit sed facilisi vel semper pellentesque libero ut. Purus eget nisi dictum egestas aliquam viverra amet. Volutpat nec odio proin id porttitor ipsum metus ultrices velit. Et ut sit pellentesque morbi pretium. Nibh eget adipiscing amet eget tempus ac.
            </p>
            <br/>
            <h2>About Project</h2>
            <p>
              Lectus gravida sed cras tempus pretium dolor tempor hendrerit. Lobortis in mi ac leo ullamcorper commodo quis diam quis. Tempus ut ultricies nunc a gravida. Arcu eu vitae interdum aenean blandit odio justo in. Semper purus mauris tempus auctor sed tincidunt ornare. Scelerisque sit euismod netus mattis. Sem orci dictum interdum eget mi semper ornare pretium vitae. Blandit sed facilisi vel semper pellentesque libero ut. Purus eget nisi dictum egestas aliquam viverra amet. Volutpat nec odio proin id porttitor ipsum metus ultrices velit. Et ut sit pellentesque morbi pretium. Nibh eget adipiscing amet eget tempus ac.
            </p>
            <br/>
            <h2>Job Brief</h2>
            <p>
              Lectus gravida sed cras tempus pretium dolor tempor hendrerit. Lobortis in mi ac leo ullamcorper commodo quis diam quis. Tempus ut ultricies nunc a gravida. Arcu eu vitae interdum aenean blandit odio justo in. Semper purus mauris tempus auctor sed tincidunt ornare.
            </p>
            <ul>
              <li>
                Lectus gravida sed cras tempus pretium dolor tempor hendrerit. 
              </li>
              <li>
                Lobortis in mi ac leo ullamcorper commodo quis diam quis. Tempus ut ultricies nunc a gravida. Arcu eu vitae interdum aenean blandit odio justo in. Semper purus mauris tempus auctor sed tincidunt ornare. Scelerisque sit euismod netus mattis. 
              </li>
              <li>
              Sem orci dictum interdum eget mi semper ornare pretium vitae. Blandit sed facilisi vel semper pellentesque libero ut. 
              </li>
              <li>
              Purus eget nisi dictum egestas aliquam viverra amet. Volutpat nec odio proin id porttitor ipsum metus ultrices velit. 
              </li>
              <li>
              Et ut sit pellentesque morbi pretium.
              </li>
              <li>
              Nibh eget adipiscing amet eget tempus ac. 
              </li>
            </ul>
            <br/>
            <h2>Job Responsibility</h2>
            <p>
              Lectus gravida sed cras tempus pretium dolor tempor hendrerit. Lobortis in mi ac leo ullamcorper commodo quis diam quis. Tempus ut ultricies nunc a gravida. Arcu eu vitae interdum aenean blandit odio justo in. Semper purus mauris tempus auctor sed tincidunt ornare.
            </p>
            <ul>
              <li>
                Lectus gravida sed cras tempus pretium dolor tempor hendrerit. 
              </li>
              <li>
                Lobortis in mi ac leo ullamcorper commodo quis diam quis. Tempus ut ultricies nunc a gravida. Arcu eu vitae interdum aenean blandit odio justo in. Semper purus mauris tempus auctor sed tincidunt ornare. Scelerisque sit euismod netus mattis. 
              </li>
              <li>
              Sem orci dictum interdum eget mi semper ornare pretium vitae. Blandit sed facilisi vel semper pellentesque libero ut. 
              </li>
              <li>
              Purus eget nisi dictum egestas aliquam viverra amet. Volutpat nec odio proin id porttitor ipsum metus ultrices velit. 
              </li>
              <li>
              Et ut sit pellentesque morbi pretium.
              </li>
              <li>
              Nibh eget adipiscing amet eget tempus ac. 
              </li>
            </ul>
            <br/>
            <h2>Skill Requirements</h2>
            <p>
              Lectus gravida sed cras tempus pretium dolor tempor hendrerit. Lobortis in mi ac leo ullamcorper commodo quis diam quis. Tempus ut ultricies nunc a gravida. Arcu eu vitae interdum aenean blandit odio justo in. Semper purus mauris tempus auctor sed tincidunt ornare.
            </p>
            <ul>
              <li>
                Lectus gravida sed cras tempus pretium dolor tempor hendrerit. 
              </li>
              <li>
                Lobortis in mi ac leo ullamcorper commodo quis diam quis. Tempus ut ultricies nunc a gravida. Arcu eu vitae interdum aenean blandit odio justo in. Semper purus mauris tempus auctor sed tincidunt ornare. Scelerisque sit euismod netus mattis. 
              </li>
              <li>
              Sem orci dictum interdum eget mi semper ornare pretium vitae. Blandit sed facilisi vel semper pellentesque libero ut. 
              </li>
              <li>
              Purus eget nisi dictum egestas aliquam viverra amet. Volutpat nec odio proin id porttitor ipsum metus ultrices velit. 
              </li>
              <li>
              Et ut sit pellentesque morbi pretium.
              </li>
              <li>
              Nibh eget adipiscing amet eget tempus ac. 
              </li>
            </ul>
            <br/>
            <h2>Relationships</h2>
            <p>Graduation in any engineering discipline is preferred. However, we are looking for skills, not degrees.</p>
            <br/>
            <h2>Educational Requirements</h2>
            <p>Graduation in any engineering discipline is preferred. However, we are looking for skills, not degrees.</p>
            <br/>
            <h2>Salary Range</h2>
            <p>Up to 50,000 – 80,000 BDT/month</p>
            <br/>
            <h2>Note</h2>
            <p>SAF is committed to fostering a diverse, inclusive, and equitable workplace where every individual, regardless of gender identity, is given equal opportunities to thrive. We encourage applications from candidates of all genders and prioritize creating a work environment that supports gender equality at all levels.</p>
    `,
        }}
      />
    </>
  );
}

export default JobDetailsPage;
