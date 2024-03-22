type SectionContentProps = {
  children: React.ReactNode;
};

const SectionContent = ({ children }: SectionContentProps) => {
  return <section className="md:ml-72 px-6 py-6">{children}</section>;
};

export default SectionContent;
