export interface IPie {
  sampleProps: string;
}

export const Pie: React.FC<IPie> = ({ sampleProps }) => {
  return (
    <div className="bg-gray-400 font-bold">
      <h1 className="text-2xl text-blue-500">Tailwind</h1>
      {sampleProps}
    </div>
  );
};
