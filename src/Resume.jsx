// // gaurav

// import React, { useRef } from "react";
// import { useReactToPrint } from "react-to-print";

// function Resume() {
//   const resumeRef = useRef();

//   const handleDownload = useReactToPrint({
//     contentRef: resumeRef, // ✅ new API (v3+)
//     documentTitle: "Rohan_Sharma_Resume",
//   });

//   return (
//     <div className="p-5">
//       <div
//         ref={resumeRef}
//         className="w-full max-w-[210mm] mx-auto bg-white p-10 font-serif text-sm leading-relaxed "
//       >
//         {/* Header */}
//         <header className="text-center  pb-0 mb-6">
//           <h1 className="text-3xl font-bold tracking-wide">Gaurav</h1>

//           {/* Job Role */}
//           <p className="text-lg font-medium text-gray-800">
//             Software Developer - Full Stack Developer
//           </p>

//           {/* Contact Info */}
//           {/* <p className="text-gray-600 mt-1">
//             Meerut, Uttar Pradesh, India | +91 7465046270 |
//             gaurav746504@gmail.com | linkedin.com/in/rohan-sharma-62165823b
//           </p> */}
//           <p className="text-gray-600 mt-1">
//             Meerut, Uttar Pradesh, India | +91 7465046270 |
//             <a
//               href="mailto:gaurav746504@gmail.com"
//               className="text-blue-600 underline ml-1"
//             >
//               gaurav746504@gmail.com
//             </a>
//             |
//             <a
//               href="https://www.linkedin.com/in/gaurav-prajapati-9159bb196/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-600 underline ml-1"
//             >
//               LinkedIn
//             </a>
//           </p>
//         </header>
//         <section className="mb-6">
//           <div className="flex justify-between items-center border-b pb-1 mb-2">
//             <h2 className="text-lg font-bold">EDUCATION</h2>
//           </div>

//           {/* College */}
//           <div className="flex justify-between mb-2">
//             <div>
//               <p className="font-bold">
//                 Sanskar College of Engineering and Technology, Ghaziabad
//               </p>
//               <p>Bachelor of Technology in Computer Science and Engineering</p>
//             </div>
//             <div className="text-right">
//               <p className="font-semibold">2020 - 2024</p>
//               <p className="mt-1 text-gray-700">Cumulative CGPA: 7.9 / 10</p>
//             </div>
//           </div>

//           {/* School */}
//           <div className="flex justify-between">
//             <div>
//               <p className="font-bold">SSV Inter College, Hapur (UP Board)</p>
//               <p>Intermediate (Class XII)</p>
//             </div>
//             <div className="text-right">
//               <p className="font-semibold">2019 - 2020</p>
//               <p className="mt-1 text-gray-700">Percentage: 75%</p>
//             </div>
//           </div>
//         </section>

//         {/* Experience */}
//         <section className="mb-6">
//           <div className="flex justify-between items-center border-b pb-1 mb-2">
//             <h2 className="text-lg font-bold">EXPERIENCE</h2>
//           </div>

//           {/* Job 1 */}
//           <div className="flex justify-between">
//             <p className="font-bold">
//               {" "}
//               React Developer / React Native Developer / Metaverse Developer –
//               Systaldyn Consultancy Pvt.Ltd
//             </p>
//             <p className="text-gray-700">Nov 2023 – Present</p>
//           </div>
//           <p className="text-gray-700">Internship (6 months) → Full-Time</p>
//           <ul className="list-disc list-inside mb-3 text-gray-700">
//             <li>
//               Initially joined as a 6-month intern after graduation, working on
//               frontend and mobile app development.
//             </li>
//             <li>
//               Transitioned to a full-time role as a React and React Native
//               Developer based on performance.
//             </li>
//             <li>
//               Completed 7 projects in total:
//               <ul className="list-disc list-inside ml-6">
//                 <li>4 React projects (web applications)</li>
//                 <li>3 React Native projects (mobile applications)</li>
//               </ul>
//             </li>
//             <li>
//               Gained hands-on experience with IoT integration in selected
//               projects, connecting devices with web/mobile apps.
//             </li>
//             <li>
//               Additionally worked as a Metaverse Developer using Three.js and
//               Croquet to build immersive 3D collaborative environments.
//             </li>
//             <li>
//               Completed 7 Metaverse projects, combining React + Three.js +
//               Croquet for interactive experiences.
//             </li>
//             <li>
//               Collaborated with cross-functional teams to deliver scalable,
//               user-friendly, and innovative solutions.
//             </li>
//           </ul>
//         </section>

//         {/* Projects */}
//         <section className="mb-6">
//           <div className="flex justify-between items-center border-b pb-1 mb-2">
//             <h2 className="text-lg font-bold">PROJECTS</h2>
//           </div>

//           <div className="flex justify-between">
//             <p className="font-bold italic">
//               MRSC (Micro Retail Smart Cart) App
//             </p>
//             <p className="text-gray-700">June 2025 – Present</p>
//           </div>
//           <ul className="list-disc list-inside mb-3 text-gray-700">
//             <li>
//               Built a Smart Cart food delivery application (similar to Zomato)
//               where users can purchase food by searching nearby carts
//             </li>
//             <li>
//               Developed using React Native CLI with StyleSheet for UI, Context
//               API for state management, and OpenStreetMap API for location &
//               delivery tracking
//             </li>
//             <li>
//               Integrated Razorpay for secure in-app payments and implemented map
//               functionalities to enhance user experience
//             </li>
//           </ul>

//           <div className="flex justify-between">
//             <p className="font-bold italic">Dynamic Employee Attendance App</p>
//             <p className="text-gray-700">Feb 2025 – June</p>
//           </div>
//           <ul className="list-disc list-inside mb-3 text-gray-700">
//             <li>
//               Built a Dynamic Employee Attendance App with check-in/check-out
//               functionality using real-time employee location tracking (Expo
//               Location API)
//             </li>
//             <li>
//               Implemented UUID-based authentication to ensure attendance can
//               only be marked from a unique device, preventing misuse
//             </li>
//             <li>
//               Developed using React Native and Expo Go with Context API for
//               global state management, ensuring scalable and maintainable
//               architecture
//             </li>
//             <li>
//               Created an admin dashboard with advanced filters (date, month,
//               employee) to view, manage, and export attendance records in Excel
//               format
//             </li>
//             <li>
//               Designed multi-organization support, allowing separate admins to
//               add, edit, or delete employees, track status (active/left), and
//               manage organization-specific data
//             </li>
//           </ul>

//           <div className="flex justify-between">
//             <p className="font-bold italic">Power Sense App / Website</p>
//             <p className="text-gray-700">Oct 2024 – Feb 2025</p>
//           </div>
//           <ul className="list-disc list-inside mb-3 text-gray-700">
//             <li>
//               Built a Power Monitoring App and Website for multiple
//               organizations where super admins can onboard organizations with
//               info & fees, and verify admins at login
//             </li>
//             <li>
//               Developed admin functionality to register machines by adding
//               details (location, machine name) and automatically generate API
//               keys for hardware integration
//             </li>
//             <li>
//               Integrated hardware data to fetch real-time current and power
//               usage, displaying machine-level insights such as hourly unit
//               consumption, threshold counts, peak power, and live current/power
//               flow
//             </li>
//             <li>
//               Implemented graphical dashboards with SVG charts (mobile) and
//               Highcharts.js (web) to visualize consumption trends, thresholds,
//               and performance
//             </li>
//             <li>
//               Used Google Maps API to display machine locations and track energy
//               distribution geographically
//             </li>
//             <li>
//               Built the mobile app using React Native with Expo Go, StyleSheet,
//               and Context API; developed the website in React.js with Context
//               API,and for style i have used tailwindcss Highcharts.js, and
//               Google Maps
//             </li>
//           </ul>

