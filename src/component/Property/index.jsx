export const Th = ({ children, className }) => {
    return (
        <th className="w-1/6 border border-black" className={`${className} text-gray-500 py-3 bg-green-300 border border-grey-400`}>{children}</th>
    );
};
export const Input = ({ label, ...props }) => {
    return (
        <div className="">
            <label htmlFor={label} className="block mb-2 text-black capitalize text-lg">{label}</label>
            <input {...props}
                className="border w-full px-2 py-1 rounded-lg focus:bg-blue-400"
                id={label} />
        </div>
    );
};

export const InputRadio = ({ label, ...props }) => {
    return (
        <div className="flex items-center">
            <input {...props} id={label} className="mt-1 mr-1" type="radio"/>
            <label htmlFor={label} className="capitalize">{label}</label>
        </div>
    );
};

export const Button = ({ label, className, ...props }) => {
    return (
        <button {...props} className={`border px-3 py-2 rounded-md text-white text-xs font-semibold ${className}`}>{label}</button>
    )
}
