interface InputProps {
  placeholder: string;
  reference?: React.Ref<HTMLInputElement>;
  type?: string;
}

export function Input({ placeholder, reference, type = "text" }: InputProps) {
  return (
    <div className="w-full">
      <input
        placeholder={placeholder}
        type={type}
        className="w-full px-4 py-3 bg-[#f5f4f0] border border-transparent rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-300 focus:bg-white transition-all duration-200"
        ref={reference}
      />
    </div>
  );
}
