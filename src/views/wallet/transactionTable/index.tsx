export default function TransactionTable() {
  const tableData = [
    { date: "2023-12-30", description: "OPENING BALANCE", amount: "+0.00" },
    // Add more data objects as needed
  ];
  return (
    <table className="bg-white border border-gray-300 rounded-md p-4 mb-8">
      <thead>
        <tr>
          <th>DATE</th>
          <th>DESCRIPTION</th>
          <th>AMOUNT</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((item, index) => (
          <tr key={index}>
            <td>{item.date}</td>
            <td>{item.description}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
