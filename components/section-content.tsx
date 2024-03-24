type SectionContentProps = {
  children: React.ReactNode;
};

const SectionContent = ({ children }: SectionContentProps) => {
  return <section className="min-[900px]:ml-52 px-6 py-6 flex flex-col gap-6">{children}</section>;
};

export default SectionContent;
