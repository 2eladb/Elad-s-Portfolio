export interface Project {
  id: string;
  title: string;
  category: 'Investing' | 'Agriculture' | 'Music' | 'Community' | 'Tech';
  description: string;
  imageUrl: string;
  link?: string;
  tags: string[];
}

export interface ChartData {
  name: string;
  carbon: number;
  moisture: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
