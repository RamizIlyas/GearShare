import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { LandingPage } from "./components/LandingPage";
import { BrowseTools } from "./components/BrowseTools";
import { ToolDetail } from "./components/ToolDetail";
import { UserDashboard } from "./components/UserDashboard";
import { ListTool } from "./components/ListTool";
import { BookingFlow } from "./components/BookingFlow";
import { ReviewPage } from "./components/ReviewPage";
import { Toaster } from "./components/ui/sonner";

type Page = "landing" | "browse" | "tool-detail" | "dashboard" | "list-tool" | "booking" | "review";

interface PageParams {
  toolId?: string;
  category?: string;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("landing");
  const [pageParams, setPageParams] = useState<PageParams>({});

  const navigate = (page: Page, params?: PageParams) => {
    setCurrentPage(page);
    setPageParams(params || {});
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation currentPage={currentPage} onNavigate={navigate} />
      
      <main className="flex-1">
        {currentPage === "landing" && <LandingPage onNavigate={navigate} />}
        {currentPage === "browse" && (
          <BrowseTools
            onNavigate={navigate}
            initialCategory={pageParams.category}
          />
        )}
        {currentPage === "tool-detail" && (
          <ToolDetail onNavigate={navigate} toolId={pageParams.toolId} />
        )}
        {currentPage === "dashboard" && <UserDashboard onNavigate={navigate} />}
        {currentPage === "list-tool" && <ListTool onNavigate={navigate} />}
        {currentPage === "booking" && (
          <BookingFlow onNavigate={navigate} toolId={pageParams.toolId} />
        )}
        {currentPage === "review" && (
          <ReviewPage onNavigate={navigate} toolId={pageParams.toolId} />
        )}
      </main>

      <Footer />
      <Toaster />
    </div>
  );
}
