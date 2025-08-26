type Props = {
  children: React.ReactNode;
};

export default function Section({ children }: Props) {
  return <section className="px-4 py-10 md:px-16 md:py-20">{children}</section>;
}
