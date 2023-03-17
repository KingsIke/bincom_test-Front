// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Lga() {
//   const [selectedLGA, setSelectedLGA] = useState("");
//   const [totalResult, setTotalResult] = useState(0);
//   const [LGAs, setLGAs] = useState([]);

//   // Make a GET request to the Express API to retrieve a list of LGAs
//   useEffect(() => {
//     axios
//       .get("/api/lgas")
//       .then((response) => {
//         setLGAs(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   // Event listener for when the user selects a new LGA
//   const handleLGAChange = (event) => {
//     const selectedLGA = event.target.value;

//     // Make a GET request to the Express API to retrieve the sum of results for the selected LGA
//     axios
//       .get(`/api/results/${selectedLGA}`)
//       .then((response) => {
//         setTotalResult(response.data.totalResult);
//       })
//       .catch((error) => {
//         console.error(error);
//       });

//     setSelectedLGA(selectedLGA);
//   };

//   return (
//     <div>
//       <h1>Select an LGA</h1>
//       <select value={selectedLGA} onChange={handleLGAChange}>
//         <option value="">Select an LGA</option>
//         {LGAs.map((lga) => (
//           <option key={lga.id} value={lga.id}>
//             {lga.name}
//           </option>
//         ))}
//       </select>
//       {totalResult > 0 && <p>Total Result: {totalResult}</p>}
//     </div>
//   );
// }

// export default Lga;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//   const [lgas, setLgas] = useState([]);
//   const [selectedLga, setSelectedLga] = useState(null);
//   const [results, setResults] = useState([]);

//   useEffect(() => {
//     async function fetchLgas() {
//       const response = await axios.get('http://localhost:3200/lgas');
//       setLgas(response.data.results);
//     }

//     fetchLgas();
//   }, []);

//   async function handleLgaChange(event) {
//     const lgaId = event.target.value;
//     setSelectedLga(lgaId);
//     const response = await axios.get(`http://localhost:3200/lga-results/${lgaId}`);
//     setResults(response.data.results);
//   }

//   return (
//     <div>
//       <h1>Summed Total Result of Polling Units under LGA</h1>
//       <div>
//         <label>Select LGA: </label>
//         <select onChange={handleLgaChange}>
//           <option value="">Select an LGA</option>
//           {lgas.map(lga => (
//             <option key={lga.uniqueid} value={lga.uniqueid}>{lga.lga_name}</option>
//           ))}
//         </select>
//       </div>
//       {selectedLga && (
//         <table>
//           <thead>
//             <tr>
//               <th>Party</th>

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Lga() {
//   const [lgas, setLgas] = useState([]);
//   const [selectedLga, setSelectedLga] = useState(null);
//   const [pollingUnits, setPollingUnits] = useState([]);
//   const [totalResult, setTotalResult] = useState(null);

//   useEffect(() => {
//     // Fetch the list of LGAs
//     axios
//       .get("/lgas")
//       .then((response) => {
//         setLgas(response.data.lgas);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   useEffect(() => {
//     if (selectedLga) {
//       // Fetch the list of polling units for the selected LGA
//       axios
//         .get(`/polling-units/${selectedLga}`)
//         .then((response) => {
//           setPollingUnits(response.data.results);
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     }
//   }, [selectedLga]);

//   useEffect(() => {
//     // Calculate the total result for all polling units
//     let total = {
//       party1: 0,
//       party2: 0,
//       party3: 0,
//       party4: 0,
//       party5: 0,
//       party6: 0,
//       party7: 0,
//       party8: 0,
//       party9: 0,
//     };
//     pollingUnits.forEach((pu) => {
//       total.party1 += pu.party1;
//       total.party2 += pu.party2;
//       total.party3 += pu.party3;
//       total.party4 += pu.party4;
//       total.party5 += pu.party5;
//       total.party6 += pu.party6;
//       total.party7 += pu.party7;
//       total.party8 += pu.party8;
//       total.party9 += pu.party9;
//     });
//     setTotalResult(total);
//   }, [pollingUnits]);

