export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  bio: string | null;
  image: string | null;
}