//           <div className="flex justify-between">
//             <p className="font-bold italic">PSH Web App</p>
//             <p className="text-gray-700">June 2024 – Oct 2024</p>
//           </div>
//           <ul className="list-disc list-inside mb-3 text-gray-700">
//             {" "}
//             <li>
//               Developed the PSH Web App for a client using React and Tailwind
//               CSS, with Context API for global state management, and integrated
//               blockchain components for enhanced functionality
//             </li>
//           </ul>

//           <div className="flex justify-between">
//             <p className="font-bold italic">
//               Organization Website & Project Management Tool
//             </p>
//             <p className="text-gray-700">Feb 2024 - June 2024</p>
//           </div>
//           <ul className="list-disc list-inside mb-3 text-gray-700">
//             <li>
//               Developed a company website integrated with a project management
//               platform to manage organizational information and employee
//               workflows
//             </li>
//             <li>
//               Built project management features including project creation,
//               daily task assignment, performance tracking, and employee task
//               management
//             </li>
//             <li>
//               Implemented a ticketing system allowing testers to raise issues
//               via APIs, enabling detailed employee performance analysis
//             </li>
//             <li>
//               Designed dashboards with Highcharts and Gantt charts to visualize
//               employee performance, project timelines, and task progress
//             </li>
//             <li>
//               Developed using React and Tailwind CSS with Context API for global
//               state management, ensuring responsive UI and scalable architecture
//             </li>
//           </ul>
//         </section>

//         {/* Skills */}
//         <section>
//           <div className="flex justify-between items-center border-b pb-1 mb-2">
//             <h2 className="text-lg font-bold">SKILLS</h2>
//           </div>
//           <p className="text-gray-700">
//             <span className="font-bold">Frontend:</span> React.js, React Native,
//             HTML, CSS, JavaScript (ES6+), Tailwind CSS, Bootstrap <br />
//             <span className="font-bold">Tools & Platforms:</span> Git, GitHub,
//             Postman, Vercel, Render
//           </p>
//         </section>
//       </div>

//       <button
//         onClick={handleDownload}
//         className="mt-5 px-4 py-2 bg-blue-600 text-white rounded-lg"
//       >
//         Download as PDF
//       </button>
//     </div>
//   );
// }

// export default Resume;

// import React, { useRef } from "react";
// import { useReactToPrint } from "react-to-print";

// function Resume() {
//   const resumeRef = useRef();

//   const handleDownload = useReactToPrint({
//     contentRef: resumeRef, // ✅ new API (v3+)
//     documentTitle: "Rohan_Sharma_Resume",
//   });

//   return (
//     <div className="p-5">
//       <div
//         ref={resumeRef}
//         className="resume-container w-full max-w-[210mm] mx-auto bg-white p-10 font-serif text-sm leading-relaxed"
//       >
//         {/* Header */}
//         <header className="text-center  pb-0 mb-6">
//           <h1 className="text-3xl font-bold tracking-wide">Rohan Sharma</h1>

//           {/* Job Role */}
//           <p className="text-lg font-medium text-gray-800">
//             React.js / React Native Developer /MERN Stack Developer
//           </p>

//           {/* Contact Info */}
//           <p className="text-gray-600 mt-1">
//             Hapur, Uttar Pradesh, India | +91 8171764113 |
//             rohansharma99anc@gmail.com | linkedin.com/in/rohan-sharma-62165823b
//           </p>
//         </header>
//         <section className="mb-6">
//           <div className="flex justify-between items-center border-b pb-1 mb-2">
//             <h2 className="text-lg font-bold">EDUCATION</h2>
//           </div>

//           {/* College */}
//           <div className="flex justify-between mb-2">
//             <div>
//               <p className="font-bold">
//                 Sanskar College of Engineering and Technology, Ghaziabad
//               </p>
//               <p>Bachelor of Technology in Computer Science and Engineering</p>
//             </div>
//             <div className="text-right">
//               <p className="font-semibold">2020 - 2024</p>
//               <p className="mt-1 text-gray-700">Cumulative CGPA: 7.9 / 10</p>
//             </div>
//           </div>

//           {/* School */}
//           <div className="flex justify-between">
//             <div>
//               <p className="font-bold">SSV Inter College, Hapur (UP Board)</p>
//               <p>Intermediate (Class XII)</p>
//             </div>
//             <div className="text-right">
//               <p className="font-semibold">2019 - 2020</p>
//               <p className="mt-1 text-gray-700">Percentage: 75%</p>
//             </div>
//           </div>
//         </section>

//         {/* Experience */}
//         <section className="mb-6">
//           <div className="flex justify-between items-center border-b pb-1 mb-2">
//             <h2 className="text-lg font-bold">EXPERIENCE</h2>
//           </div>

//           {/* Job 1 */}
//           <div className="flex justify-between">
//             <p className="font-bold">
//               {" "}
//               React Developer / React Native Developer / Metaverse Developer –
//               Systaldyn Consultancy Pvt.Ltd
//             </p>
//             <p className="text-gray-700">Nov 2023 – Present</p>
//           </div>
//           <p className="text-gray-700">Internship (6 months) → Full-Time</p>
//           <ul className="list-disc list-inside mb-3 text-gray-700">
//             <li>
//               Initially joined as a 6-month intern after graduation, working on
//               frontend and mobile app development.
//             </li>
//             <li>
//               Transitioned to a full-time role as a React and React Native
//               Developer based on performance.
//             </li>
//             <li>
//               Completed 20 projects in total:
//               <ul className="list-disc list-inside ml-6">
//                 <li>17 React projects (web applications)</li>
//                 <li>3 React Native projects (mobile applications)</li>
//               </ul>
//             </li>
//             <li>
//               Gained hands-on experience with IoT integration in selected
//               projects, connecting devices with web/mobile apps.
//             </li>
//             <li>
//               Additionally worked as a Metaverse Developer using Three.js and
//               Croquet to build immersive 3D collaborative environments.
//             </li>
//             <li>
//               Completed 7 Metaverse projects, combining React + Three.js +
//               Croquet for interactive experiences.
//             </li>
//             <li>
//               Collaborated with cross-functional teams to deliver scalable,
//               user-friendly, and innovative solutions.
//             </li>
//           </ul>
//         </section>

//         {/* Projects */}
//         <section className="mb-6">
//           <div className="flex justify-between items-center border-b pb-1 mb-2">
//             <h2 className="text-lg font-bold">PROJECTS</h2>
//           </div>

//           <div className="flex justify-between">
//             <p className="font-bold italic">OASIS</p>
//           </div>

