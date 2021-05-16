module.exports = {
  hotchocolateSidebar: [
    "hotchocolate/introduction",
    "hotchocolate/get-started",
    {
      "Defining a schema": [
        "hotchocolate/defining-a-schema/schema-basics",
        "hotchocolate/defining-a-schema/descriptions",
        "hotchocolate/defining-a-schema/operations",
        "hotchocolate/defining-a-schema/versioning",
        "hotchocolate/defining-a-schema/unions-and-interfaces",
        "hotchocolate/defining-a-schema/extending-types",
        "hotchocolate/defining-a-schema/scalars",
        "hotchocolate/defining-a-schema/directives",
      ],
    },
    {
      "Fetching data": [
        "hotchocolate/fetching-data/resolver",
        "hotchocolate/fetching-data/fetching-from-databases",
        "hotchocolate/fetching-data/fetching-from-rest",
        "hotchocolate/fetching-data/dataloader",
        "hotchocolate/fetching-data/pagination",
        "hotchocolate/fetching-data/filtering",
        "hotchocolate/fetching-data/sorting",
        "hotchocolate/fetching-data/projections",
      ],
    },
    {
      "Distributed schemas": [
        "hotchocolate/distributed-schema/overview",
        "hotchocolate/distributed-schema/schema-stitching",
        "hotchocolate/distributed-schema/schema-federations",
        "hotchocolate/distributed-schema/schema-configuration",
      ],
    },
    {
      Integrations: [
        "hotchocolate/integrations/overview",
        "hotchocolate/integrations/entity-framework",
        "hotchocolate/integrations/mongodb",
        "hotchocolate/integrations/spatial-data",
      ],
    },
    {
      Performance: [
        "hotchocolate/performance/overview",
        "hotchocolate/performance/persisted-queries",
        "hotchocolate/performance/automatic-persisted-queries",
      ],
    },
    {
      "API Reference": [
        "hotchocolate/api-reference/overview",
        "hotchocolate/api-reference/object-type",
        "hotchocolate/api-reference/custom-attributes",
        "hotchocolate/api-reference/language",
        "hotchocolate/api-reference/extending-filtering",
        "hotchocolate/api-reference/visitors",
        "hotchocolate/api-reference/aspnetcore",
        "hotchocolate/api-reference/dependency-injection",
        "hotchocolate/api-reference/executable",
        "hotchocolate/api-reference/apollo-tracing",
        "hotchocolate/api-reference/migrate-from-10-to-11",
      ],
    },
  ],
  strawberryshakeSidebar: [
    "strawberryshake/introduction",
    {
      "Get Started": [
        "strawberryshake/get-started/blazor",
        "strawberryshake/get-started/xamarin",
        "strawberryshake/get-started/console",
      ],
    },
    "strawberryshake/subscriptions",
    "strawberryshake/tooling",
    {
      Caching: [
        "strawberryshake/caching/overview",
        "strawberryshake/caching/entities",
        "strawberryshake/caching/invalidation",
      ],
    },
    {
      Performance: [
        "strawberryshake/performance/overview",
        "strawberryshake/performance/persisted-queries",
        "strawberryshake/performance/persisted-state",
      ],
    },
    {
      Networking: [
        "strawberryshake/networking/protocols",
        "strawberryshake/networking/authentication",
      ],
    },
    "strawberryshake/scalars",
  ],
  bananacakepopSidebar: ["bananacakepop/introduction"],
};
