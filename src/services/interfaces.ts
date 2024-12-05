export interface Category {
  id:     string;
  title:  string;
  prizes: Prize[];
}

export interface Prize {
  id:    string;
  title: string;
  price: number;
  stock: string;
  order: string;
}

export interface Winner {
  id:       string;
  socioId:  string;
  name:     string;
  isWinner: boolean;
  isActive: boolean;
}

