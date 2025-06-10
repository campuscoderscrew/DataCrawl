import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

function SearchMessageErrors(props) {
  return (
    <div>
      {props.errors.length > 0 && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 font-[Helvetica]"
          onClick={props.onClose}
        >
          <div
            className="bg-black/60 text-red-600 w-70 h-80 py-10 rounded-lg shadow-2xl flex flex-col items-center gap-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h1 className="font-bold">Error</h1>
            <div>
              {props.errors.map((err, i) => (
                <div key={i}>{err}</div>
              ))}
            </div>
            <button
              onClick={props.onClose}
              className="text-2xl font-bold absolute bottom-4 "
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
