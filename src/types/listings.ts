export type Breed = {
  name: string;
};

export type Listing = {
  id: string;
  title: string;
  images?: string[];
  breeds: Breed[];
  location: string;
  price: number;
  negotiable: boolean;
  for_sale: boolean;
  for_lease: boolean;
  gender: string;
  foaled: string;
  height: string;
  color: string;
  registered?: boolean;
  reg_association?: string;
  reg_number?: string;
}; 