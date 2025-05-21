export type User = {
  id: string;
  email: string;
};

export type Case = {
  id: string;
  userId: string;
  status: 'draft' | 'pending' | 'closed';
};
