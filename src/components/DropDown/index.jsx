export default function DropDown({
  importanceLevels,
  onModify,
  value,
}) {
  return (
    <select
      className="bg-transparent text-white m-2 p-2 border-2 border-solid border-white rounded-xl"
      onChange={(event) => onModify(event.target.value)}
      value={value}
    >
      {importanceLevels.map((level) => (
        <option key={value} className="text-black">
          {level}
        </option>
      ))}
    </select>
  );
}
