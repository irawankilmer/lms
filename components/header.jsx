// components/Header.js
const Header = () => {
  return (
    <div className="relative h-48 bg-blue-600 flex items-center justify-center">
      <img
        src="/path/to/your/background-image.jpg"
        alt="Background"
        className="absolute h-full w-full object-cover opacity-50"
      />
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 rounded-lg bg-white shadow-md"
        />
      </div>
    </div>
  );
};

export default Header;