//           <ul className="list-disc list-inside mb-3 text-gray-700">
//             <li>
//               Developed a dynamic Data Center Design application where users can
//               create and customize their own data centers in both 2D and 3D
//               views based on specific requirements.
//             </li>
//             <li>
//               Built the frontend using React.js with Redux for state management
//               and integrated WebSocket APIs for real-time data updates and
//               interactions.
//             </li>
//             <li>
//               Implemented interactive 2D layouts for data center planning and
//               designed immersive 3D visualizations using Three.js for real-time
//               rendering of racks and infrastructure.
//             </li>
//             <li>
//               Integrated Highcharts for advanced data visualization and
//               analytics related to power usage, monitoring, and system insights.
//             </li>
//             <li>
//               Utilized Leaflet maps for location-based visualization and
//               enhanced user interaction with spatial data.
//             </li>
//             <li>
//               Designed responsive and modern UI using Tailwind CSS, ensuring
//               consistent styling, scalability, and pixel-perfect layouts across
//               different screen sizes.
//             </li>
//             <li>
//               Focused on building a scalable, responsive, and highly interactive
//               UI to allow users to efficiently design, monitor, and manage data
//               center environments.
//             </li>
//           </ul>

//           <div className="flex justify-between">
//             <p className="font-bold italic">SHERPA</p>
//           </div>

//           <ul className="list-disc list-inside mb-3 text-gray-700">
//             <li>
//               Developed an AI-driven data analytics platform focused on
//               predicting future data center metrics such as power consumption,
//               peak load, and usage patterns using Machine Learning models.
//             </li>

//             <li>
//               Integrated ML prediction outputs into the frontend to visualize
//               future trends and pattern behavior, enabling proactive
//               decision-making and anomaly detection.
//             </li>

//             <li>
//               Built real-time data streaming using WebSocket APIs to handle both
//               live and predicted data updates with minimal latency.
//             </li>

//             <li>
//               Designed high-performance, interactive dashboards using Highcharts
//               to render multiple graph types including time-series, peak
//               prediction curves, RMS patterns, and threshold indicators.
//             </li>

//             <li>
//               Developed the frontend using React.js with Redux for efficient
//               global state management and Tailwind CSS for responsive,
//               pixel-perfect UI design.
//             </li>

//             <li>
//               Optimized chart rendering and UI performance to handle
//               high-frequency data streams and large datasets without lag.
//             </li>

//             <li>
//               Implemented dynamic visualization logic to clearly differentiate
//               between actual vs predicted data using color-coded patterns,
//               gradients, and markers.
//             </li>

//             <li>
//               Focused on delivering a scalable and intuitive analytics interface
//               for monitoring, forecasting, and understanding data center
//               behavior through AI.
//             </li>
//           </ul>

//           <div className="flex justify-between">
//             <p className="font-bold italic">PHAROS - DC WHR</p>
//           </div>

//           <ul className="list-disc list-inside mb-3 text-gray-700">
//             <li>
//               Developed a web-based Data Center Waste Heat Recovery (WHR)
//               platform to configure, simulate, and analyze system behavior using
//               digital twin concepts.
//             </li>

//             <li>
//               Built interactive configuration modules including system setup
//               wizard, digital twin builder, and simulation dashboards for
//               modeling TES tanks, pumps, valves, and thermal systems.
//             </li>

//             <li>
//               Implemented real-time data updates using WebSocket integration to
//               visualize live vs simulated system performance with minimal
//               latency.
//             </li>

//             <li>
//               Designed dynamic system flow diagrams using D3.js to represent
//               real-time data flow, component interactions, and operational
//               states.
//             </li>

//             <li>
//               Developed responsive and scalable frontend using React.js, Redux
//               for state management, and Tailwind CSS for modern, adaptive UI
//               design.
//             </li>

//             <li>
//               Enabled simulation features such as scenario replay, MPC-based
//               predictive control comparison, and exportable analytics (CSV/PDF)
//               for performance evaluation.
//             </li>

//             <li>
//               Focused on delivering an intuitive interface for engineers to
//               configure, test, and validate WHR system strategies in a virtual
//               environment.
//             </li>
//           </ul>

//           <div className="flex justify-between">
//             <p className="font-bold italic">
//               Organization Website & Project Management Tool
//             </p>
//           </div>
//           <ul className="list-disc list-inside mb-3 text-gray-700">
//             <li>
//               Developed a company website integrated with a project management
//               platform to manage organizational information and employee
//               workflows
//             </li>
//             <li>
//               Built project management features including project creation,
//               daily task assignment, performance tracking, and employee task
//               management
//             </li>
//             <li>
//               Implemented a ticketing system allowing testers to raise issues
//               via APIs, enabling detailed employee performance analysis
//             </li>
//             <li>
//               Designed dashboards with Highcharts and Gantt charts to visualize
//               employee performance, project timelines, and task progress
//             </li>
//             <li>
//               Developed using React and Tailwind CSS with Context API for global
//               state management, ensuring responsive UI and scalable architecture
//             </li>
//           </ul>

//           <div className="flex justify-between">
//             <p className="font-bold italic">
//               MRSC (Micro Retail Smart Cart) App
//             </p>
//           </div>
//           <ul className="list-disc list-inside mb-3 text-gray-700">
//             <li>
//               Built a Smart Cart food delivery application (similar to Zomato)
//               where users can purchase food by searching nearby carts
//             </li>
//             <li>
//               Developed using React Native CLI with StyleSheet for UI, Context
//               API for state management, and OpenStreetMap API for location &
//               delivery tracking
//             </li>
//             <li>
//               Integrated Razorpay for secure in-app payments and implemented map
//               functionalities to enhance user experience
//             </li>
//           </ul>

//           <div className="flex justify-between">
//             <p className="font-bold italic">Dynamic Employee Attendance App</p>
//           </div>
//           <ul className="list-disc list-inside mb-3 text-gray-700">
//             <li>
//               Built a Dynamic Employee Attendance App with check-in/check-out
//               functionality using real-time employee location tracking (Expo
//               Location API)
//             </li>
//             <li>
//               Implemented UUID-based authentication to ensure attendance can
//               only be marked from a unique device, preventing misuse
//             </li>
//             <li>
//               Developed using React Native and Expo Go with Context API for
//               global state management, ensuring scalable and maintainable
//               architecture
//             </li>
//             <li>
//               Created an admin dashboard with advanced filters (date, month,
//               employee) to view, manage, and export attendance records in Excel
//               format
//             </li>
//             <li>
//               Designed multi-organization support, allowing separate admins to
//               add, edit, or delete employees, track status (active/left), and
//               manage organization-specific data
//             </li>
//           </ul>
//         </section>

//         {/* Skills */}
//         <section>
//           <div className="flex justify-between items-center border-b pb-1 mb-2">
//             <h2 className="text-lg font-bold">SKILLS</h2>
//           </div>
//           <p className="text-gray-700">
//             <span className="font-bold">Frontend:</span> React.js, React Native,
//             HTML, CSS, JavaScript (ES6+), D3.js , Three.js , Tailwind CSS ,
//             Bootstrap <br />
//             <span className="font-bold">Backend:</span> Node.js, Express.js,
//             MongoDB,SQl <br />
//             <span className="font-bold">Tools & Platforms:</span> Git, GitHub,
//             Postman, Vercel, Render,
//           </p>
//         </section>
//       </div>

//       {/* <button
//         onClick={handleDownload}
//         className="mt-5 px-4 py-2 bg-blue-600 text-white rounded-lg"
//       >
//         Download as PDF
//       </button> */}
//     </div>
//   );
// }

// export default Resume;

// import React, { useRef } from "react";
// import { useReactToPrint } from "react-to-print";

// function Resume() {
//   const resumeRef = useRef();

//   const handleDownload = useReactToPrint({
//     contentRef: resumeRef, // ✅ new API (v3+)
//     documentTitle: "Rohan_Sharma_Resume",
//   });

