import { rest } from "msw";

export const handlers = [
  rest.get(
    "https://front-end-task-dot-result-analytics-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates",
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            category: ["Health", "E-commerce", "Education"],
            created: "2022-11-13T08:34:13.494413",
            description: "tempor magna labore fugiat mollit",
            link: "https://formpl.us/templates",
            name: "deserunt minim occaecat",
          },
          {
            category: ["Health", "E-commerce", "Education"],
            created: "2022-11-13T08:34:13.441486",
            description: "proident, reprehenderit minim occaecat deserunt",
            link: "https://formpl.us/templates",
            name: "laboris dolore amet,",
          },
        ])
      );
    }
  ),
];