//   function handleLgaChange(event) {
//     setSelectedLga(event.target.value);
//   }

//   return (
//     <div>
//       <h1>Summed Result</h1>
//       <label htmlFor="lga-select">Select Local Government Area:</label>
//       <select id="lga-select" value={selectedLga} onChange={handleLgaChange}>
//         <option value="">-- Select LGA --</option>
//         {lgas.map((lga) => (
//           <option key={lga.lga_id} value={lga.lga_id}>
//             {lga.lga_name}
//           </option>
//         ))}
//       </select>
//       {totalResult && (
//         <div>
//           <h2>Total Result</h2>
//           <ul>
//             <li>Party 1: {totalResult.party1}</li>
//             <li>Party 2: {totalResult.party2}</li>
//             <li>Party 3: {totalResult.party3}</li>
//             <li>Party 4: {totalResult.party4}</li>
//             <li>Party 5: {totalResult.party5}</li>
//             <li>Party 6: {totalResult.party6}</li>
//             <li>Party 7: {totalResult.party7}</li>
//             <li>Party 8: {totalResult.party8}</li>
//             <li>Party 9: {totalResult.party9}</li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Lga;

// import React, { useState, useEffect } from "react";

// function Lga() {
//   const [lgas, setLgas] = useState([]);
//   const [selectedLga, setSelectedLga] = useState(null);
//   const [totalScore, setTotalScore] = useState(null);

//   useEffect(() => {
//     fetch("/lgas")
//       .then((res) => res.json())
//       .then((data) => setLgas(data.lgas));
//   }, []);

//   function handleSelectLga(event) {
//     const id = event.target.value;
//     setSelectedLga(id);
//     fetch(`/local-government/${id}`)
//       .then((res) => res.json())
//       .then((data) => setTotalScore(data.totalScore));
//   }

//   return (
//     <div>
//       <h1>Summed Total Result of Polling Units</h1>
//       <div>
//         <label htmlFor="lga-select">Select a Local Government:</label>
//         <select id="lga-select" value={selectedLga} onChange={handleSelectLga}>
//           <option value="">-- Select an LGA --</option>
//           {lgas.map((lga) => (
//             <option key={lga.uniqueid} value={lga.uniqueid}>
//               {lga.lga_name}
//             </option>
//           ))}
//         </select>
//       </div>
//       {totalScore !== null && (
//         <div>
//           <p>
//             Total Score for {selectedLga}: {totalScore}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Lga;

import React, { useState, useEffect } from "react";
import axios from "axios";

function Lga() {
  const [lgas, setLgas] = useState([]);
  const [selectedLga, setSelectedLga] = useState("");
  const [totalResult, setTotalResult] = useState(null);

  useEffect(() => {
    // fetch list of LGAs from server
    axios.get("http://localhost:3200/lgas").then((response) => {
      setLgas(response.data);
    });
  }, []);

  const handleSelectLga = (event) => {
    setSelectedLga(event.target.value);
  };

  const handleSumTotal = () => {
    // trigger request to server to get sum of results for selected LGA
    axios.get(`http://localhost:3200/total/${selectedLga}`).then((response) => {
      setTotalResult(response.data.total);
    });
  };

  return (
    <div>
      <h1>Summed Total Result for Polling Units in LGA</h1>
      <div>
        <label>Select LGA:</label>
        <select value={selectedLga} onChange={handleSelectLga}>
          <option value="">--Select LGA--</option>
          {lgas.map((lga) => (
            <option key={lga.lga_id} value={lga.lga_id}>
              {lga.lga_name}
            </option>
          ))}
        </select>
      </div>
      <button disabled={!selectedLga} onClick={handleSumTotal}>
        Get Summed Total Result
      </button>
      {totalResult !== null && (
        <p>
          The summed total result for {selectedLga} is {totalResult}
        </p>
      )}
    </div>
  );
}

export default Lga;
