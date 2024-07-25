const getEnvVar = (envVarName: string): string => {
  const envVar = import.meta.env[envVarName];
  if (!envVar) {
    throw new Error(`${envVarName} not found`);
  }
  return envVar;
};

export const ENV_VARIABLE = {
  WEB_API_URL: getEnvVar('VITE_WEB_API_URL')
};
