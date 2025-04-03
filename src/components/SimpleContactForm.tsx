import React, { useState } from "react";
import { Calendar, Mail, Phone, User } from "lucide-react";

interface SimpleContactFormProps {
  formTitle?: string;
  serviceName?: string;
  successMessage?: string;
  apiEndpoint?: string;
  includeDate?: boolean;
}

const SimpleContactForm: React.FC<SimpleContactFormProps> = ({
  formTitle = "Request a Free Quote",
  serviceName = "Drywall",
  successMessage = "Thank you! We've received your request and will contact you shortly.",
  apiEndpoint = "/api/drywall_email",
  includeDate = true,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    projectDetails: "",
    preferredDate: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Add to Monday.com board
      try {
        const mondayData = {
          name: formData.name,
          date_Mjj7SnLm: new Date().toISOString(),
          lead_status: "New Lead",
          status_1_Mjj7KSmv: "Form Drywall",
          text_Mjj7Hg3c: `Project details: ${formData.projectDetails}, Preferred date: ${formData.preferredDate}`,
          numbers_Mjj7fpib: 0,
          job_location_mkm418ra: formData.address,
          lead_phone: formData.phone,
          lead_email: formData.email,
          status_1_Mjj77YUc: "Drywall Repair",
          status_1_Mjj7Dz0C: "No Payment Due",
          status_1_Mjj7nPIN: "Not Insurance",
        };

        fetch("/api/monday", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(mondayData),
        });
      } catch (e) {
        console.warn("Error sending to Monday.com:", e);
        // Continue with email even if Monday fails
      }

      // Send email
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          serviceType: serviceName,
        }),
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({
          name: "",
          phone: "",
          email: "",
          address: "",
          projectDetails: "",
          preferredDate: "",
        });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit form");
      }
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "An unexpected error occurred"
      );
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showSuccess) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Request Received!
        </h3>
        <p className="text-gray-600 mb-6">{successMessage}</p>
        <button
          onClick={() => setShowSuccess(false)}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">{formTitle}</h3>

      {error && (
        <div className="bg-red-50 text-red-800 p-4 rounded-md mb-6">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <User className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="pl-10 py-3 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
          />
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Phone className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={handleChange}
            className="pl-10 py-3 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
          />
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
            className="pl-10 py-3 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
          />
        </div>

        <input
          type="text"
          name="address"
          placeholder="Property Address"
          required
          value={formData.address}
          onChange={handleChange}
          className="py-3 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
        />

        {includeDate && (
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Calendar className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="date"
              name="preferredDate"
              placeholder="Preferred Start Date"
              value={formData.preferredDate}
              onChange={handleChange}
              className="pl-10 py-3 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
            />
          </div>
        )}

        <textarea
          name="projectDetails"
          placeholder="Project Details (optional)"
          value={formData.projectDetails}
          onChange={handleChange}
          rows={4}
          className="py-3 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-6 text-white bg-gray-900 rounded-lg font-semibold ${
            isSubmitting ? "opacity-75 cursor-not-allowed" : "hover:bg-gray-800"
          }`}
        >
          {isSubmitting ? "Submitting..." : "Get Your Free Quote"}
        </button>
      </form>
    </div>
  );
};

export default SimpleContactForm;
