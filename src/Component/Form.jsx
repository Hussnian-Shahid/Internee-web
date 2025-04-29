import React, { useEffect } from "react";

const Form = ({ closeForm }) => {
  const data = [
    {
      id: 1,
      placeholder: "Full Name",
    },
    {
      id: 2,
      placeholder: "Father Name",
    },
    {
      id: 3,
      placeholder: "0320-1234567",
    },
    {
      id: 4,
      placeholder: "CNIC",
    },
    {
      id: 5,
      placeholder: "Adress",
    },
    {
      id: 6,
      placeholder: "Institue",
    },
    {
      id: 7,
      placeholder: "Working Experience",
    },
    {
      id: 8,
      placeholder: "Your Past Project URL",
    },
    {
      id: 9,
      placeholder: "Where did you hear about internee.pk",
    },
    {
      id: 10,
      placeholder: "What Do You Expect From Us",
    },
  ];

  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // Close modal when clicking Escape key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) closeForm();
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [closeForm]);

  return (
    // Modal overlay - fixed position covering the entire screen with semi-transparency
    <div className="fixed inset-0 flex items-center justify-center h-screen bg-opacity-50 z-50 px-4 py-6 overflow-y-auto">
      {/* Modal container - positioned in the center */}
      <div className="bg-white w-full sm:w-[90%] md:w-[600px] lg:w-[500px] max-h-[90vh] rounded-2xl shadow-xl">
        {/* Form content */}
        <div className="bg-[#f3f4f6] rounded-2xl p-4 sm:p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="text-xl sm:text-2xl font-bold">
              Apply for Internship
            </div>

            {/* Close button */}
            <div>
              <svg
                onClick={closeForm}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 cursor-pointer text-black hover:text-gray-600"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </div>
          </div>

          {/* Scrollable form content */}
          <div className="overflow-y-auto max-h-[50vh] sm:max-h-[60vh] pr-1 sm:pr-2">
            {data.map((dat) => (
              <div key={dat.id} className="py-2">
                <input
                  type="text"
                  className="px-3 sm:px-4 w-full bg-white py-2 text-base sm:text-lg border-[1px] border-primary outline-0 rounded"
                  placeholder={dat.placeholder}
                />
              </div>
            ))}

            {/* Upload resume */}
            <div className="mt-2">
              <div className="font-bold text-base sm:text-lg py-2 sm:py-3">
                Upload Resume File *
              </div>
              <label className="bg-bg-primary border-primary border-dashed border-[2px] flex justify-center items-center w-full text-center py-3 sm:py-4 cursor-pointer rounded">
                <span className="font-semibold text-sm sm:text-base">
                  Click to Upload the resume
                </span>
                <input type="file" className="hidden" />
              </label>
            </div>

            {/* Upload payment screenshot */}
            <div className="mt-3 sm:mt-4">
              <div className="font-bold text-base sm:text-lg py-2 sm:py-3">
                Upload Payment Screenshot *
              </div>
              <label className="bg-bg-primary border-primary border-dashed border-[2px] flex justify-center items-center w-full text-center py-3 sm:py-4 cursor-pointer rounded">
                <span className="font-semibold text-sm sm:text-base">
                  Click to Upload the Payment screenshot
                </span>
                <input type="file" className="hidden" />
              </label>
            </div>

            {/* Payment info */}
            <div className="px-3 py-3 mt-4 sm:mt-5 border-[1px] border-primary rounded">
              <div className="text-primary text-base sm:text-lg font-semibold">
                Payment Section | 500PKR or 5$
              </div>

              <div className="text-xs sm:text-sm text-shadow-gray-950">
                <div>Meezan Bank: 99430106993383 (IBAN:</div>
                <div>PK86MEZN0099430106993383)</div>
                <div>SadaPay: 03453191638 (IBAN: PK94SADA0000003453191638)</div>
                <div>EasyPaisa: 03432086595 (MUHAMMAD HAMMAD SHEIKH)</div>
                <div className="text-red-700 font-bold">
                  Note: You can enroll in only one internship at a time.
                </div>
              </div>
            </div>
          </div>

          {/* Submit button */}
          <button
            onClick={closeForm}
            className="bg-primary text-center cursor-pointer hover:bg-secondry text-white text-base sm:text-lg font-semibold w-full py-2 sm:py-3 mt-4 rounded"
          >
            Submit Application
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
