export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "615116c4b83b31b9f1e5cb1f",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-ds7jcmfz",
                  apiId: "8218a3b2-aba5-447b-9026-d8eebc4cea40",
                },
                {
                  buildHookId: "615116c46db04c4ecb02d69c",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-k6vrzpmh",
                  apiId: "1e039295-8611-4083-8c48-4b13b123d7ea",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/emmanuelnaranjo/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-k6vrzpmh.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
