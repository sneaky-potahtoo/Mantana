const backendUrl = import.meta.env.VITE_BACKEND_URL;

if (!backendUrl) {
	throw new Error("Missing VITE_BACKEND_URL environment variable");
}

export const BACKEND_URL = backendUrl;