//   return (
//     <div className="p-5">
//       <div
//         ref={resumeRef}
//         className="resume-container w-full max-w-[210mm] mx-auto bg-white p-10 font-serif text-sm leading-relaxed"
//       >
//         {/* Header */}
//         <header className="text-center  pb-0 mb-6">
//           <h1 className="text-3xl font-bold tracking-wide">Rohan Sharma</h1>

//           {/* Job Role */}
//           <p className="text-lg font-medium text-gray-800">
//             React.js / React Native Developer /MERN Stack Developer
//           </p>

//           {/* Contact Info */}
//           <p className="text-gray-600 mt-1">
//             Hapur, Uttar Pradesh, India | +91 8171764113 |
//             rohansharma99anc@gmail.com | linkedin.com/in/rohan-sharma-62165823b
//           </p>
//         </header>
//         <section className="mb-6">
//           <div className="flex justify-between items-center border-b pb-1 mb-2">
//             <h2 className="text-lg font-bold">EDUCATION</h2>
//           </div>

//           {/* College */}
//           <div className="flex justify-between mb-2">
//             <div>
//               <p className="font-bold">
//                 Sanskar College of Engineering and Technology, Ghaziabad
//               </p>
//               <p>Bachelor of Technology in Computer Science and Engineering</p>
//             </div>
//             <div className="text-right">
//               <p className="font-semibold">2020 - 2024</p>
//               <p className="mt-1 text-gray-700">Cumulative CGPA: 7.9 / 10</p>
//             </div>
//           </div>

//           {/* School */}
//           <div className="flex justify-between">
//             <div>
//               <p className="font-bold">SSV Inter College, Hapur (UP Board)</p>
//               <p>Intermediate (Class XII)</p>
//             </div>
//             <div className="text-right">
//               <p className="font-semibold">2019 - 2020</p>
//               <p className="mt-1 text-gray-700">Percentage: 75%</p>
//             </div>
//           </div>
//         </section>

//         {/* Experience */}
//         <section className="mb-6">
//           <div className="flex justify-between items-center border-b pb-1 mb-2">
//             <h2 className="text-lg font-bold">EXPERIENCE</h2>
//           </div>

//           {/* Job 1 */}
//           <div className="flex justify-between">
//             <p className="font-bold">
//               {" "}
//               React Developer / React Native Developer / Metaverse Developer –
//               Systaldyn Consultancy Pvt.Ltd
//             </p>
//             <p className="text-gray-700">Nov 2023 – Present</p>
//           </div>
//           <p className="text-gray-700">Internship (6 months) → Full-Time</p>
//           <ul className="list-disc list-inside mb-3 text-gray-700">
//             <li>
//               Initially joined as a 6-month intern after graduation, working on
//               frontend and mobile app development.
//             </li>
//             <li>
//               Transitioned to a full-time role as a React and React Native
//               Developer based on performance.
//             </li>
//             <li>
//               Completed 20 projects in total:
//               <ul className="list-disc list-inside ml-6">
//                 <li>17 React projects (web applications)</li>
//                 <li>3 React Native projects (mobile applications)</li>
//               </ul>
//             </li>
//             <li>
//               Gained hands-on experience with IoT integration in selected
//               projects, connecting devices with web/mobile apps and backend
//               services.
//             </li>
//             <li>
//               Also worked on backend development using Node.js, Express.js,
//               Sequelize ORM, and SQL databases for REST APIs, authentication,
//               sensor data processing, reporting, and application business logic.
//             </li>
//             <li>
//               Additionally worked as a Metaverse Developer using Three.js and
//               Croquet to build immersive 3D collaborative environments.
//             </li>
//             <li>
//               Completed 7 Metaverse projects, combining React + Three.js +
//               Croquet for interactive experiences.
//             </li>
//             <li>
//               Collaborated with cross-functional teams to deliver scalable,
//               user-friendly, and innovative solutions.
//             </li>
//           </ul>
//         </section>

//         {/* Projects */}
//         <section className="mb-6">
//           <div className="flex justify-between items-center border-b pb-1 mb-2">
//             <h2 className="text-lg font-bold">PROJECTS</h2>
//           </div>

//           <div className="flex justify-between">
//             <p className="font-bold italic">OASIS</p>
//           </div>

//           <ul className="list-disc list-inside mb-3 text-gray-700">
//             <li>
//               Developed a dynamic Data Center Design application where users can
//               create and customize their own data centers in both 2D and 3D
//               views based on specific requirements.
//             </li>
//             <li>
//               Built the frontend using React.js with Redux for state management
//               and integrated WebSocket APIs for real-time data updates and
//               interactions.
//             </li>
//             <li>
//               Implemented interactive 2D layouts for data center planning and
//               designed immersive 3D visualizations using Three.js for real-time
//               rendering of racks and infrastructure.
//             </li>
//             <li>
//               Integrated Highcharts for advanced data visualization and
//               analytics related to power usage, monitoring, and system insights.
//             </li>
//             <li>
//               Utilized Leaflet maps for location-based visualization and
//               enhanced user interaction with spatial data.
//             </li>
//             <li>
//               Designed responsive and modern UI using Tailwind CSS, ensuring
//               consistent styling, scalability, and pixel-perfect layouts across
//               different screen sizes.
//             </li>
//             <li>
//               Focused on building a scalable, responsive, and highly interactive
//               UI to allow users to efficiently design, monitor, and manage data
//               center environments.
//             </li>
//           </ul>

//           <div className="flex justify-between">
//             <p className="font-bold italic">SHERPA</p>
//           </div>

//           <ul className="list-disc list-inside mb-3 text-gray-700">
//             <li>
//               Developed an AI-driven data analytics platform focused on
//               predicting future data center metrics such as power consumption,
//               peak load, and usage patterns using Machine Learning models.
//             </li>

//             <li>
//               Integrated ML prediction outputs into the frontend to visualize
//               future trends and pattern behavior, enabling proactive
//               decision-making and anomaly detection.
//             </li>

//             <li>
//               Built real-time data streaming using WebSocket APIs to handle both
//               live and predicted data updates with minimal latency.
//             </li>

//             <li>
//               Designed high-performance, interactive dashboards using Highcharts
//               to render multiple graph types including time-series, peak
//               prediction curves, RMS patterns, and threshold indicators.
//             </li>

//             <li>
//               Developed the frontend using React.js with Redux for efficient
//               global state management and Tailwind CSS for responsive,
//               pixel-perfect UI design.
//             </li>

//             <li>
//               Optimized chart rendering and UI performance to handle
//               high-frequency data streams and large datasets without lag.
//             </li>

//             <li>
//               Implemented dynamic visualization logic to clearly differentiate
//               between actual vs predicted data using color-coded patterns,
//               gradients, and markers.
//             </li>

//             <li>
//               Focused on delivering a scalable and intuitive analytics interface
//               for monitoring, forecasting, and understanding data center
//               behavior through AI.
//             </li>
//           </ul>

//           <div className="flex justify-between">
//             <p className="font-bold italic">PHAROS - DC WHR</p>
//           </div>

//           <ul className="list-disc list-inside mb-3 text-gray-700">
//             <li>
//               Developed a web-based Data Center Waste Heat Recovery (WHR)
//               platform to configure, simulate, and analyze system behavior using
//               digital twin concepts.
//             </li>

//             <li>
//               Built interactive configuration modules including system setup
//               wizard, digital twin builder, and simulation dashboards for
//               modeling TES tanks, pumps, valves, and thermal systems.
//             </li>

