import { apiGet } from "./http";
import type { ApiResponse } from "@/types/api";
import type { Asset } from "@/types/asset";

export async function fetchAssets(): Promise<Asset[]>{
    const response = await apiGet<ApiResponse<Asset[]>>("/assets");
    return response.data;
}