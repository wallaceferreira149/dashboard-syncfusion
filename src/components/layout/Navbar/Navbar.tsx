export interface INavbar {
  sampleProps: string;
}

export const Navbar: React.FC<INavbar> = ({ sampleProps }) => {
  return (
    <div className="bg-gray-400 font-bold">
      <h1 className="text-2xl text-blue-500">Tailwind</h1>
      {sampleProps}
    </div>
  );
};
