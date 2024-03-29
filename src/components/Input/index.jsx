export default function Input({ type, placeholder, onChange, value, required }) {
    return (
        <input
            className="bg-slate-700 p-3 rounded-xl text-white mr-3 w-64"
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            required={required}
        />
    )
}