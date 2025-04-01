export type DashboardLastDays<T> = {
  total: number;
  transactions: T[];
};

export type ResumTransactionTypes = {
  name: string;
  amount: number;
};

export type TransactionsTypes = {
  id: number;
  icon: string | null;
  source?: string;
  category?: string;
  amount: number;
  date: string;
  created_at: string;
  updated_at: string;
  type?: 'expense' | 'income';
};
