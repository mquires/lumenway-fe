export interface Session {
  metadata: {
    device: {
      browser: string;
      os: string;
    };
    location: {
      country: string;
      city: string;
      latitute: number;
      longitude: number;
    };
    ip: string;
  };
  createdAt: string;
}
