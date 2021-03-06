namespace APIHost {
  export const AUTH =
    process.env.REACT_APP_AUTH_API_HOST ?? "https://auth.example.com";
  export const APP =
    process.env.REACT_APP_APPLICATION_API_HOST ?? "https://api.example.com";
  export const ENTERPRISE_AUTH =
    process.env.REACT_APP_ENTERPRISE_AUTH_API_HOST ?? "https://api.example.com";
}

export { APIHost };
