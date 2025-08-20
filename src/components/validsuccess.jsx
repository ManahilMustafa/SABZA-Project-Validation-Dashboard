import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ValidationSuccessPage({ project }) {
  // Mock data for demonstration purposes if project is not passed
  const defaultSuccessProject = {
    name: "Validated Project Alpha",
    id: {
      provided: "solar_clean_1752955457061",
      blockchain: "solar_clean_1752955457061",
    },
    ipfsCid: {
      provided: "QmMockdb34070e427d937a17070c677d319b9134c9101c6",
      blockchain: "QmMockdb34070e427d937a17070c677d319b9134c9101c6",
    },
    expectedHash: {
      provided: "b3687d8a78370f7d0a7087e076d8719b89134c9101c6f798957312d0e366",
      blockchain:
        "b3687d8a78370f7d0a7087e076d8719b89134c9101c6f798957312d0e366",
      sepoliaExplorerLink: "#", // Placeholder for actual Sepolia link
    },
    readForTokenization: "Pending",
    sabzaValidated: "Yes",
    verificationDetails: true, // Indicates if verification details are available
  };

  const currentProject = project || defaultSuccessProject;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-6">
        <Card className="border border-gray-200 shadow-sm">
          <CardContent className="p-6 space-y-6">
            <div className="bg-green-100 p-4 rounded-lg flex items-center gap-2">
              <span className="text-green-600 text-2xl">✅</span>
              <p className="text-green-800 font-semibold text-xl">
                VERIFICATION SUCCESSFUL!
              </p>
            </div>

            <p className="text-gray-700 mt-4">
              <strong className="font-semibold">Read for Tokenization:</strong>{" "}
              {currentProject.readForTokenization}
            </p>
            <p className="text-gray-700">
              <strong className="font-semibold">SABZA Validated:</strong>{" "}
              {currentProject.sabzaValidated}
            </p>

            {currentProject.verificationDetails && (
              <div className="bg-green-50 p-4 rounded-lg space-y-4">
                <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                  <span className="text-green-600">✅</span> Verification
                  Details
                </h4>

                <div>
                  <p className="text-sm font-medium text-gray-700">
                    Project ID
                  </p>
                  <p className="text-gray-900 font-mono text-xs break-all">
                    Provided: {currentProject.id.provided}
                  </p>
                  <p className="text-gray-900 font-mono text-xs break-all">
                    Blockchain: {currentProject.id.blockchain}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-700">IPFS CID</p>
                  <p className="text-gray-900 font-mono text-xs break-all">
                    Provided: {currentProject.ipfsCid.provided}
                  </p>
                  <p className="text-gray-900 font-mono text-xs break-all">
                    Blockchain: {currentProject.ipfsCid.blockchain}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-700">
                    Expected Hash
                  </p>
                  <p className="text-gray-900 font-mono text-xs break-all">
                    Provided: {currentProject.expectedHash.provided}
                  </p>
                  <p className="text-gray-900 font-mono text-xs break-all">
                    Blockchain: {currentProject.expectedHash.blockchain}
                  </p>
                  {currentProject.expectedHash.sepoliaExplorerLink && (
                    <a
                      href={currentProject.expectedHash.sepoliaExplorerLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 text-sm hover:underline mt-1 block"
                    >
                      View on Sepolia Explorer
                    </a>
                  )}
                </div>
              </div>
            )}

            <div className="bg-green-100 p-4 rounded-lg flex items-center gap-2">
              <span className="text-green-600">✅</span>
              <p className="text-green-800 font-semibold">
                Project verified successfully!
              </p>
            </div>
            <p className="text-gray-700 text-sm">
              All provided data matches the blockchain records. This project has
              been validated by SABZA.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
              <Button className="bg-blue-600 text-white hover:bg-blue-700">
                View Full Project Details
              </Button>
              <Button className="bg-blue-600 text-white hover:bg-blue-700">
                View IPFS Document
              </Button>
              <Button className="bg-blue-600 text-white hover:bg-blue-700">
                Verify On Blockchain Explorer
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
