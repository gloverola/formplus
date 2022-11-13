import axios from "axios";

export const fetchAllTemplates = async () => {
  const response = await axios.get(
    "https://front-end-task-dot-result-analytics-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates"
  );
  return response.data;
};
