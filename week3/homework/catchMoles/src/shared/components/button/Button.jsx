const Button = ({ 
  color = "blue", 
  isActive = false, 
  onClick, 
  children, 
  className = "", 
  ...props 
}) => {

  const colorStyles = {
    blue: {
      active: "bg-blue-400 border-blue-400 text-white hover:bg-blue-300",
      inactive: "bg-transparent border-blue-400 text-blue-400 hover:bg-blue-300"
    },
    red: "bg-red-500 hover:bg-red-600 border-red-500 text-white ",
    green: "bg-green-500 hover:bg-green-600 border-green-500 text-white ",
    pink: "bg-pink-500 hover:bg-pink-600 border-pink-500 text-white ",
  };

  const currentColor = isActive ? colorStyles[color].active : colorStyles[color].inactive;

  const baseStyles = "items-center rounded-full px-2 py-1 text-sm border-2 cursor-pointer";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseStyles} ${colorStyles[color]} ${currentColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;