"use client";

import ConfirmPage from "@/components/ConfirmPage";
import Navbar from "@/components/Navbar";
import TextInput from "@/components/ui/TextInput";
import { useForm, ValidationError } from "@formspree/react";

export default function Booking() {
  const [state, handleSubmit] = useForm("myzyygjl"); // use the Formspree ID without the URL

  if (state.succeeded) {
    return <ConfirmPage />;
  }

  const visaType = [
    { value: "Study Visa", label: "Study Visa" },
    { value: "Tourist Visa", label: "Tourist Visa" },
    { value: "Work Visa", label: "Work Visa" },
    { value: "Immigration Visa", label: "Immigration Visa" },
  ];

  const Countries = [
    { value: "USA", label: "United States" },
    { value: "Canada", label: "Canada" },
    { value: "Uk", label: "United Kingdom" },
    { value: "Australia", label: "Australia" },
    { value: "Germany", label: "Germany" },
    { value: "France", label: "France" },
    { value: "Italy", label: "Italy" },
    { value: "Spain", label: "Spain" },
    { value: "Belgium", label: "Belgium" },
    { value: "Latvia", label: "Latvia" },
    { value: "Lithuania", label: "Lithuania" },
    { value: "Malta", label: "Malta" },
    { value: "Poland", label: "Poland" },
    { value: "Georgia", label: "Georgia" },
    { value: "Cyprus", label: "Cyprus" },
  ];

  return (
    <div className="px-5 lg:px-20">
      <Navbar />

      <div className="text-center font-semibold py-10 text-red-500 text-2xl">
        <h2>Schedule Your Appointment Today</h2>
        <p className="text-white font-normal opacity-70 py-1 text-sm">
          Please provide accurate information to ensure we can contact you with
          all the necessary appointment details.
        </p>
      </div>

      <div className="flex items-center justify-center py-5">
        <div className="bg-[#1c1c1c] bg-opacity-80 backdrop-blur-lg shadow-lg overflow-hidden relative w-full lg:w-3/4 rounded-lg p-6">
          <h1 className="text-2xl font-semibold mb-7 text-gray-200 text-center">
            Appointment Form
          </h1>

          <form
            onSubmit={handleSubmit}
            className="grid sm:grid-cols-2 grid-cols-1 gap-x-8 gap-y-5 my-6"
          >
            <TextInput id="Name" name="Name" label="Full Name" placeholder="" />

            <TextInput
              id="Email"
              name="Email"
              label="Email Address"
              placeholder=""
            />
            <TextInput
              id="address"
              name="Address"
              label="Address"
              placeholder=""
            />
            <TextInput
              id="Number"
              name="Number"
              label="Phone Number"
              placeholder=""
            />
            <div className="">
              <label className="font-semibold text-sm">Select Visa Type</label>
              <select
                id="Visa"
                name="Visa"
                className="mt-1 cursor-pointer w-full px-4 py-3 border text-gray-200 border-gray-700 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-transparent transition-colors duration-300"
              >
                <option value="" disabled>
                  Select Visa Type
                </option>
                {visaType.map((visa) => (
                  <option key={visa.value} value={visa.value}>
                    {visa.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="">
              <label className="font-semibold text-sm">Select Country</label>
              <select
                id="Country"
                name="Country"
                className="mt-1 cursor-pointer w-full px-4 py-3 border text-gray-200 border-gray-700 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-transparent transition-colors duration-300"
              >
                <option value="" disabled>
                  Select Interested Country
                </option>
                {Countries.map((country) => (
                  <option key={country.value} value={country.value}>
                    {country.label}
                  </option>
                ))}
              </select>
              <ValidationError
                prefix="Country"
                field="country"
                errors={state.errors}
              />
            </div>

            <div className="flex justify-center lg:col-span-2 mt-4">
              <button
                className="sm:w-64 w-full relative inline-flex items-center justify-center px-6 py-2 overflow-hidden text-lg font-medium text-red-600 transition duration-300 ease-out border-2 border-red-600 rounded-lg shadow-md group hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
                type="submit"
                disabled={state.submitting}
              >
                <span className="absolute left-0 block w-0 h-1 transition-all duration-300 ease-out bg-red-500 group-hover:w-full" />
                <span className="absolute right-0 block w-0 h-1 transition-all duration-300 ease-out bg-red-500 group-hover:left-0 group-hover:w-full" />
                <span className="relative">
                  {state.submitting ? "Submitting..." : "Submit"}
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
