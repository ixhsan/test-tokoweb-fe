import React from "react";

const DownloadButton = ({ onClick }: { onClick?: () => void }) => {
  return (
    <button
      className="text-center px-8 py-3 bg-primary text-white text-md rounded-md"
      onClick={onClick}
    >
      Download
    </button>
  );
};

export default DownloadButton;
