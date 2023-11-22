export interface Menu {
  id: number;
  ref: number;
  posicion: number;
  titulo: string;
  ruta: string;
  habilitado: boolean;
  protected: boolean;
  isModule: boolean;
  expand?: boolean;
  secciones: Section[];
  iconname?: string;
}

export interface Section {
  id: number;
  posicion: number;
  titulo: string;
  iconname: string;
  ruta: string;
  habilitado: boolean;
  protected: boolean;
  descripcion: string | null;
}

export interface LoaderData {
  modulesJSON: Menu[];
  externals: Menu[];
}