//             <li>
//               Implemented real-time data updates using WebSocket integration to
//               visualize live vs simulated system performance with minimal
//               latency.
//             </li>

//             <li>
//               Designed dynamic system flow diagrams using D3.js to represent
//               real-time data flow, component interactions, and operational
//               states.
//             </li>

//             <li>
//               Developed responsive and scalable frontend using React.js, Redux
//               for state management, and Tailwind CSS for modern, adaptive UI
//               design.
//             </li>

//             <li>
//               Enabled simulation features such as scenario replay, MPC-based
//               predictive control comparison, and exportable analytics (CSV/PDF)
//               for performance evaluation.
//             </li>

//             <li>
//               Focused on delivering an intuitive interface for engineers to
//               configure, test, and validate WHR system strategies in a virtual
//               environment.
//             </li>
//           </ul>

//           <div className="flex justify-between">
//             <p className="font-bold italic">
//               Organization Website & Project Management Tool
//             </p>
//           </div>
//           <ul className="list-disc list-inside mb-3 text-gray-700">
//             <li>
//               Developed a company website integrated with a project management
//               platform to manage organizational information and employee
//               workflows
//             </li>
//             <li>
//               Built project management features including project creation,
//               daily task assignment, performance tracking, and employee task
//               management
//             </li>
//             <li>
//               Implemented a ticketing system allowing testers to raise issues
//               via APIs, enabling detailed employee performance analysis
//             </li>
//             <li>
//               Designed dashboards with Highcharts and Gantt charts to visualize
//               employee performance, project timelines, and task progress
//             </li>
//             <li>
//               Developed using React and Tailwind CSS with Context API for global
//               state management, ensuring responsive UI and scalable architecture
//             </li>
//           </ul>

//           <div className="flex justify-between">
//             <p className="font-bold italic">
//               MRSC (Micro Retail Smart Cart) App
//             </p>
//           </div>
//           <ul className="list-disc list-inside mb-3 text-gray-700">
//             <li>
//               Built a Smart Cart food delivery application (similar to Zomato)
//               where users can purchase food by searching nearby carts
//             </li>
//             <li>
//               Developed using React Native CLI with StyleSheet for UI, Context
//               API for state management, and OpenStreetMap API for location &
//               delivery tracking
//             </li>
//             <li>
//               Integrated Razorpay for secure in-app payments and implemented map
//               functionalities to enhance user experience
//             </li>
//           </ul>

//           <div className="flex justify-between">
//             <p className="font-bold italic">Dynamic Employee Attendance App</p>
//           </div>
//           <ul className="list-disc list-inside mb-3 text-gray-700">
//             <li>
//               Built a Dynamic Employee Attendance App with check-in/check-out
//               functionality using real-time employee location tracking (Expo
//               Location API)
//             </li>
//             <li>
//               Implemented UUID-based authentication to ensure attendance can
//               only be marked from a unique device, preventing misuse
//             </li>
//             <li>
//               Developed using React Native and Expo Go with Context API for
//               global state management, ensuring scalable and maintainable
//               architecture
//             </li>
//             <li>
//               Created an admin dashboard with advanced filters (date, month,
//               employee) to view, manage, and export attendance records in Excel
//               format
//             </li>
//             <li>
//               Designed multi-organization support, allowing separate admins to
//               add, edit, or delete employees, track status (active/left), and
//               manage organization-specific data
//             </li>
//           </ul>

//           <div className="flex justify-between">
//             <p className="font-bold italic">PowerSense Backend</p>
//           </div>
//           <ul className="list-disc list-inside mb-3 text-gray-700">
//             <li>
//               Developed backend services for the PowerSense industrial power
//               monitoring platform using Node.js, Express.js, Sequelize, and SQL.
//             </li>
//             <li>
//               Built REST APIs for registered machines, sensor data, alerts,
//               machine status, power consumption, energy calculations, reports,
//               and electricity bill calculations.
//             </li>
//             <li>
//               Implemented SQL database integration with Sequelize models,
//               machine-specific sensor tables, and APIs for retrieving and
//               processing time-series sensor data.
//             </li>
//             <li>
//               Implemented power and energy calculation logic for single-phase,
//               three-phase, and mixed-phase machines, including peak power,
//               average power, load factor, and consumption calculations.
//             </li>
//             <li>
//               Integrated real-time sensor and alert data using Socket.IO and
//               implemented machine online/offline status and alert handling.
//             </li>
//             <li>
//               Developed report-generation APIs and backend logic for hourly,
//               daily, and machine-level power consumption analysis.
//             </li>
//           </ul>

//           <div className="flex justify-between">
//             <p className="font-bold italic">Employee Attendance Backend</p>
//           </div>
//           <ul className="list-disc list-inside mb-3 text-gray-700">
//             <li>
//               Developed the backend for a multi-organization employee attendance
//               system using Node.js, Express.js, Sequelize, and SQL.
//             </li>
//             <li>
//               Built REST APIs for organization registration, employee
//               management, authentication, OTP verification, attendance
//               check-in/check-out, and organization-specific workflows.
//             </li>
//             <li>
//               Designed and managed SQL database models and relationships using
//               Sequelize ORM for organizations, employees, attendance, and
//               related records.
//             </li>
//             <li>
//               Implemented JWT authentication, password hashing, OTP-based email
//               verification, validation, and role-based application flows.
//             </li>
//             <li>
//               Added attendance reporting and filtering APIs to support
//               organization administrators in managing employee attendance data.
//             </li>
//           </ul>
//         </section>

//         {/* Skills */}
//         <section>
//           <div className="flex justify-between items-center border-b pb-1 mb-2">
//             <h2 className="text-lg font-bold">SKILLS</h2>
//           </div>
//           <p className="text-gray-700">
//             <span className="font-bold">Frontend:</span> React.js, React Native,
//             HTML, CSS, JavaScript (ES6+), D3.js , Three.js , Tailwind CSS ,
//             Bootstrap <br />
//             <span className="font-bold">Backend:</span> Node.js, Express.js,
//             REST APIs, Socket.IO, Sequelize, SQL, MySQL, MongoDB <br />
//             <span className="font-bold">Tools & Platforms:</span> Git, GitHub,
//             Postman, Vercel, Render,
//           </p>
//         </section>
//       </div>

//       <button
//         onClick={handleDownload}
//         className="mt-5 px-4 py-2 bg-blue-600 text-white rounded-lg"
//       >
//         Download as PDF
//       </button>
//     </div>
//   );
// }

// export default Resume;

import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

