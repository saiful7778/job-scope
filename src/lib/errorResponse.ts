import { AxiosError } from "axios";

export default function errorResponse(error: unknown): string {
  if (error instanceof AxiosError) {
    if (error.response) {
      const errorData = error.response.data;

      if (errorData?.detail) {
        return errorData.detail as string;
      }
      if (errorData?.message) {
        return errorData.message as string;
      }

      if (errorData?.error) {
        return errorData.error as string;
      }

      const dataKeys = Object.keys(errorData);
      if (dataKeys.length > 0) {
        return `${dataKeys[0]} ${errorData[dataKeys[0]]}`;
      }
      return JSON.stringify(errorData);
    } else if (error.request) {
      return "No internet connection";
    } else {
      return "Something went wrong";
    }
  } else if (error instanceof Error) {
    return error.message;
  } else {
    return "Something went wrong";
  }
}
