interface ImportMetaEnv {
  VITE_APP_TITLE: string;
  VITE_PUBLIC_PATH: string;
  VITE_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