function Resume() {
  const resumeRef = useRef();

  const handleDownload = useReactToPrint({
    contentRef: resumeRef, // ✅ new API (v3+)
    documentTitle: "Rohan_Sharma_Resume",
  });

  return (
    <div className="p-5">
      <div
        ref={resumeRef}
        className="resume-container w-full max-w-[210mm] mx-auto bg-white p-8 font-serif text-sm leading-relaxed"
      >
        {/* Header */}
        <header className="text-center  pb-0 mb-6">
          <h1 className="text-3xl font-bold tracking-wide">Rohan Sharma</h1>

          {/* Job Role */}
          <p className="text-lg font-medium text-gray-800">
            React.js / React Native Developer / Three.js Developer /Full Stack
            Developer
          </p>

          {/* Contact Info */}
          <p className="text-gray-600 mt-1">
            Hapur, Uttar Pradesh, India | +91 8171764113 |
            rohansharma99anc@gmail.com | linkedin.com/in/rohan-sharma-62165823b
          </p>
        </header>

        {/* Experience */}
        <section className="mb-6">
          <div className="flex justify-between items-center border-b pb-1 mb-2">
            <h2 className="text-lg font-bold">EXPERIENCE</h2>
          </div>

          <div className="flex justify-between">
            <p className="font-bold">
              React.js / React Native / MERN Stack Developer – Systaldyn
              Consultancy Pvt. Ltd.
            </p>
            <p className="text-gray-700">Nov 2023 – Present</p>
          </div>
          <p className="text-gray-700">Internship (6 months) → Full-Time</p>
          <ul className="list-disc list-inside mb-3 text-gray-700">
            <li>
              Developed web and mobile applications using React.js, React
              Native, and modern JavaScript.
            </li>
            <li>
              Built backend services and REST APIs using Node.js, Express.js,
              Sequelize, and SQL/MySQL.
            </li>
            <li>
              Worked on IoT integrations, real-time WebSocket data,
              authentication, reporting, and business logic.
            </li>
            <li>
              Developed 3D/Metaverse applications using Three.js and Croquet.
            </li>
          </ul>
        </section>

        {/* Projects */}
        <section className="mb-6">
          <div className="flex justify-between items-center border-b pb-1 mb-2">
            <h2 className="text-lg font-bold">PROJECTS</h2>
          </div>

          <div className="flex justify-between">
            <p className="font-bold italic">
              OASIS – Data Center Design Platform
            </p>
          </div>
          <ul className="list-disc list-inside mb-3 text-gray-700">
            <li>
              Developed a React-based 2D/3D data center design and visualization
              platform for designing and managing server room infrastructure,
              integrating Three.js, React Three Fiber, Redux, WebSockets,
              Highcharts, Leaflet, and Tailwind CSS.
            </li>
            <li>
              Implemented interactive 2D layouts and 3D visualization of data
              center components, enabling users to view, position, and manage
              racks, machines, power infrastructure, and other physical assets.
            </li>
            <li>
              Integrated real-time WebSocket communication for live equipment
              status, sensor updates, and infrastructure monitoring.
            </li>
            <li>
              Built interactive power and performance dashboards using
              Highcharts for monitoring consumption, load, trends, and
              operational metrics.
            </li>
            <li>
              Implemented map-based visualization using Leaflet and developed
              reusable React components with Redux for centralized state
              management.
            </li>
          </ul>

          <div className="flex justify-between">
            <p className="font-bold italic">
              Metaverse Data Center – Server Room, Power Room & Electrical Room
            </p>
          </div>
          <ul className="list-disc list-inside mb-3 text-gray-700">
            <li>
              Developed an immersive browser-based 3D data center/metaverse
              visualization using React, Three.js, and React Three Fiber,
              representing server rooms, power rooms, electrical rooms, racks,
              machines, and infrastructure components.
            </li>
            <li>
              Built interactive 3D environments with camera navigation, object
              selection, zoom, rotation, and movement to provide an intuitive
              digital representation of physical data center spaces.
            </li>
            <li>
              Implemented joystick-based navigation and interactive controls for
              moving through the 3D server room and exploring equipment and
              infrastructure.
            </li>
            <li>
              Integrated real-time machine and sensor information with 3D
              objects, allowing equipment status and operational data to be
              visualized within the digital environment.
            </li>
            <li>
              Developed server-room monitoring dashboards using Highcharts to
              display real-time power consumption, current, load, energy trends,
              and equipment performance.
            </li>
            <li>
              Implemented interactive electrical and power-room visualization to
              represent power distribution, electrical equipment, and monitoring
              information within the 3D environment.
            </li>
            <li>
              Created reusable React Three Fiber components and integrated
              API-based data with the 3D visualization layer for dynamic
              infrastructure monitoring.
            </li>
          </ul>

          <div className="flex justify-between">
            <p className="font-bold italic">
              SHERPA – AI Data Analytics Platform
            </p>
          </div>
          <ul className="list-disc list-inside mb-3 text-gray-700">
            <li>
              Developed an AI-driven data analytics dashboard for data center
              power, energy, load, and performance analysis with interactive
              visualizations and predictive insights.
            </li>
            <li>
              Integrated real-time WebSocket data with Highcharts to visualize
              actual versus predicted power consumption, load trends, and
              equipment performance.
            </li>
            <li>
              Built dynamic dashboards with filtering, time-based analysis,
              trend visualization, and KPI monitoring for operational
              decision-making.
            </li>
            <li>
              Developed reusable React components and integrated REST APIs for
              retrieving and presenting large-scale data analytics.
            </li>
          </ul>

          <div className="flex justify-between">
            <p className="font-bold italic">
              PHAROS – DC WHR (Waste Heat Recovery)
            </p>
          </div>
          <ul className="list-disc list-inside mb-3 text-gray-700">
            <li>
              Built a React-based digital twin platform for Data Center Waste
              Heat Recovery simulation, visualization, and system analysis.
            </li>
            <li>
              Developed interactive D3.js system diagrams to represent heat
              flow, energy systems, equipment relationships, and recovery
              processes.
            </li>
            <li>
              Implemented real-time WebSocket updates and simulation dashboards
              for monitoring system parameters, energy flow, and recovery
              performance.
            </li>
            <li>
              Added CSV and PDF export functionality for generating and sharing
              simulation and analytical reports.
            </li>
          </ul>

          <div className="flex justify-between">
            <p className="font-bold italic">
              PowerSense – Industrial Power Monitoring Platform
            </p>
          </div>
          <ul className="list-disc list-inside mb-3 text-gray-700">
            <li>
              Developed a full-stack industrial power monitoring platform using
              React, Node.js, Express.js, Sequelize, MySQL, Socket.IO, and REST
              APIs for real-time machine and energy monitoring.
            </li>
            <li>
              Implemented real-time sensor monitoring for machine current,
              power, energy consumption, machine status, alerts, and operational
              parameters using Socket.IO.
            </li>
            <li>
              Developed backend APIs for machine management, sensor data,
              alerts, reports, billing, energy consumption, and power
              calculations.
            </li>
            <li>
              Implemented single-phase, three-phase, and mixed-phase power
              calculation logic along with energy consumption, peak power, load
              factor, and time-based analysis.
            </li>
            <li>
              Built interactive Highcharts dashboards for hourly and daily power
              consumption, energy trends, machine performance, and operational
              analytics.
            </li>
            <li>
              Developed report generation and electricity billing functionality
              with downloadable PDF reports and consumption summaries.
            </li>
          </ul>

          <div className="flex justify-between">
            <p className="font-bold italic">
              Employee Attendance & Workforce Management App
            </p>
          </div>
          <ul className="list-disc list-inside mb-3 text-gray-700">
            <li>
              Developed a React Native mobile application for employee
              attendance, face verification, location tracking, device
              validation, and organization-based workforce management.
            </li>
            <li>
              Developed Node.js and Express.js backend services using Sequelize
              and MySQL with JWT authentication, OTP verification, employee
              management, organization management, and attendance APIs.
            </li>
            <li>
              Implemented organization-specific working days, holidays, employee
              records, attendance tracking, and administrative reporting.
            </li>
            <li>
              Integrated device and location-based validation to improve
              attendance verification and prevent unauthorized check-ins.
            </li>
          </ul>

          <div className="flex justify-between">
            <p className="font-bold italic">MRSC – Micro Retail Smart Cart</p>
          </div>
          <ul className="list-disc list-inside mb-3 text-gray-700">
            <li>
              Developed a React Native food ordering and smart-cart application
              with product browsing, cart management, location tracking, and
              order processing.
            </li>
            <li>
              Integrated OpenStreetMap for location and map functionality and
              used Context API for application-wide state management.
            </li>
            <li>
              Integrated Razorpay payment functionality and developed reusable
              mobile UI components for a responsive user experience.
            </li>
          </ul>

          <div className="flex justify-between">
            <p className="font-bold italic">
              Organization Website & Project Management Platform
            </p>
          </div>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              Developed a modern organization and project management web
              platform using Next.js, React, TypeScript, Tailwind CSS, and REST
              APIs.
            </li>
            <li>
              Implemented project and task management, ticketing, employee
              management, performance dashboards, project timelines, and Gantt
              chart functionality.
            </li>
            <li>
              Built reusable and responsive components with TypeScript and
              modern Next.js architecture to improve maintainability and
              application performance.
            </li>
            <li>
              Implemented role-based workflows and dashboards for managing
              projects, employees, tasks, tickets, and organizational
              activities.
            </li>
          </ul>
        </section>

        {/* Skills */}
        <section>
          <div className="flex justify-between items-center border-b pb-1 mb-2">
            <h2 className="text-lg font-bold">SKILLS</h2>
          </div>

          <p className="text-gray-700">
            <span className="font-bold">Frontend:</span> React.js, React Native,
            Next.js, Three.js, JavaScript, TypeScript, HTML, CSS, Tailwind CSS,
            Bootstrap, Material UI, Redux, Context API, D3.js
            <br />
            <span className="font-bold">Backend & Database:</span> Node.js,
            Express.js, REST APIs, Socket.IO, MongoDB, MySQL
            <br />
            <span className="font-bold">Tools & APIs:</span> Git, GitHub,
            Docker, Postman, Highcharts, OpenStreetMap API
          </p>
        </section>

        <section className="mb-6 mt-10">
          <div className="flex justify-between items-center border-b pb-1 mb-2">
            <h2 className="text-lg font-bold">EDUCATION</h2>
          </div>

          {/* College */}
          <div className="flex justify-between mb-2">
            <div>
              <p className="font-bold">
                Sanskar College of Engineering and Technology, Ghaziabad
              </p>
              <p>Bachelor of Technology in Computer Science and Engineering</p>
            </div>
            <div className="text-right">
              <p className="font-semibold">2020 - 2024</p>
              <p className="mt-1 text-gray-700">Cumulative CGPA: 7.9 / 10</p>
            </div>
          </div>

          {/* School */}
          <div className="flex justify-between">
            <div>
              <p className="font-bold">SSV Inter College, Hapur (UP Board)</p>
              <p>Intermediate (Class XII)</p>
            </div>
            <div className="text-right">
              <p className="font-semibold">2019 - 2020</p>
              <p className="mt-1 text-gray-700">Percentage: 75%</p>
            </div>
          </div>
        </section>
      </div>

      <button
        onClick={handleDownload}
        className="mt-5 px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Download as PDF
      </button>
    </div>
  );
}

