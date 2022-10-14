export type Resource = {
  id: number;
  name: string;
  description: string;
  attributionText: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  resourceURI: string;
};

export type Response = {
  attributionHTML: string;
  attributionText: string;
  code: number;
  copyright: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Resource[];
  };
  etag: string;
  status: string;
};
