declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: string;

    DATABASE_HOST: string;
    DATABASE_PORT: string;
    DATABASE_NAME: string;
    DATABASE_USER: string;
    DATABASE_PASS: string;
  }
}