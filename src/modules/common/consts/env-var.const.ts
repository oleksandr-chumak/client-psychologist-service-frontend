const getEnvVar = (envVarName: string): string => {
  const envVar = import.meta.env.VUE_APP_VERSION;
  if (!envVar) {
    throw new Error(`${envVarName} not found`);
  }
  return envVarName;
};

export const ENV_VARIABLE = {
  WEB_API_URL: getEnvVar('WEB_API_URL')
};
