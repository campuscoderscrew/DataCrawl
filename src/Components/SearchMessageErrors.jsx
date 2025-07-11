import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

function SearchMessageErrors(props) {
  return (
    <div>
      {props.errors.length > 0 && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 font-[Helvetica] bg-black/50"
          onClick={props.onClose}
        >
          <div
            className="bg-[#1a1a1a] text-red-600 min-h-95 min-w-75 py-10 p-10 rounded-lg shadow-2xl flex flex-col items-center gap-6 relative z-51"
            onClick={(e) => e.stopPropagation()}
          >
            <h1 className="font-bold text-center">
              Unable to generate results for the following reasons
            </h1>
            <div className="flex flex-col items-start gap-3">
              {props.errors.map((err, i) => (
                <div key={i}>{err}</div>
              ))}
            </div>
            <button
              onClick={props.onClose}
              className="text-2xl font-bold absolute bottom-4 hover:text-red-800 "
            >
              <IoCloseCircleOutline />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchMessageErrors;
