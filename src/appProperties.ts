import dotenv from 'dotenv';
dotenv.config()

function getEnvVar(key: string) {
    const value = process.env[key];
    if (!value) {
        throw new Error(`Missing env variable ${key}`);
    }
    return value;
}
const appProperties = {
    openFnWebHookTriggerUrl: getEnvVar('OPENFN_WEBHOOK_TRIGGER_URL'), 
    openFnRelayDelay: getEnvVar('OPENFN_RELAY_DELAY'),
    databaseHost: getEnvVar('DATABASE_HOST'),
    databaseUsername: getEnvVar('DATABASE_USERNAME'),
    databasePassword: getEnvVar('DATABASE_PASSWORD'),
    databaseName: getEnvVar('DATABASE_NAME'),
}

export default appProperties;