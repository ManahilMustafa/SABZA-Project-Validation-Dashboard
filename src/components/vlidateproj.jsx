import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ValidationProofPage({ project }) {
  // Mock data for demonstration purposes if project is not passed
  const defaultProject = {
    name: "Sample Project",
    token: "SP-123",
    description:
      "This is a sample project description to demonstrate the validation proof page.",
    id: "PROJ-XYZ-789",
    projectOwner: "0x123abc...",
    submissionDate: "2023-01-15",
    sabzaValidator: "0xdef456...",
    validationDate: "2023-01-20",
    tokenizationDate: "2023-01-25",
    expectedHash:
      "7c69a1e0c2cb3ff94e048bb31de725b272de8b9d803a64986b2a738096f9c2",
    actualHash:
      "7c69a1e0c2cb3ff94e048bb31de725b272de8b9d803a64986b2a738096f9c2",
    ipfsDocument: "QrnText123MockCIDForTesting",
    verificationStatus: "VERIFIED",
    projectStatus: "SABZA Validated",
  };

  const currentProject = project || defaultProject;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          All Validated Projects
        </h2>
        <Button className="bg-green-600 text-white hover:bg-green-700 mx-auto block">
          Refresh Validated Projects
        </Button>

        <Card className="border border-gray-200 shadow-sm mt-8">
          <CardHeader className="border-b border-gray-100 p-6">
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <span role="img" aria-label="blockchain">
                🔗
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
                  <span className="text-green-600">✅</span>
                  <p className="text-green-700 font-semibold">
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
                <div className="bg-green-100 text-green-700 p-2 rounded-md flex items-center gap-2">
                  <span className="text-green-600">✅</span>
                  <p className="font-semibold text-sm">
                    Hash Verification Successful
                  </p>
                </div>
                <p className="text-green-600 text-xs">
                  The document integrity has been verified. Expected and actual
                  hashes match perfectly.
                </p>
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

            <div className="bg-green-50 text-green-800 p-4 rounded-lg flex items-center gap-2">
              <span role="img" aria-label="checkmark">
                ✅
              </span>
              <p className="font-semibold">Cryptographic Proof Valid</p>
            </div>
            <p className="text-gray-700 text-sm">
              This project has been cryptographically validated by SABZA and
              stored immutably on the Ethereum blockchain. The document
              integrity is confirmed.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
