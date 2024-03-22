type SectionContentProps = {
  children: React.ReactNode;
};

const SectionContent = ({ children }: SectionContentProps) => {
  return <section className="md:pl-72 min-h-dvh">{children}</section>;
};

export default SectionContent;
