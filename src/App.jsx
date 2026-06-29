import { RouterProvider } from "react-router-dom";

import Container from "./components/ui/Container";
import router from "./router/AppRouter";
// import Navbar from "./components/layouts/Navbar";


function App() {
    return <RouterProvider router={router} />;
}

export default App;

// import Navbar from "./components/layouts/Navbar";
// import Footer from "./components/layouts/Footer";

// function App() {
//     return (
//       <>
//         <Navbar />
//           <Container>
//               <div className="mt-10 h-96 rounded-xl bg-red-500 flex items-center justify-center text-white text-3xl">
//                   TEST
//               </div>
//           </Container>
//         <Footer />
//       </>
//     );
// }

// export default App;