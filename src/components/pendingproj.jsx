import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PendingValidationPage({ project }) {
  // Mock data for demonstration purposes if project is not passed
  const defaultPendingProject = {
    name: "Pending Project A",
    id: "PEND-PROJ-001",
    sabzaValidator: "0x0000000000000000000000000000000000000000",
    projectStatus: "Pending",
    expectedHash: "b3687d8a78370f7d0a7087e076d8719b89134c9101c6",
    actualHash: "Not calculated yet",
    ipfsDocument: "QrnMockdb34070e427d937a17070c677d319b9134c9101c6",
    verificationStatus: "FAILED", // For the image shown
  };

  const currentProject = project || defaultPendingProject;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Pending SABZA Validation
        </h2>
        <Button className="bg-blue-600 text-white hover:bg-blue-700 mx-auto block">
          Refresh Pending Projects
        </Button>

        <Card className="border border-gray-200 shadow-sm mt-8">
          <CardHeader className="border-b border-gray-100 p-6">
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <span role="img" aria-label="alert">
                ⚠️
              </span>{" "}
              Blockchain Proof Verification Results
            </h3>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <p className="text-sm font-semibold text-gray-700">
                  Verification Status
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-red-600">❌</span>
                  <p className="text-red-700 font-semibold">
                    {currentProject.verificationStatus}
                  </p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <p className="text-sm font-semibold text-gray-700">
                  SABZA Validator
                </p>
                <p className="text-gray-900 font-mono text-xs break-all mt-2">
                  {currentProject.sabzaValidator}
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <p className="text-sm font-semibold text-gray-700">
                  Project Status
                </p>
                <p className="text-gray-900 mt-2">
                  {currentProject.projectStatus}
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 space-y-3">
                <div>
                  <p className="text-sm font-semibold text-gray-700">
                    Expected Hash (Project Owner)
                  </p>
                  <p className="text-gray-900 font-mono text-xs break-all mt-1">
                    {currentProject.expectedHash}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-700">
                    Actual Hash (SABZA Calculated)
                  </p>
                  <p className="text-gray-900 font-mono text-xs break-all mt-1">
                    {currentProject.actualHash}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <p className="text-sm font-semibold text-gray-700">
                IPFS Document
              </p>
              <p className="text-blue-600 font-mono text-sm break-all cursor-pointer hover:underline mt-2">
                {currentProject.ipfsDocument}
              </p>
            </div>

            <div className="bg-red-50 text-red-800 p-4 rounded-lg flex items-center gap-2">
              <span role="img" aria-label="error">
                ❌
              </span>
              <p className="font-semibold">Proof Verification Failed</p>
            </div>
            <p className="text-gray-700 text-sm">
              This project failed cryptographic validation. The document may
              have been tempered with or validation is incomplete.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
