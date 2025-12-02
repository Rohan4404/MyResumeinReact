// gaurav

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
        className="w-full max-w-[210mm] mx-auto bg-white p-10 font-serif text-sm leading-relaxed "
      >
        {/* Header */}
        <header className="text-center  pb-0 mb-6">
          <h1 className="text-3xl font-bold tracking-wide">Gaurav</h1>

          {/* Job Role */}
          <p className="text-lg font-medium text-gray-800">
            Software Developer - Full Stack Developer
          </p>

          {/* Contact Info */}
          {/* <p className="text-gray-600 mt-1">
            Meerut, Uttar Pradesh, India | +91 7465046270 |
            gaurav746504@gmail.com | linkedin.com/in/rohan-sharma-62165823b
          </p> */}
          <p className="text-gray-600 mt-1">
            Meerut, Uttar Pradesh, India | +91 7465046270 |
            <a
              href="mailto:gaurav746504@gmail.com"
              className="text-blue-600 underline ml-1"
            >
              gaurav746504@gmail.com
            </a>
            |
            <a
              href="https://www.linkedin.com/in/gaurav-prajapati-9159bb196/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline ml-1"
            >
              LinkedIn
            </a>
          </p>
        </header>
        <section className="mb-6">
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

        {/* Experience */}
        <section className="mb-6">
          <div className="flex justify-between items-center border-b pb-1 mb-2">
            <h2 className="text-lg font-bold">EXPERIENCE</h2>
          </div>

          {/* Job 1 */}
          <div className="flex justify-between">
            <p className="font-bold">
              {" "}
              React Developer / React Native Developer / Metaverse Developer –
              Systaldyn Consultancy Pvt.Ltd
            </p>
            <p className="text-gray-700">Nov 2023 – Present</p>
          </div>
          <p className="text-gray-700">Internship (6 months) → Full-Time</p>
          <ul className="list-disc list-inside mb-3 text-gray-700">
            <li>
              Initially joined as a 6-month intern after graduation, working on
              frontend and mobile app development.
            </li>
            <li>
              Transitioned to a full-time role as a React and React Native
              Developer based on performance.
            </li>
            <li>
              Completed 7 projects in total:
              <ul className="list-disc list-inside ml-6">
                <li>4 React projects (web applications)</li>
                <li>3 React Native projects (mobile applications)</li>
              </ul>
            </li>
            <li>
              Gained hands-on experience with IoT integration in selected
              projects, connecting devices with web/mobile apps.
            </li>
            <li>
              Additionally worked as a Metaverse Developer using Three.js and
              Croquet to build immersive 3D collaborative environments.
            </li>
            <li>
              Completed 7 Metaverse projects, combining React + Three.js +
              Croquet for interactive experiences.
            </li>
            <li>
              Collaborated with cross-functional teams to deliver scalable,
              user-friendly, and innovative solutions.
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
              MRSC (Micro Retail Smart Cart) App
            </p>
            <p className="text-gray-700">June 2025 – Present</p>
          </div>
          <ul className="list-disc list-inside mb-3 text-gray-700">
            <li>
              Built a Smart Cart food delivery application (similar to Zomato)
              where users can purchase food by searching nearby carts
            </li>
            <li>
              Developed using React Native CLI with StyleSheet for UI, Context
              API for state management, and OpenStreetMap API for location &
              delivery tracking
            </li>
            <li>
              Integrated Razorpay for secure in-app payments and implemented map
              functionalities to enhance user experience
            </li>
          </ul>

          <div className="flex justify-between">
            <p className="font-bold italic">Dynamic Employee Attendance App</p>
            <p className="text-gray-700">Feb 2025 – June</p>
          </div>
          <ul className="list-disc list-inside mb-3 text-gray-700">
            <li>
              Built a Dynamic Employee Attendance App with check-in/check-out
              functionality using real-time employee location tracking (Expo
              Location API)
            </li>
            <li>
              Implemented UUID-based authentication to ensure attendance can
              only be marked from a unique device, preventing misuse
            </li>
            <li>
              Developed using React Native and Expo Go with Context API for
              global state management, ensuring scalable and maintainable
              architecture
            </li>
            <li>
              Created an admin dashboard with advanced filters (date, month,
              employee) to view, manage, and export attendance records in Excel
              format
            </li>
            <li>
              Designed multi-organization support, allowing separate admins to
              add, edit, or delete employees, track status (active/left), and
              manage organization-specific data
            </li>
          </ul>

          <div className="flex justify-between">
            <p className="font-bold italic">Power Sense App / Website</p>
            <p className="text-gray-700">Oct 2024 – Feb 2025</p>
          </div>
          <ul className="list-disc list-inside mb-3 text-gray-700">
            <li>
              Built a Power Monitoring App and Website for multiple
              organizations where super admins can onboard organizations with
              info & fees, and verify admins at login
            </li>
            <li>
              Developed admin functionality to register machines by adding
              details (location, machine name) and automatically generate API
              keys for hardware integration
            </li>
            <li>
              Integrated hardware data to fetch real-time current and power
              usage, displaying machine-level insights such as hourly unit
              consumption, threshold counts, peak power, and live current/power
              flow
            </li>
            <li>
              Implemented graphical dashboards with SVG charts (mobile) and
              Highcharts.js (web) to visualize consumption trends, thresholds,
              and performance
            </li>
            <li>
              Used Google Maps API to display machine locations and track energy
              distribution geographically
            </li>
            <li>
              Built the mobile app using React Native with Expo Go, StyleSheet,
              and Context API; developed the website in React.js with Context
              API,and for style i have used tailwindcss Highcharts.js, and
              Google Maps
            </li>
          </ul>

          <div className="flex justify-between">
            <p className="font-bold italic">PSH Web App</p>
            <p className="text-gray-700">June 2024 – Oct 2024</p>
          </div>
          <ul className="list-disc list-inside mb-3 text-gray-700">
            {" "}
            <li>
              Developed the PSH Web App for a client using React and Tailwind
              CSS, with Context API for global state management, and integrated
              blockchain components for enhanced functionality
            </li>
          </ul>

          <div className="flex justify-between">
            <p className="font-bold italic">
              Organization Website & Project Management Tool
            </p>
            <p className="text-gray-700">Feb 2024 - June 2024</p>
          </div>
          <ul className="list-disc list-inside mb-3 text-gray-700">
            <li>
              Developed a company website integrated with a project management
              platform to manage organizational information and employee
              workflows
            </li>
            <li>
              Built project management features including project creation,
              daily task assignment, performance tracking, and employee task
              management
            </li>
            <li>
              Implemented a ticketing system allowing testers to raise issues
              via APIs, enabling detailed employee performance analysis
            </li>
            <li>
              Designed dashboards with Highcharts and Gantt charts to visualize
              employee performance, project timelines, and task progress
            </li>
            <li>
              Developed using React and Tailwind CSS with Context API for global
              state management, ensuring responsive UI and scalable architecture
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
            HTML, CSS, JavaScript (ES6+), Tailwind CSS, Bootstrap <br />
            <span className="font-bold">Tools & Platforms:</span> Git, GitHub,
            Postman, Vercel, Render
          </p>
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
//           <h1 className="text-3xl font-bold tracking-wide">Rohan Sharma</h1>

//           {/* Job Role */}
//           <p className="text-lg font-medium text-gray-800">
//             React.js / React Native Developer
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
