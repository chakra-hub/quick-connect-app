import { ThemeProvider } from "@/components/theme-provider";
import "./App.css";
import { AppSidebar } from "./components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";

// Import your page components

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <SidebarProvider>
        <BrowserRouter>
          <AppSidebar />
          <main style={{ width: "100%", padding: '1rem' }}>
            <SidebarTrigger />
            <div style={{ display: "flex", height: '90vh', justifyContent:'center' }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/inbox" element={<div>inbox</div>} />
                <Route path="/calendar" element={<div>calendar</div>} />
              </Routes>
            </div>
          </main>
        </BrowserRouter>
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default App;
