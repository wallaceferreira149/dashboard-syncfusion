export interface IChartsHeader {
  sampleProps: string;
}

export const ChartsHeader: React.FC<IChartsHeader> = ({ sampleProps }) => {
  return (
    <div className="bg-gray-400 font-bold">
      <h1 className="text-2xl text-blue-500">Tailwind</h1>
      {sampleProps}
    </div>
  );
};
