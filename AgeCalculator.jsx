
import { useState } from "react";

export default function AgeCalculator() {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const birthDate = new Date(`${year}-${month}-${day}`);
    if (isNaN(birthDate.getTime())) {
      setAge("Invalid date");
      return;
    }

    const today = new Date();
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    setAge(`${years} years, ${months} months, ${days} days`);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-zinc-900 text-white p-8 rounded-2xl shadow-xl w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-6">Age Calculator</h1>
        <div className="grid grid-cols-3 gap-3 mb-6">
          <input type="number" placeholder="DD" value={day} onChange={e => setDay(e.target.value)} className="bg-zinc-800 text-white text-center rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
          <input type="number" placeholder="MM" value={month} onChange={e => setMonth(e.target.value)} className="bg-zinc-800 text-white text-center rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
          <input type="number" placeholder="YYYY" value={year} onChange={e => setYear(e.target.value)} className="bg-zinc-800 text-white text-center rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
        </div>
        <button onClick={calculateAge} className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-3 rounded-lg transition-all">Calculate</button>
        {age && <p className="mt-4 text-center text-lg">{age}</p>}
        <p className="mt-6 text-center text-sm text-zinc-500">Made by <span className="text-cyan-400">Your Name</span></p>
      </div>
    </div>
  );
}
