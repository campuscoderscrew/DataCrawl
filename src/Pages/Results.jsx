import React from 'react'

export default function ResultsTable() {
  const handleView = (url) => {
    window.open(url, '_blank');
  };

  const handleDownload = (url) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = '';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const tableData = [
    { id: 1, name: 'Document 1', url: 'https://example.com/doc1', score: 0.95, size: '2.3 MB' },
    { id: 2, name: 'Document 2', url: 'https://example.com/doc2', score: 0.89, size: '1.1 MB' },
    { id: 3, name: 'Document 3', url: 'https://example.com/doc3', score: 0.78, size: '3.0 MB' },
    { id: 4, name: 'Document 4', url: 'https://example.com/doc4', score: 0.65, size: '4.7 MB' },
    { id: 5, name: 'Document 5', url: 'https://example.com/doc5', score: 0.60, size: '2.8 MB' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100 p-4">
      {/* Sidebar Filters */}
      <aside className="w-64 bg-white rounded-2xl shadow p-4">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>

        <div className="mb-6">
          <h3 className="text-sm font-medium mb-2">Date Range</h3>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="radio" name="date-range" />
              <span>Last 7 days</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="date-range" />
              <span>Last 30 days</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="date-range" />
              <span>Custom Range</span>
            </label>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-sm font-medium mb-2">Data Source</h3>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="radio" name="data-source" />
              <span>API Only</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="data-source" />
              <span>Website Only</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="data-source" />
              <span>Show All</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="data-source" />
              <span>Custom Source</span>
            </label>
          </div>
        </div>

        <button className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg">Clear All Filters</button>
      </aside>

      {/* Search Bar*/}
      <main className="flex-1 pt-24 px-6 pb-6">
        <div className="mb-12">
          <input
            type="text"
            placeholder="Search Results"
            className="w-full p-3 rounded-2xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        {/* Table */}
        <table className="w-full bg-white rounded-lg shadow overflow-hidden text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="w-15 p-4 border">ID</th>
              <th className="p-4 border">Name</th>
              <th className="p-4 border">Relevance score</th>
              <th className="p-4 border">Size</th>
              <th className="p-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((doc) => (
              <tr key={doc.id} className="hover:bg-gray-100">
                <td className="p-4 border">{doc.id}</td>
                <td className="p-4 border">
                  <a href={doc.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    {doc.name}
                  </a>
                </td>
                <td className="p-4 border">{doc.score}</td>
                <td className="p-4 border">{doc.size}</td>
                <td className="p-4 border space-x-2">
                  <button
                    onClick={() => handleView(doc.url)}
                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    View
                  </button>
                  <button
                    onClick={() => handleDownload(doc.url)}
                    className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                  >
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
