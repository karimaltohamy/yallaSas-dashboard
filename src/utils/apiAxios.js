import axios from "axios";

const apiAxios = axios.create({
  baseURL: "http://5.249.164.150:1060/admin/api/index.php/",
  withCredentials: false,
});

apiAxios.interceptors.request.use(
  (config) => {
    // Modify config.headers based on request method
    if (config.method === "post") {
      config.headers["Content-Type"] = "application/x-www-form-urlencoded";
      config.headers["Accept"] = "application/x-www-form-urlencoded";
    } else if (config.method === "get") {
      config.headers["Content-Type"] = "application/json";
      config.headers["Accept"] = "application/json";
    }

    const accessToken = localStorage.getItem("token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// // Response interceptor
apiAxios.interceptors.response.use(
  (response) => {
    const accessToken = localStorage.getItem("token");
    if (accessToken) {
      response.headers.Authorization = `Bearer ${accessToken}`;
    }

    return response;
  },
  async (error) => {
    if (error.response.status === 401) {
      localStorage.setItem("user", null);
      localStorage.setItem("token", null);
      // window.location.reload();
      window.location.href = "/login";
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);

export default apiAxios;
