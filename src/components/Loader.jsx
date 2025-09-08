import React from "react";
import { BeatLoader } from "react-spinners";

function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/90 z-50">
      <BeatLoader color="#4f46e5" size={20} speedMultiplier={0.5} />
    </div>
  );
}

export default Loader;
