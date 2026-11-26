// import { useState } from 'react';
// import { INITIAL_FLAVORS, SCOOP_LIMIT, PRICE_PER_SCOOP } from './data/flavors';
// import NoticeArea from './components/NoticeArea';
// import FlavorCard from './components/FlavorCard';
// import OrderSummary from './components/OrderSummary';
// import './App.css';

// function App() {

//     const [flavors, setFlavors] = useState(INITIAL_FLAVORS);
//     const [scoopLimit] = useState(SCOOP_LIMIT);
//     const [showOnlyAvailable, setShowOnlyAvailable] = useState(false);

//     const totalScoops = flavors.reduce((sum, flavor) => sum + flavor.scoopsSelected, 0);
//     const totalPrice = totalScoops * PRICE_PER_SCOOP;
//     const favoritesCount = flavors.filter((flavor) => flavor.isFavorite).length;

//     const visibleFlavors = showOnlyAvailable
//       ? flavors.filter((flavor) => !flavor.isSoldOut)
//       : flavors;

//     function handleAddScoop(id) {
//     if (totalScoops >= scoopLimit) return;

//     setFlavors((prevFlavors) =>
//       prevFlavors.map((flavor) => {
//         if (flavor.id !== id) return flavor;
//         if (flavor.isSoldOut) return flavor;

//         const nextScoops = flavor.scoopsSelected + 1;
//         const reachedFlavorStock = nextScoops >= flavor.availableStock;

//         return {
//           ...flavor,
//           scoopsSelected: nextScoops,
//           isSoldOut: reachedFlavorStock,
//         };
//       })
//     );
//   }


//   return (
//     <div className="App">
   
//     </div>
//   );
// }

// export default App;


import { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [logs, setLogs] = useState([]);

  const addLog = (msg) => {
    const time = new Date().toLocaleTimeString();
    console.log(`[${time}] ${msg}`);
    setLogs((prev) => [`[${time}] ${msg}`, ...prev.slice(0, 19)]);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      // כאן count "קפוא" לערך שהיה בזמן יצירת ה-interval הספציפי הזה
      const nextValue = count + 1;
      addLog(
        `interval #${intervalId} פעל (נוצר כש-count=${count}) -> קורא ל-setCount(${nextValue})`
      );
      setCount(nextValue);
    }, 1000);

    addLog(`נוצר interval #${intervalId} עבור count=${count} (ללא ניקוי!)`);

    // בכוונה אין כאן: return () => clearInterval(intervalId);
  }, [count]);

  return (
    <div dir="rtl" style={{ fontFamily: "sans-serif", padding: 20 }}>
      <h2>מונה ללא ניקוי (עם [count])</h2>
      <p style={{ fontSize: 28, fontWeight: "bold" }}>count נוכחי: {count}</p>
      <p style={{ color: "#666" }}>
        שים לב איך אחרי כמה שניות המספר מפסיק לעלות לערכים חדשים ונתקע/קופץ — כי כמה intervals רצים במקביל וכל אחד קורא ל-<code>setCount(count + 1)</code> עם ה-<code>count</code> הישן שלו.
      </p>

      <h3>לוגים (גם ב-Console של הדפדפן):</h3>
      <ul style={{ background: "#111", color: "#0f0", padding: 14, borderRadius: 8, listStyle: "none" }}>
        {logs.map((entry, i) => (
          <li key={i} style={{ marginBottom: 6, fontFamily: "monospace" }}>
            {entry}
          </li>
        ))}
      </ul>
    </div>
  );
}