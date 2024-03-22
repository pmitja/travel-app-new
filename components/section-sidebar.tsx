const SectionSidebar = ({ children }: { children: React.ReactNode }) => {
  return (
    <aside className="flex flex-col gap-2 py-4 px-6 h-full md:flex md:flex-col md:fixed md:w-72">
      {children}
    </aside>
  );
};

export default SectionSidebar;
