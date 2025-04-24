import { useState } from "react";
import type { StaticImageData } from "next/image";

export default function useImageError(
  fallbackUrl: string | StaticImageData,
  originalUrl: string
) {
  const [hasError, setHasError] = useState(false);

  const handleError = () => setHasError(true);

  const finalSrc = hasError ? fallbackUrl : originalUrl;

  return { src: finalSrc, onError: handleError };
}