export default Resume;

// import React, { useRef } from "react";
// import { useReactToPrint } from "react-to-print";

// function Resume() {
//   const resumeRef = useRef(null);

//   const handleDownload = useReactToPrint({
//     contentRef: resumeRef,
//     documentTitle: "Rohan_Sharma_Resume",
//   });

//   return (
//     <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
//       {/* Resume */}
//       <div
//         ref={resumeRef}
//         className="
//           resume-container
//           w-full
//           max-w-[210mm]
//           min-h-[297mm]
//           mx-auto
//           bg-white
//           px-[13mm]
//           py-[10mm]
//           text-[12px]
//           leading-[1.35]
//           text-gray-800
//           font-sans
//         "
//       >
//         {/* ================= HEADER ================= */}
//         <header className="text-center">
//           {/* Name */}
//           <h1
//             className="
//               text-[32px]
//               leading-none
//               font-extrabold
//               tracking-tight
//               text-[#172554]
//               mb-2
//             "
//           >
//             Rohan Sharma
//           </h1>

//           {/* Role */}
//           <p
//             className="
//               text-[16px]
//               leading-tight
//               font-bold
//               text-blue-600
//               mb-3
//               whitespace-nowrap
//             "
//           >
//             React.js / React Native Developer | MERN Stack Developer | 2.6+
//             Years Experience
//           </p>

//           {/* Contact Row */}
//           <div
//             className="
//               flex
//               items-center
//               justify-center
//               gap-3
//               text-[10.5px]
//               text-gray-600
//               whitespace-nowrap
//               mb-3
//             "
//           >
//             <span>Hapur, Uttar Pradesh, India</span>

//             <span className="text-gray-300">|</span>

//             <a href="tel:+918171764113" className="hover:text-blue-600">
//               +91 8171764113
//             </a>

//             <span className="text-gray-300">|</span>

//             <a
//               href="mailto:rohansharma99anc@gmail.com"
//               className="hover:text-blue-600"
//             >
//               rohansharma99anc@gmail.com
//             </a>

//             <span className="text-gray-300">|</span>

//             <a
//               href="https://linkedin.com/in/rohan-sharma-62165823b"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-600 hover:underline"
//             >
//               linkedin.com/in/rohan-sharma-62165823b
//             </a>
//           </div>

//           <div className="h-[1.5px] bg-blue-600 w-full mb-4" />
//         </header>

//         {/* ================= SUMMARY ================= */}
//         <section className="mb-4">
//           <SectionTitle title="PROFESSIONAL SUMMARY" />

//           <p className="text-[11.2px] leading-[1.45] text-gray-700">
//             React.js / React Native Developer with 2.6+ years of professional
//             experience building production web and mobile applications using
//             React.js, React Native, JavaScript, Node.js, Express.js, MySQL, REST
//             APIs, and Socket.IO. Experienced in real-time dashboards, IoT
//             integrations, authentication, reporting, business logic, power
//             monitoring, and 3D visualization. Contributed to 20+ projects across
//             web, mobile, backend, IoT, and 3D applications.
//           </p>
//         </section>

//         {/* ================= EXPERIENCE ================= */}
//         <section className="mb-4">
//           <SectionTitle title="EXPERIENCE" />

//           <div className="flex justify-between items-start gap-4 mb-1">
//             <div>
//               <h3 className="text-[12.5px] font-bold text-blue-700 leading-tight">
//                 React.js / React Native / MERN Stack Developer – Systaldyn
//                 Consultancy Pvt. Ltd.
//               </h3>

//               <p className="text-[10.5px] italic text-gray-600 mt-0.5">
//                 Internship (6 months) → Full-Time
//               </p>
//             </div>

//             <p className="text-[10.5px] font-semibold text-gray-700 whitespace-nowrap">
//               Nov 2023 – Present
//             </p>
//           </div>

//           <ul className="list-disc pl-5 text-[10.7px] leading-[1.4] text-gray-700 space-y-0.5">
//             <li>
//               Developed web and mobile applications using React.js, React
//               Native, and modern JavaScript.
//             </li>

//             <li>
//               Built backend services and REST APIs using Node.js, Express.js,
//               Sequelize, and SQL/MySQL.
//             </li>

//             <li>
//               Worked on IoT integrations, real-time WebSocket data,
//               authentication, reporting, and complex business logic.
//             </li>

//             <li>
//               Developed 3D/Metaverse applications using Three.js and Croquet.
//             </li>

