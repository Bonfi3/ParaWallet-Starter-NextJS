"use client";

import React, { useState } from "react";
import { AuthLayout, Environment, ParaModal, OAuthMethod, ParaWeb } from "@getpara/react-sdk";
// The following styles.css import is not needed if using a version before v3.5.0 of '@getpara/react-sdk'
import "@getpara/react-sdk/styles.css";

// Initialize Para SDK with your API key and environment
const para = new ParaWeb(Environment.BETA, process.env.NEXT_PUBLIC_PARA_API_KEY);

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
       <button
        onClick={() => setIsModalOpen(true)}
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>
        Open Para Modal
      </button>
      <ParaModal
        appName="Para Modal Starter Template"
        authLayout={[AuthLayout.AUTH_FULL]}
        para={para}
        disableEmailLogin={false}
        disablePhoneLogin={false}
        isOpen={isModalOpen}
        oAuthMethods={Object.values(OAuthMethod)}
        onClose={() => setIsModalOpen(false)}
        onRampTestMode={true}
        twoFactorAuthEnabled={false}
      />
    </div>
  );
}
export default App;