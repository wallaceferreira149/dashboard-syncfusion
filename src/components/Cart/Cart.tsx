export interface ICart {
  sampleProps: string;
}

export const Cart: React.FC<ICart> = ({ sampleProps }) => {
  return (
    <div className="bg-gray-400 font-bold">
      <h1 className="text-2xl text-blue-500">Tailwind</h1>
      {sampleProps}
    </div>
  );
};
