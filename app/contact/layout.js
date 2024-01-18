import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Contact - Kemistry Night Club",
  description:
    "Have any questions? Please contact Kemistry Night Club fort lauderdale nightclub.",
};

export default function ContactPageLayout({ children }) {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
}
