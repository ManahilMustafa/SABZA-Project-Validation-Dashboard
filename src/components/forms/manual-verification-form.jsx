import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ValidationSuccessPage from "../validsuccess";

export function ManualVerificationForm() {
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      projectId: formData.get("projectId"),
      ipfsUrl: formData.get("ipfsUrl"),
      sha256Hash: formData.get("sha256Hash"),
    };

    // simulate submission to smart contract
    setSubmittedData(data);
  };

  return (
    <Card className="border border-gray-200 shadow-sm bg-white">
      <CardHeader className="border-b border-gray-100 bg-white">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">✓</span>
          </div>
          <div>
            <CardTitle className="text-xl font-bold text-gray-900">
              Submit Project for Manual Verification
            </CardTitle>
            <p className="text-sm text-gray-500 mt-1">
              Securely submit your project data to the blockchain for
              verification.
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-8">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Project ID Field */}
            <div className="space-y-2">
              <label
                htmlFor="projectId"
                className="block text-sm font-medium text-gray-700"
              >
                Project ID <span className="text-red-500">*</span>
              </label>
              <Input
                id="projectId"
                name="projectId"
                placeholder="e.g., PROJ001"
                className="h-12 border border-gray-300 focus:border-green-500 focus:ring-green-100 transition-all duration-200"
                required
              />
            </div>

            {/* IPFS URL Field */}
            <div className="space-y-2">
              <label
                htmlFor="ipfsUrl"
                className="block text-sm font-medium text-gray-700"
              >
                IPFS URL <span className="text-red-500">*</span>
              </label>
              <Input
                id="ipfsUrl"
                name="ipfsUrl"
                placeholder="ipfs://Qm..."
                className="h-12 border border-gray-300 focus:border-green-500 focus:ring-green-100 transition-all duration-200"
                required
              />
            </div>
          </div>

          {/* SHA-256 Hash Field */}
          <div className="space-y-2">
            <label
              htmlFor="sha256Hash"
              className="block text-sm font-medium text-gray-700"
            >
              SHA-256 Metadata Hash <span className="text-red-500">*</span>
            </label>
            <Input
              id="sha256Hash"
              name="sha256Hash"
              placeholder="e.g., 7b3a0c2f0..."
              className="h-12 border border-gray-300 focus:border-green-500 focus:ring-green-100 font-mono text-sm transition-all duration-200"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <Button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 h-auto text-base font-semibold rounded-lg shadow hover:shadow-md transform hover:scale-105 transition-all duration-200"
            >
              Search / Verify
            </Button>
          </div>
        </form>

        {/* Show results after submission */}
        {submittedData && <ValidationSuccessPage />}
      </CardContent>
    </Card>
  );
}
