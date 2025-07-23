export interface RegisteredUser {
  id: number;
  username: string;
  bio: string | null;
  image: string | null;
  token: string;
}