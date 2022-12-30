export interface IStacked {
  sampleProps: string;
}

export const Stacked: React.FC<IStacked> = ({ sampleProps }) => {
  return (
    <div className="bg-gray-400 font-bold">
      <h1 className="text-2xl text-blue-500">Tailwind</h1>
      {sampleProps}
    </div>
  );
};
