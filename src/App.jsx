// src/App.jsx
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import QuotePage from "./pages/QuotePage";
import ApprovisionnementAchat from "./pages/services/ApprovisionnementAchat";
import AssistanceTechnique from "./pages/services/AssistanceTechnique";
import EtudesConseils from "./pages/services/EtudesConseils";

import ScrollManager from "./components/ui/ScrollManager";
import ServiceLayout from "./components/layout/ServiceLayout";


export default function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/devis" element={<QuotePage />} />

        {/* ✅ Toutes les pages /services/* auront automatiquement le Footer */}
        <Route element={<ServiceLayout />}>
          <Route
            path="/services/approvisionnement-achat"
            element={<ApprovisionnementAchat />}
          />
          <Route path="/services/assistance-technique" element={<AssistanceTechnique />} />
          <Route
            path="/services/etudes-conseils"
            element={<EtudesConseils />}
          />

          {/* Ajoute ici tes autres pages service quand elles existent */}
          {/* <Route path="/services/assistance-technique" element={<AssistanceTechnique />} /> */}
          {/* <Route path="/services/etudes-conseils" element={<EtudesConseils />} /> */}
        </Route>
      </Routes>
    </>
  );
}
