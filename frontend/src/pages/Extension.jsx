import React from "react";
import { Download, Chrome, FolderOpen, Settings, RefreshCw, CheckCircle } from "lucide-react";

const ExtensionSetup = () => {
  const extensionDownloadLink = "https://drive.google.com/file/d/1tFTHLhabmnj0XfNgNHF-qtuOxBbMragI/view?usp=sharing"; // Replace with actual Drive link

  const steps = [
    {
      number: 1,
      title: "Download the Extension",
      description: "Click the download button below to get the extension ZIP file.",
      icon: Download,
      action: (
        <a
          href={extensionDownloadLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium shadow-lg hover:shadow-xl"
        >
          <Download className="w-5 h-5 mr-2" />
          Download Extension
        </a>
      ),
    },
    {
      number: 2,
      title: "Unzip the File",
      description: "Extract the downloaded ZIP file to a folder on your computer. Remember the folder location!",
      icon: FolderOpen,
      note: "⚠️ Important: You must unzip the file before proceeding to the next step.",
    },
    {
      number: 3,
      title: "Open Chrome Extensions",
      description: "Open Chrome and navigate to chrome://extensions or click the Extensions icon > Manage Extensions.",
      icon: Chrome,
    },
    {
      number: 4,
      title: "Enable Developer Mode",
      description: "Toggle the 'Developer mode' switch in the top right corner of the Extensions page.",
      icon: Settings,
    },
    {
      number: 5,
      title: "Load Unpacked Extension",
      description: "Click 'Load unpacked' button and select the folder named dist where you extracted the extension files.",
      icon: FolderOpen,
    },
    {
      number: 6,
      title: "Refresh Chrome",
      description: "Refresh your Chrome browser or restart it to ensure the extension is properly loaded.",
      icon: RefreshCw,
    },
    {
      number: 7,
      title: "Sign In to Extension",
      description: "Click on the extension icon in Chrome, sign in with your account credentials, and start recording!",
      icon: CheckCircle,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-100 rounded-full mb-4">
            <Chrome className="w-10 h-10 text-purple-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Install Our Beta Extension
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Follow these simple steps to install and use our Chrome extension for seamless audio recording directly from your browser.
          </p>
        </div>

        {/* Beta Badge */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8 flex items-start">
          <div className="flex-shrink-0">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
              BETA
            </span>
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              This extension is currently in beta. We're actively working on improvements and would love your feedback!
            </p>
          </div>
        </div>

        {/* Installation Steps */}
        <div className="space-y-6">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.number}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200"
              >
                <div className="flex items-start">
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full">
                      <span className="text-xl font-bold text-purple-600">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="ml-6 flex-1">
                    <div className="flex items-center mb-2">
                      <IconComponent className="w-5 h-5 text-purple-600 mr-2" />
                      <h3 className="text-xl font-semibold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-3">{step.description}</p>

                    {/* Note if exists */}
                    {step.note && (
                      <div className="bg-orange-50 border-l-4 border-orange-400 p-3 rounded">
                        <p className="text-sm text-orange-700 font-medium">
                          {step.note}
                        </p>
                      </div>
                    )}

                    {/* Action button if exists */}
                    {step.action && <div className="mt-4">{step.action}</div>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Help Section */}
        <div className="mt-12 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8 border border-purple-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need Help?
          </h2>
          <p className="text-gray-600 mb-4">
            If you encounter any issues during installation or while using the extension, please don't hesitate to reach out to our support team.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-white text-purple-600 border-2 border-purple-600 rounded-lg hover:bg-purple-50 transition-colors font-medium">
              Contact Support
            </button>
            <button className="px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              View Documentation
            </button>
          </div>
        </div>

        {/* System Requirements */}
        <div className="mt-8 bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            System Requirements
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span>Google Chrome (latest version recommended)</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span>Microphone access permissions</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span>Active subscription (for full features)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExtensionSetup;