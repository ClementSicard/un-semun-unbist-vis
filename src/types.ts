export interface NodeData {
  key: string;
  x: number;
  y: number;
  cluster: string;
  url: string;
  node_type: string;
  tag: string;
  label: string;
  label_ar: string;
  label_es: string;
  label_fr: string;
  label_ru: string;
  label_zh: string;
}

export interface Cluster {
  key: string;
  color: string;
  clusterLabel: string;
}

export interface Tag {
  key: string;
  image: string;
}

export interface Dataset {
  nodes: NodeData[];
  edges: [string, string][];
  clusters: Cluster[];
  tags: Tag[];
}

export interface FiltersState {
  clusters: Record<string, boolean>;
  tags: Record<string, boolean>;
}
