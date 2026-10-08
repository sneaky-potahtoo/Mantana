import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export function useContent() {
    const [contents, setContents] = useState([]);

    async function refreshContent() {
        const response = await axios.get(`${BACKEND_URL}/api/v1/content`, {
            headers: {
                Authorization: localStorage.getItem("token"),
            },
        });

        setContents(response.data.content);
    }

    useEffect(() => {
        refreshContent();
    }, []);

    return { contents, refreshContent };
}