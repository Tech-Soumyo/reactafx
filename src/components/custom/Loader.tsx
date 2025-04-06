import loaderImage from "../../assets/logo-skeleton.png";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <img
        src={loaderImage}
        alt="Loading..."
        className="w-96 h-96 object-contain animate-spin"
      />
    </div>
  );
};

export default Loader;
