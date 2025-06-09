import { useState } from 'react';

export default function Home() {
  const [file, setFile] = useState(null);
  const [numEquipments, setNumEquipments] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for submission logic
    console.log({ file, numEquipments });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="bom">Load your Build Of Materials</label>
          <input
            id="bom"
            type="file"
            accept=".xlsx"
            onChange={(e) => setFile(e.target.files[0])}
            required
          />
        </div>
        <div>
          <label htmlFor="equipments">Number of Equipments</label>
          <input
            id="equipments"
            type="number"
            value={numEquipments}
            onChange={(e) => setNumEquipments(e.target.value)}
            min="1"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
