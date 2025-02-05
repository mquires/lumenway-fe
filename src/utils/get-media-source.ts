import { MEDIA_URL } from '@/libs/constants/url.constants';

export const getMediaSource = (path: string | undefined | null) => {
  return MEDIA_URL + path;
};