//             <li>
//               Delivered 20+ projects across web, mobile, backend, and 3D
//               applications.
//             </li>
//           </ul>
//         </section>

//         {/* ================= PROJECTS ================= */}
//         <section className="mb-4">
//           <SectionTitle title="PROJECTS" />

//           <Project
//             title="OASIS – Data Center Design"
//             items={[
//               "Built a React-based 2D/3D data center design platform using Three.js, Redux, WebSockets, Highcharts, Leaflet, and Tailwind CSS.",
//               "Implemented interactive layouts, real-time updates, 3D visualization, and power monitoring dashboards.",
//             ]}
//           />

//           <Project
//             title="SHERPA – AI Data Analytics"
//             items={[
//               "Developed an AI-driven data analytics dashboard for data center power and load prediction.",
//               "Integrated real-time WebSocket data and Highcharts for actual vs. predicted trends and analytics.",
//             ]}
//           />

//           <Project
//             title="PHAROS – DC WHR"
//             items={[
//               "Built a React-based digital twin platform for Data Center Waste Heat Recovery simulation and analysis.",
//               "Implemented D3.js system diagrams, WebSocket updates, simulation dashboards, and CSV/PDF exports.",
//             ]}
//           />

//           <Project
//             title="PowerSense – Power Monitoring Platform"
//             items={[
//               "Developed a React-based industrial power monitoring application for real-time machine, energy, alert, and consumption monitoring.",
//               "Developed the backend using Node.js, Express.js, Sequelize, and MySQL with REST APIs for machines, sensor data, alerts, reports, billing, and power/energy calculations.",
//               "Implemented Socket.IO for real-time sensor data and machine status, with single-, three-, and mixed-phase power calculations.",
//             ]}
//           />

//           <Project
//             title="Employee Attendance App"
//             items={[
//               "Built a React Native attendance application with face verification, location tracking, device-based validation, multi-organization support, and admin reporting.",
//               "Developed Node.js/Express backend with Sequelize, MySQL, JWT authentication, OTP verification, employee, organization, and attendance APIs.",
//             ]}
//           />

//           <Project
//             title="MRSC – Micro Retail Smart Cart"
//             items={[
//               "Developed a React Native food ordering application with location tracking, OpenStreetMap integration, Context API, and Razorpay payments.",
//             ]}
//           />

//           <Project
//             title="Organization Website & Project Management"
//             items={[
//               "Built project/task management, ticketing, employee performance dashboards, and Gantt chart features using React, Context API, and Tailwind CSS.",
//             ]}
//           />
//         </section>

//         {/* ================= SKILLS ================= */}
//         <section className="mb-4">
//           <SectionTitle title="TECHNICAL SKILLS" />

//           <div className="grid grid-cols-4 gap-0 border border-gray-200 rounded-sm">
//             <SkillBox
//               title="Frontend"
//               value="React.js, React Native, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Redux, Context API, Three.js, D3.js, Highcharts"
//             />

//             <SkillBox
//               title="Backend"
//               value="Node.js, Express.js, REST APIs, Sequelize, Socket.IO, JWT, Authentication"
//             />

//             <SkillBox title="Database" value="MySQL, SQL, MongoDB" />

//             <SkillBox
//               title="Tools & Others"
//               value="Git, GitHub, Postman, WebSockets, Axios"
//             />
//           </div>
//         </section>

//         {/* ================= EDUCATION ================= */}
//         <section>
//           <SectionTitle title="EDUCATION" />

//           <div className="grid grid-cols-2 gap-5">
//             {/* College */}
//             <div className="border-r border-gray-200 pr-4">
//               <h3 className="text-[11.5px] font-bold text-blue-700">
//                 Sanskar College of Engineering and Technology, Ghaziabad
//               </h3>

//               <p className="text-[10.5px] text-gray-700 mt-1">
//                 Bachelor of Technology in Computer Science and Engineering
//               </p>

//               <p className="text-[10px] text-gray-600 mt-1">
//                 <span className="font-semibold">2020 – 2024</span>
//                 {" | "}
//                 Cumulative CGPA: <b>7.9 / 10</b>
//               </p>
//             </div>

//             {/* School */}
//             <div>
//               <h3 className="text-[11.5px] font-bold text-blue-700">
//                 SSV Inter College, Hapur (UP Board)
//               </h3>

//               <p className="text-[10.5px] text-gray-700 mt-1">
//                 Intermediate (Class XII)
//               </p>

//               <p className="text-[10px] text-gray-600 mt-1">
//                 <span className="font-semibold">2019 – 2020</span>
//                 {" | "}
//                 Percentage: <b>75%</b>
//               </p>
//             </div>
//           </div>
//         </section>
//       </div>

//       {/* ================= DOWNLOAD BUTTON ================= */}
//       <div className="flex justify-center mt-5 print:hidden">
//         <button
//           onClick={handleDownload}
//           className="
//             px-6
//             py-2.5
//             rounded-lg
//             bg-blue-600
//             hover:bg-blue-700
//             text-white
//             font-semibold
//             shadow-md
//             transition
//           "
//         >
//           Download as PDF
//         </button>
//       </div>
//     </div>
//   );
// }

// /* ============================================================
//    SECTION TITLE
// ============================================================ */

// function SectionTitle({ title }) {
//   return (
//     <div className="flex items-center gap-2 mb-2">
//       <div className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0" />

//       <h2
//         className="
//           text-[13px]
//           font-extrabold
//           tracking-wide
//           text-[#172554]
//           whitespace-nowrap
//         "
//       >
//         {title}
//       </h2>

//       <div className="flex-1 h-[1px] bg-blue-200" />
//     </div>
//   );
// }

// /* ============================================================
//    PROJECT
// ============================================================ */

// function Project({ title, items }) {
//   return (
//     <div className="mb-2">
//       <h3 className="text-[11.5px] font-bold text-blue-700 mb-0.5">{title}</h3>

//       <ul className="list-disc pl-5 text-[10.2px] leading-[1.35] text-gray-700 space-y-0.5">
//         {items.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// /* ============================================================
//    SKILL BOX
// ============================================================ */

// function SkillBox({ title, value }) {
//   return (
//     <div className="px-3 py-2 border-r last:border-r-0 border-gray-200">
//       <h3 className="text-[10.5px] font-bold text-blue-700 mb-1">{title}</h3>

//       <p className="text-[9.2px] leading-[1.3] text-gray-700">{value}</p>
//     </div>
//   );
// }

// export default Resume;

/* ============================================================
   PRINT CSS
============================================================ */

/*
Add this to your global CSS file, for example index.css/app.css.
*/

// @media print {

//   @page {
//     size: A4;
//     margin: 0;
//   }

//   html,
//   body {
//     width: 210mm;
//     min-height: 297mm;
//     margin: 0;
//     padding: 0;
//     background: white !important;
//   }

//   body {
//     -webkit-print-color-adjust: exact !important;
//     print-color-adjust: exact !important;
//   }

//   .resume-container {
//     width: 210mm !important;
//     min-height: 297mm !important;
//     max-width: none !important;
//     margin: 0 !important;
//     padding: 10mm 13mm !important;
//     box-sizing: border-box !important;
//     box-shadow: none !important;
//   }

//   a {
//     color: #2563eb !important;
//     text-decoration: none !important;
//   }

//   section {
//     break-inside: avoid;
//   }

//   li {
//     break-inside: avoid;
//   }
// }
