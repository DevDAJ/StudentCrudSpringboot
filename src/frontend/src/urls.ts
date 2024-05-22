const BASE_URL = import.meta.env.MODE === 'development' ? 'http://localhost:8080/' : '/';
const API_VERSION = import.meta.env.API_VERSION ?? "v1";

const STUDENT_URL = `${BASE_URL}api/${API_VERSION}/student`;

export { BASE_URL, STUDENT_URL };
