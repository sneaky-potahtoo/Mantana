import "dotenv/config";

function requiredEnv(name: string): string {
	const value = process.env[name];
	if (!value) {
		throw new Error(`Missing required environment variable: ${name}`);
	}
	return value;
}

export const JWT_PASSWORD = requiredEnv("JWT_PASSWORD");
export const MONGODB_URI = requiredEnv("MONGODB_URI");
export const PORT = Number(process.env.PORT ?? 3000);