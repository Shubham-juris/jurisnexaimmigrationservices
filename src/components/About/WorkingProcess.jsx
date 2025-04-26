import { PhoneCall } from "lucide-react"; // or any icon library you prefer

export default function WorkingProcess() {
  return (
    <div className="bg-gray-50 py-16 px-4 md:px-10">
      <div className="bg-red-600 text-white rounded-lg p-8 flex flex-col md:flex-row items-center justify-between mb-20">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Let's Discuss & Start Visa Consultations</h2>
          <p className="text-white/80">Lorem ipsum dolor sit amet, consectetur notted adipiscin</p>
        </div>
        <button className="mt-6 md:mt-0 bg-white text-red-600 font-semibold py-3 px-6 rounded-md shadow hover:bg-gray-100 transition">
          Lets Get Started
        </button>
      </div>

      <div className="text-center mb-16">
        <h4 className="text-red-600 font-semibold mb-2 tracking-widest">WORKING PROCESS</h4>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          4 Step Follow You Can Get Your Visa Easily
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
        <div className="flex flex-col items-center">
          <div className="relative mb-6">
            <div className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center absolute -top-3 -left-3 text-sm font-bold">1</div>
            <div className="bg-white shadow-lg rounded-full w-20 h-20 flex items-center justify-center">
              <img src="/images/passport-icon.png" alt="Choose Service" className="w-10 h-10" />
            </div>
          </div>
          <h3 className="font-bold text-lg mb-2">Choose A Service</h3>
          <p className="text-gray-500 text-sm">In a free hour, when our power of choice is untrammeled</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative mb-6">
            <div className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center absolute -top-3 -left-3 text-sm font-bold">2</div>
            <div className="bg-white shadow-lg rounded-full w-20 h-20 flex items-center justify-center">
              <img src="/images/payment-icon.png" alt="Documents & Payments" className="w-10 h-10" />
            </div>
          </div>
          <h3 className="font-bold text-lg mb-2">Documents And Payments</h3>
          <p className="text-gray-500 text-sm">In a free hour, when our power of choice is untrammeled</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative mb-6">
            <div className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center absolute -top-3 -left-3 text-sm font-bold">3</div>
            <div className="bg-white shadow-lg rounded-full w-20 h-20 flex items-center justify-center">
              <img src="/images/meeting-icon.png" alt="Request Meeting" className="w-10 h-10" />
            </div>
          </div>
          <h3 className="font-bold text-lg mb-2">Request A Meeting</h3>
          <p className="text-gray-500 text-sm">In a free hour, when our power of choice is untrammeled</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative mb-6">
            <div className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center absolute -top-3 -left-3 text-sm font-bold">4</div>
            <div className="bg-white shadow-lg rounded-full w-20 h-20 flex items-center justify-center">
              <img src="/images/visa-icon.png" alt="Receive Visa" className="w-10 h-10" />
            </div>
          </div>
          <h3 className="font-bold text-lg mb-2">Receive Your Visa Now</h3>
          <p className="text-gray-500 text-sm">In a free hour, when our power of choice is untrammeled</p>
        </div>
      </div>
    </div>
  );
}
