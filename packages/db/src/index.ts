export type User = {
  id: string;
  email: string;

  role: 'client' | 'admin';
  stripe_customer_id: string | null;

};

export type Case = {
  id: string;

  user_id: string;
  pflegegrad_target: number | null;
  kasse: string | null;
  status: 'draft' | 'pending' | 'md-scheduled' | 'complete';
  md_date?: string | null;
  signed_power_of_attorney_url?: string | null;
};

export type Payment = {
  id: string;
  case_id: string;
  stripe_payment_intent: string;
  amount: number;
  status: 'pending' | 'paid' | 'failed';
};

export type Document = {
  id: string;
  case_id: string;
  type: 'power_of_attorney' | 'pdf_application' | 'md_report';
  storage_url: string;
  uploaded_at: string;
};

export type Appointment = {
  id: string;
  case_id: string;
  kind: 'mdk' | 'prep_call';
  starts_at: string;
  channel: string;

};
