import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Contact - Kemistry Nightclub",
  description:
    "Have any questions? Please contact Kemistry Nightclub fort lauderdale nightclub.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPageLayout({ children }) {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
}
