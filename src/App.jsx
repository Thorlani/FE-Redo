import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./components/Navbar";
import Recommended from "./components/Recommended";
import Footer from "./components/Footer";
import Contact from "./Contact";
import About from "./About";
import Privacy from "./Privacy";
import Terms from "./Terms";
import Account from "./Account";
import Legal from "./legal/Legal";
import Contract from "./contract/Contract";
import Constitutional from "./constitutional/Constitutional";
import LegalRead from "./legal/LegalRead";
import ContractRead from "./contract/ContractRead";
import ConsRead from "./constitutional/ConsRead";
import { QueryClient, QueryClientProvider } from "react-query";
import ReactGA from "react-ga";
import { motion } from "framer-motion";

const queryClient = new QueryClient();

const TRACKING_ID = "UA-228594314-1";
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/account" element={<Account />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/legal/read/:id" element={<LegalRead />} />
          <Route path="/contract" element={<Contract />} />
          <Route path="/contract/read/:id" element={<ContractRead />} />
          <Route path="/constitutional" element={<Constitutional />} />
          <Route path="/constitutional/read/:id" element={<ConsRead />} />
        </Routes>
        <Recommended />
        <Footer />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
