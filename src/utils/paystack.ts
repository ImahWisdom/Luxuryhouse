import PaystackPop from "@paystack/inline-js";

export const payWithPaystack = ({
  email,
  amount,
  reference,
  onSuccess,
  onClose,
}: {
  email: string;
  amount: number;
  reference: string;
  onSuccess: (ref: any) => void;
  onClose?: () => void;
}) => {
  const paystack = new PaystackPop();

  paystack.newTransaction({
    key: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY!,
    email,
    amount: amount * 100, // kobo
    reference,
    onSuccess,
    onClose,
  });
};
