interface Position {
  x: number;
  y: number;
  z: number;
}

export interface Tag {
  id: string;
  label: string;
  description: string;
  position: Position;
  stemVector: Position;
}
