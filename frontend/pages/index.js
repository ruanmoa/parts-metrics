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
      <p className="description">
        Esta aplicação web foi desenvolvida para automatizar e otimizar o processo de aquisição de componentes eletrônicos a partir de uma Build Of Materials (BOM) fornecida pelo usuário. Ao carregar a BOM, a aplicação realiza consultas em tempo real às APIs dos distribuidores Digi-Key e Mouser, extraindo informações essenciais como disponibilidade em estoque, preço unitário, lotes mínimos e prazo de entrega.
      </p>
      <p className="description">
        Com base nesses dados, o sistema avalia múltiplos critérios e apresenta ao usuário a melhor estratégia de compra para cada item da lista, considerando:
      </p>
      <ul className="description-list">
        <li>Menor custo total de aquisição;</li>
        <li>Disponibilidade imediata ou prazo mais curto;</li>
        <li>Consolidação de fornecedores para reduzir o número de pedidos;</li>
        <li>Alternativas compatíveis em caso de indisponibilidade.</li>
      </ul>
      <p className="description">
        A ferramenta é ideal para engenheiros de hardware, compradores e equipes de P&D que buscam acelerar o processo de cotação e tomar decisões assertivas com base em dados atualizados e confiáveis.
      </p>
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
