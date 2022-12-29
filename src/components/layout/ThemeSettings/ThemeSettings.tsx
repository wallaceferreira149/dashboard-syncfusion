export interface IThemeSettings {
  sampleProps: string;
}

export const ThemeSettings: React.FC<IThemeSettings> = ({ sampleProps }) => {
  return (
    <div className="bg-gray-400 font-bold">
      <h1 className="text-2xl text-blue-500">Tailwind</h1>
      {sampleProps}
    </div>
  );
};
