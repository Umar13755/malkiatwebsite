"use client";

export default function ConfirmPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 px-4">
      <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-green-400 mb-4">
          Thank You for Booking an Appointment!
        </h1>
        <p className="text-gray-300 text-lg text-center mb-6">
          Our team will shortly contact you to schedule your appointment. 
        </p>
        <p className="text-gray-300 text-lg text-center mb-8">
          Please feel free to reach out if you have any questions or need further assistance.
        </p>

      </div>
    </div>
  );
}
