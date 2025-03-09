import { MEDIA_URL } from '@/libs/constants/url.constants';

/**
 * Combines base media URL with provided path to create full media source URL
 * @param path - Media file path or identifier
 * @returns Full URL to media resource
 */

export const getMediaSource = (path: string | undefined | null): string => {
  return MEDIA_URL + path;
};
