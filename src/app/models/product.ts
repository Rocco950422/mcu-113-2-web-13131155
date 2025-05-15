export class Product {
  constructor(iniData?: Partial<Product>) {
    if (!iniData) return;
    Object.assign(this, iniData);
  }

  id!: string;

  name!: string;

  company!: string;

  authors!: string[];

  price!: number;

  isShow!: boolean;

  photoUrl!: string;

  createDate!: Date;
}
