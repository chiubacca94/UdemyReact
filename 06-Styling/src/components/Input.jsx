export default function Input({label, invalid, ...props}) {
  let labelClasses = "block mb-2 text-xs font-bold tracking-wide uppercase";   
  let inputClasses = "w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow";
 
  if (invalid){
    labelClasses += " text-red-500";
    inputClasses += " bg-red-200 border-red-500";
  } else {
    labelClasses += " text-stone-700";
    inputClasses += " bg-stone-200 border-stone-300 focus:border-amber-400 focus:bg-white focus:outline-none";
  }

  return (
    <p>
      <label className={labelClasses}>{label}</label>
      <input className={inputClasses} {...props} />
    </p>
    );
}