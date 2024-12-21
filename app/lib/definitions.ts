export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface CardProps {
  heading: string;
  description: string;
  bg: string;
  width: number;
  color: string;
  photoPath: string;
}