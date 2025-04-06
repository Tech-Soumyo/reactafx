// src/components/Loader.jsx
import loaderImage from "../../assets/logo-skeleton.png"; // Replace with your loader image

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#3a1f8d] z-50">
      <img
        src={loaderImage}
        alt="Loading..."
        className="w-96 h-96 object-contain animate-spin" // Adjust size as needed
      />
    </div>
  );
};

export default Loader;
