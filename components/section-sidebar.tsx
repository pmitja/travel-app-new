const SectionSidebar = ({ children }: { children: React.ReactNode }) => {
  return (
    <aside className="flex flex-col gap-2 py-4 px-6 h-full min-[900px]:flex min-[900px]:flex-col min-[900px]:fixed min-[900px]:w-52">
      {children}
    </aside>
  );
};

export default SectionSidebar;
