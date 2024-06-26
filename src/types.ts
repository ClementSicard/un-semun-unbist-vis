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
  alt_labels: string[];
  alt_labels_ar: string[];
  alt_labels_es: string[];
  alt_labels_fr: string[];
  alt_labels_ru: string[];
  alt_labels_zh: string[];
}

export interface Cluster {
  key: string;
  color: string;
  cluster_label_en: string;
  cluster_label_ar: string;
  cluster_label_es: string;
  cluster_label_fr: string;
  cluster_label_ru: string;
  cluster_label_zh: string;
  [key: string]: string;
}

export interface Tag {
  key: string;
  image: string;
}

export interface Dataset {
  nodes: NodeData[];
  edges: [string, string][];
  clusters: Cluster[];
}

export interface FiltersState {
  clusters: Record<string, boolean>;
  language: string;
}

