type SectionContentProps = {
  children: React.ReactNode;
  id?: string;
};

const SectionContent = ({ children, id }: SectionContentProps) => {
  return (
    <section
      id={id && id}
      className="min-[900px]:ml-56 px-6 py-6 flex flex-col gap-6"
      style={id === 'random-trip' ? { scrollMarginTop: '80px' } : {}}>
      {children}
    </section>
  );
};

export default SectionContent;
