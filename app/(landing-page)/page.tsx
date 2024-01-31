import Navbar from "@/components/navbar/Navbar";
import ActiveSectionContextProvider from "@/context/active-section-context";

const LandingPage = () => {
  return ( 
    <div>
      <ActiveSectionContextProvider>
        <Navbar />
      </ActiveSectionContextProvider>
      
      
    </div>
   );
}
 
export default LandingPage;