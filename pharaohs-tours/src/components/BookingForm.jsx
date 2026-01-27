import { useState } from "react";
import {
  Calendar,
  Users,
  Bed,
  FileText,
  User,
  Phone,
  Mail,
  Landmark,
  Smartphone,
  ArrowLeft,
  ArrowRight,
  Upload,
  DollarSign,
} from "lucide-react";

const BookingForm = ({ tour }) => {
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    children: 0,
    roomType: "Standard",
    notes: "",
    fullName: "",
    phone: "",
    email: "",
  });
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [receiptFile, setReceiptFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const calculateNights = () => {
    if (formData.checkIn && formData.checkOut) {
      const checkInDate = new Date(formData.checkIn);
      const checkOutDate = new Date(formData.checkOut);
      const diffTime = checkOutDate - checkInDate;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays > 0 ? diffDays : 0;
    }
    return 0;
  };

  const calculateTotal = () => {
    const nights = calculateNights();
    const basePrice = tour.packages[0]?.price || 0;
    const childrenCost = formData.children * 50; // Assume $50 per child
    return basePrice * nights + childrenCost;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Booking for ${tour.title} submitted! Details: ${JSON.stringify(formData)}`,
    );
  };

  const isStep1Valid = formData.fullName.trim() && formData.phone.trim();

  const handleNextToStep2 = () => {
    if (isStep1Valid) {
      setStep(2);
    }
  };

  const handleNextToStep3 = () => {
    if (paymentMethod) {
      setStep(3);
    }
  };

  const handleBackToStep1 = () => setStep(1);
  const handleBackToStep2 = () => setStep(2);

  const handleFileChange = (e) => {
    setReceiptFile(e.target.files[0]);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Step 1: Customer Information */}
      {step === 1 && (
        <div className="bg-white p-6 rounded-2xl shadow-sm mb-6 border border-gray-100">
          <h2 className="text-xl font-semibold text-[#0B0B0B] mb-6">
            Step 1: Customer Information
          </h2>

          {/* Booking Inputs */}
          <div className="mb-8">
            <h3 className="text-base font-semibold text-[#0B0B0B] mb-4">
              Booking Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Check-in */}
              <div>
                <label className="text-sm text-[#7A7A7A] mb-1 flex items-center gap-2">
                  <Calendar size={14} className="text-[#C9A24D]" />
                  Check-in
                </label>
                <input
                  type="date"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-md border border-gray-200 focus:ring-1 focus:ring-[#C9A24D]"
                />
              </div>

              {/* Check-out */}
              <div>
                <label className="text-sm text-[#7A7A7A] mb-1 flex items-center gap-2">
                  <Calendar size={14} className="text-[#C9A24D]" />
                  Check-out
                </label>
                <input
                  type="date"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-md border border-gray-200 focus:ring-1 focus:ring-[#C9A24D]"
                />
              </div>

              {/* Children */}
              <div>
                <label className="text-sm text-[#7A7A7A] mb-1 flex items-center gap-2">
                  <Users size={14} className="text-[#C9A24D]" />
                  Children
                </label>
                <input
                  type="number"
                  name="children"
                  min="0"
                  value={formData.children}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-md border border-gray-200 focus:ring-1 focus:ring-[#C9A24D]"
                />
              </div>

              {/* Room */}
              <div>
                <label className="text-sm text-[#7A7A7A] mb-1 flex items-center gap-2">
                  <Bed size={14} className="text-[#C9A24D]" />
                  Room Type
                </label>
                <select
                  name="roomType"
                  value={formData.roomType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-md border border-gray-200 focus:ring-1 focus:ring-[#C9A24D]"
                >
                  <option>Standard</option>
                  <option>Deluxe</option>
                  <option>Suite</option>
                </select>
              </div>
            </div>

            {/* Notes */}
            <div className="mt-4">
              <label className="text-sm text-[#7A7A7A] mb-1 flex items-center gap-2">
                <FileText size={14} className="text-[#C9A24D]" />
                Notes / Requests
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows="3"
                className="w-full px-3 py-2 rounded-md border border-gray-200 focus:ring-1 focus:ring-[#C9A24D]"
              />
            </div>
          </div>

          {/* Customer Info */}
          <div className="mb-8">
            <h3 className="text-base font-semibold text-[#0B0B0B] mb-4">
              Customer Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="px-3 py-2 border rounded-md"
              />
              <input
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="px-3 py-2 border rounded-md"
              />
            </div>

            <input
              name="email"
              placeholder="Email (optional)"
              value={formData.email}
              onChange={handleChange}
              className="mt-4 w-full px-3 py-2 border rounded-md"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end">
            <button
              disabled={!isStep1Valid}
              onClick={handleNextToStep2}
              className="
          px-6 py-2.5 rounded-full
          bg-[#C9A24D] text-[#0B0B0B] font-semibold
          hover:-translate-y-0.5 hover:shadow-lg
          transition-all
        "
            >
              Next: Payment Method{" "}
              <ArrowRight size={16} className="inline ml-1" />
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Choose Payment Method */}
      {step === 2 && (
        <div className="bg-white p-6 rounded-2xl shadow-sm mb-6 border border-gray-100">
          <h2 className="text-xl font-semibold text-[#0B0B0B] mb-6">
            Step 2: Choose Payment Method
          </h2>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {/* Bank */}
            <div
              onClick={() => setPaymentMethod("bank")}
              className={`
          p-5 rounded-xl cursor-pointer border
          transition-all
          ${
            paymentMethod === "bank"
              ? "border-[#C9A24D] bg-[#C9A24D]/10"
              : "border-gray-200 hover:border-[#C9A24D]"
          }
        `}
            >
              <Landmark className="text-[#C9A24D] mb-2" />
              <h4 className="font-semibold text-[#0B0B0B]">Bank Transfer</h4>
              <p className="text-sm text-[#7A7A7A]">
                Transfer directly to our bank account.
              </p>
            </div>

            {/* InstaPay */}
            <div
              onClick={() => setPaymentMethod("instapay")}
              className={`
          p-5 rounded-xl cursor-pointer border
          transition-all
          ${
            paymentMethod === "instapay"
              ? "border-[#C9A24D] bg-[#C9A24D]/10"
              : "border-gray-200 hover:border-[#C9A24D]"
          }
        `}
            >
              <Smartphone className="text-[#C9A24D] mb-2" />
              <h4 className="font-semibold text-[#0B0B0B]">InstaPay</h4>
              <p className="text-sm text-[#7A7A7A]">
                Instant mobile transfer via InstaPay.
              </p>
            </div>
          </div>

          <div className="flex justify-between">
            <button
              onClick={handleBackToStep1}
              className="text-[#7A7A7A] hover:text-[#0B0B0B]"
            >
              <ArrowLeft size={16} className="inline mr-1" />
              Back
            </button>

            <button
              disabled={!paymentMethod}
              onClick={handleNextToStep3}
              className="px-6 py-2.5 rounded-full bg-[#C9A24D] font-semibold"
            >
              Continue <ArrowRight size={16} className="inline ml-1" />
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Payment Details */}
      {step === 3 && (
        <div className="bg-white p-6 rounded-2xl shadow-sm mb-6 border border-gray-100">
          <h2 className="text-xl font-semibold text-[#0B0B0B] mb-6">
            Step 3: Payment Details
          </h2>

          {/* Notice */}
          <div className="mb-6 flex items-start gap-3 p-4 rounded-xl bg-[#C9A24D]/10">
            <DollarSign size={18} className="text-[#C9A24D] mt-0.5" />
            <p className="text-sm text-[#0B0B0B]">
              Please complete the payment using your selected method and upload
              the receipt below. Your booking will be confirmed after
              verification.
            </p>
          </div>

          {/* BANK TRANSFER */}
          {paymentMethod === "bank" && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-[#0B0B0B] mb-4 flex items-center gap-2">
                <Landmark size={18} className="text-[#C9A24D]" />
                Bank Transfer Details
              </h3>

              <div className="grid md:grid-cols-2 gap-4 bg-gray-50 rounded-xl p-4 mb-4 text-sm">
                <div>
                  <span className="text-[#7A7A7A]">Bank Name</span>
                  <br />
                  National Bank of Egypt
                </div>
                <div>
                  <span className="text-[#7A7A7A]">Account Name</span>
                  <br />
                  Pharaohs Tours Ltd.
                </div>
                <div>
                  <span className="text-[#7A7A7A]">Account Number</span>
                  <br />
                  1234567890
                </div>
                <div>
                  <span className="text-[#7A7A7A]">IBAN</span>
                  <br />
                  EG12345678901234567890
                </div>
                <div>
                  <span className="text-[#7A7A7A]">Contact Phone</span>
                  <br />
                  +20 123 456 7890
                </div>
                <div className="font-semibold text-[#C9A24D]">
                  Amount: ${calculateTotal()}
                </div>
              </div>

              <ol className="list-decimal list-inside text-sm text-[#7A7A7A] space-y-1">
                <li>Log in to your banking app</li>
                <li>Transfer the exact amount</li>
                <li>Save the payment receipt</li>
              </ol>
            </div>
          )}

          {/* INSTAPAY */}
          {paymentMethod === "instapay" && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-[#0B0B0B] mb-4 flex items-center gap-2">
                <Smartphone size={18} className="text-[#C9A24D]" />
                InstaPay Details
              </h3>

              <div className="bg-gray-50 rounded-xl p-4 mb-4 text-sm space-y-2">
                <div>
                  <span className="text-[#7A7A7A]">InstaPay Number</span>
                  <br />
                  01234567890
                </div>
                <div className="font-semibold text-[#C9A24D]">
                  Amount: ${calculateTotal()}
                </div>
              </div>

              <ol className="list-decimal list-inside text-sm text-[#7A7A7A] space-y-1">
                <li>Open InstaPay app</li>
                <li>Send the exact amount</li>
                <li>Save the receipt screenshot</li>
              </ol>
            </div>
          )}

          {/* PRICE SUMMARY */}
          <div className="mb-8 rounded-xl border border-gray-100 p-5">
            <h3 className="text-lg font-semibold text-[#0B0B0B] mb-4">
              Price Summary
            </h3>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-[#7A7A7A]">Nights</span>
                <span>{calculateNights()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#7A7A7A]">Children</span>
                <span>{formData.children}</span>
              </div>
              <div className="flex justify-between font-semibold text-[#C9A24D] text-base pt-2 border-t">
                <span>Total (USD)</span>
                <span>${calculateTotal()}</span>
              </div>
            </div>
          </div>

          {/* RECEIPT UPLOAD */}
          <div className="mb-8">
            <label className="text-sm text-[#7A7A7A] mb-2 flex items-center gap-2">
              <Upload size={16} className="text-[#C9A24D]" />
              Upload Payment Receipt
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full px-3 py-2 border border-gray-200 rounded-md"
            />
            <p className="text-xs text-[#7A7A7A] mt-1">
              Upload a clear image of your payment receipt.
            </p>
          </div>

          {/* ACTIONS */}
          <div className="flex justify-between items-center">
            <button
              onClick={handleBackToStep2}
              className="text-[#7A7A7A] hover:text-[#0B0B0B]"
            >
              <ArrowLeft size={16} className="inline mr-1" />
              Back
            </button>

            <button
              onClick={handleSubmit}
              className="
          px-7 py-2.5 rounded-full
          bg-[#C9A24D] text-[#0B0B0B] font-semibold
          transition-all duration-300
          hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20
        "
            >
              Complete Booking
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
