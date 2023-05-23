import React from "react";

const InformasiKontak = () => {
  return (
    <div className="flex flex-col flex-wrap gap-4 w-1/2 break-all min-w-[20vw]">
      <h4 className="text-md sm:text-lg font-bold">Informasi kontak</h4>
      <div className="flex flex-col gap-2 flex-wrap text-md text-gray-400 font-gilroy">
        <p>0821-9797-1227</p>
        <p>0812-9797-1227</p>
        <p className="break-words">Jbgtranshipping@gmail.com</p>
      </div>
    </div>
  );
};

export default InformasiKontak;
