import React, { useEffect, useMemo, useState } from 'react';
import yaml from 'js-yaml';
import {
  Eye,
  Download,
  Calendar,
  Globe,
  Layers,
  ChevronDown,
  Database
} from 'lucide-react';

import Navbar from "../Components/Navbar"

// File imports
import jsonData from '../mock-data/mock-data.json';
import yamlData from '../mock-data/mock-data.yaml?raw';
import xmlData from '../mock-data/mock-data.xml?raw';

const Results = () => {

  // State management
  const [data, setData] = useState([]);
  const [sourceType, setSourceType] = useState('yaml');
  const [filters, setFilters] = useState({
    dataSource: 'all',
    dateRange: '7days',
    startDate: '',
    endDate: '',
  });
  const [sortBy, setSortBy] = useState('relevance');
  const [sortOrder, setSortOrder] = useState('desc');
  const [currentPage, setCurrentPage] = useState(1);

  // Constants
  const ITEMS_PER_PAGE = 10;
  const DATE_RANGES = {
    SEVEN_DAYS: '7days',
    THIRTY_DAYS: '30days',
    CUSTOM: 'custom'
  };

  // Data loading effect
  useEffect(() => {
    const loadData = async () => {
      try {
        let parsedData = [];

        switch (sourceType) {
          case 'yaml':
            const parsedYaml = yaml.load(yamlData);
            parsedData = Array.isArray(parsedYaml?.items) ? parsedYaml.items : [];
            break;

          case 'xml':
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlData, "application/xml");
            const items = Array.from(xmlDoc.getElementsByTagName("item"));

            parsedData = items.map(item => ({
              id: parseInt(item.querySelector("id")?.textContent || '0', 10),
              name: item.querySelector("name")?.textContent || '',
              relevance: parseFloat(item.querySelector("relevance")?.textContent || '0'),
              size: item.querySelector("size")?.textContent || '',
              type: item.querySelector("type")?.textContent || '',
              downloadUrl: item.querySelector("downloadUrl")?.textContent || '',
              viewUrl: item.querySelector("viewUrl")?.textContent || '',
              date: item.querySelector("date")?.textContent || null,
            }));
            break;

          case 'json':
            parsedData = Array.isArray(jsonData) ? jsonData : [];
            break;

          default:
            console.warn(`Unsupported source type: ${sourceType}`);
            parsedData = [];
        }

        setData(parsedData);
        setCurrentPage(1);
      } catch (error) {
        console.error(`Error loading ${sourceType.toUpperCase()} data:`, error);
        setData([]);
      }
    };

    loadData();
  }, [sourceType]);

  // Utility
  const parseDate = (dateString) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? null : date;
  };

  const isWithinDateRange = (item) => {
    if (!item.date) return true;

    const itemDate = parseDate(item.date);
    if (!itemDate) return true;

    const now = new Date();
    const millisecondsPerDay = 24 * 60 * 60 * 1000;

    switch (filters.dateRange) {
      case DATE_RANGES.SEVEN_DAYS:
        return now - itemDate <= 7 * millisecondsPerDay;

      case DATE_RANGES.THIRTY_DAYS:
        return now - itemDate <= 30 * millisecondsPerDay;

      case DATE_RANGES.CUSTOM:
        const startDate = parseDate(filters.startDate);
        const endDate = parseDate(filters.endDate);
        if (!startDate || !endDate) return true;
        return itemDate >= startDate && itemDate <= endDate;

      default:
        return true;
    }
  };

  const getRelevanceColor = (relevance) => {
    if (relevance >= 0.8) return 'bg-green-500';
    if (relevance >= 0.6) return 'bg-yellow-500';
    if (relevance >= 0.4) return 'bg-orange-500';
    return 'bg-red-500';
  };

  const getRelevanceScore = (relevance) => Math.round(relevance * 100);

  const getSourceIcon = (type) => {
    switch (type) {
      case 'api':
        return <Database className="w-4 h-4 text-blue-600" />;
      case 'website':
        return <Globe className="w-4 h-4 text-green-600" />;
      default:
        return <Layers className="w-4 h-4 text-purple-600" />;
    }
  };

  const getSourceLabel = (type) => {
    switch (type) {
      case 'api':
        return 'API';
      case 'website':
        return 'Website';
      default:
        return 'Custom';
    }
  };

  // Data processing
  const sortedData = useMemo(() => {
    return [...data].sort((a, b) => {
      let comparison = 0;

      switch (sortBy) {
        case 'relevance':
          comparison = b.relevance - a.relevance;
          break;
        case 'name':
          comparison = a.name.localeCompare(b.name);
          break;
        case 'size':
          comparison = parseFloat(a.size || '0') - parseFloat(b.size || '0');
          break;
        default:
          comparison = 0;
      }

      return sortOrder === 'asc' ? comparison : -comparison;
    });
  }, [data, sortBy, sortOrder]);

  const filteredData = useMemo(() => {
    return sortedData.filter(item => {
      // Filter by data source
      if (filters.dataSource !== 'all' && item.type !== filters.dataSource) {
        return false;
      }

      // Filter by date range
      return isWithinDateRange(item);
    });
  }, [sortedData, filters]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredData.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredData, currentPage]);

  const totalPages = Math.max(1, Math.ceil(filteredData.length / ITEMS_PER_PAGE));

  // Reset page if necessary
  useEffect(() => {
    if (currentPage > totalPages && filteredData.length > 0) {
      setCurrentPage(1);
    }
  }, [totalPages, currentPage, filteredData.length]);

  // Event handlers
  const handleSourceTypeChange = (newSourceType) => {
    setSourceType(newSourceType);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
    setCurrentPage(1);
  };

  const handleSortChange = (field, order) => {
    setSortBy(field);
    setSortOrder(order);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(Math.max(1, Math.min(totalPages, newPage)));
  };

  const handleViewItem = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleDownloadItem = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const applyCustomDateFilter = () => {
    setCurrentPage(1);
  };

  return (

    <div className="min-h-screen bg-gray-100 flex " style={{ paddingTop: '20px' }}>
      <Navbar />
      {/* Sidebar */}
      <aside className="py-22 w-64 bg-white shadow-lg p-6" style={{ paddingRight: '20px' }}>
        {/* Logo */}
        <header className="mb-6">
          <div className="bg-gray-400 rounded-lg px-4 py-2 text-center">
            <span className="text-white font-semibold text-lg">WebCrawler</span>
          </div>
        </header>

        {/* Data Source File Type Selection */}
        <section className="mb-6">
          <label className="block font-medium text-gray-700 mb-2" htmlFor="sourceTypeSelect">
            Select Data Source File
          </label>
          <select
            id="sourceTypeSelect"
            value={sourceType}
            onChange={(e) => handleSourceTypeChange(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="yaml">YAML</option>
            <option value="xml">XML</option>
            <option value="json">JSON</option>
          </select>
        </section>

        {/* Data Source Filter */}
        <section className="mb-6">
          <h3 className="font-medium text-gray-700 mb-3">Data Source</h3>
          <div className="space-y-2">
            {[
              { value: 'all', label: 'Show All' },
              { value: 'api', label: 'API' },
              { value: 'website', label: 'Website' }
            ].map(({ value, label }) => (
              <button
                key={value}
                onClick={() => handleFilterChange('dataSource', value)}
                className={`w-full px-4 py-2 rounded-md text-left text-sm font-medium transition-all duration-200 ${filters.dataSource === value
                  ? 'bg-blue-100 text-blue-800 border-2 border-blue-300 shadow-md'
                  : 'bg-gray-50 text-gray-700 border border-gray-200 hover:bg-gray-100 hover:shadow-sm'
                  }`}
              >
                {label}
              </button>
            ))}
          </div>
        </section>

        {/* Date Range Filter */}
        <section>
          <h3 className="font-medium text-gray-700 mb-3 flex items-center space-x-2">
            <Calendar className="w-4 h-4" />
            <span>Date Range</span>
          </h3>
          <div className="space-y-3">
            {[
              { label: 'Last 7 Days', value: DATE_RANGES.SEVEN_DAYS },
              { label: 'Last 30 Days', value: DATE_RANGES.THIRTY_DAYS },
              { label: 'Custom Range', value: DATE_RANGES.CUSTOM },
            ].map(({ label, value }) => (
              <label key={value} className="flex items-center space-x-3 text-sm cursor-pointer">
                <input
                  type="radio"
                  name="dateRange"
                  value={value}
                  checked={filters.dateRange === value}
                  onChange={(e) => handleFilterChange('dateRange', e.target.value)}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="text-gray-700">{label}</span>
              </label>
            ))}
          </div>

          {/* Custom Date Range Inputs [WILL REPLACE LATER WITH CAROLINA FUNCTIONALITY] */}
          {filters.dateRange === DATE_RANGES.CUSTOM && (
            <div className="mt-4 space-y-3 p-3 bg-gray-50 rounded-md">
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Start Date
                </label>
                <input
                  type="date"
                  value={filters.startDate}
                  onChange={(e) => handleFilterChange('startDate', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  End Date
                </label>
                <input
                  type="date"
                  value={filters.endDate}
                  onChange={(e) => handleFilterChange('endDate', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button
                onClick={applyCustomDateFilter}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
              >
                Apply Custom Range
              </button>
            </div>
          )}
        </section>
      </aside>

      {/* Main Content */}
      <main className="py-22 flex-1 p-8 bg-gray-50">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">

          {/* Header AND Sorting Controls */}
          <header className="px-6 py-4 border-b border-gray-200 bg-white">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold text-gray-900">Search Results</h1>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <label className="text-sm font-medium text-gray-600">Sort by:</label>
                  <select
                    value={sortBy}
                    onChange={(e) => handleSortChange(e.target.value, sortOrder)}
                    className="text-sm border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="relevance">Relevance</option>
                    <option value="name">Name</option>
                    <option value="size">Size</option>
                  </select>
                </div>

                <div className="flex items-center space-x-2">
                  <label className="text-sm font-medium text-gray-600">Order:</label>
                  <select
                    value={sortOrder}
                    onChange={(e) => handleSortChange(sortBy, e.target.value)}
                    className="text-sm border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="desc">Descending</option>
                    <option value="asc">Ascending</option>
                  </select>
                </div>

                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </header>

          {/* Results Table Header */}
          <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-gray-50 border-b border-gray-200">
            <div className="col-span-1 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              ID
            </div>
            <div className="col-span-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Name
            </div>
            <div className="col-span-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Relevance
            </div>
            <div className="col-span-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Source
            </div>
            <div className="col-span-1 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Size
            </div>
            <div className="col-span-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Actions
            </div>
          </div>

          {/* Results Table Body */}
          <div className="divide-y divide-gray-200">
            {paginatedData.length === 0 ? (
              <div className="p-8 text-center">
                <p className="text-gray-500 text-lg">No results found</p>
                <p className="text-gray-400 text-sm mt-1">
                  Try adjusting your filters or search criteria
                </p>
              </div>
            ) : (
              paginatedData.map((item, index) => (
                <div
                  key={item.id || index}
                  className="grid grid-cols-12 gap-4 px-6 py-4 items-center hover:bg-gray-50 transition-colors duration-150"
                >
                  <div className="col-span-1 text-sm font-medium text-gray-900">
                    {item.id}
                  </div>

                  <div className="col-span-3">
                    <p className="text-sm font-medium text-gray-900 truncate" title={item.name}>
                      {item.name}
                    </p>
                  </div>

                  <div className="col-span-3 flex items-center space-x-3">
                    <span className="text-sm font-semibold text-gray-900 min-w-[2rem]">
                      {getRelevanceScore(item.relevance)}%
                    </span>
                    <div className="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-300 ${getRelevanceColor(item.relevance)}`}
                        style={{ width: `${item.relevance * 100}%` }}
                      />
                    </div>
                  </div>

                  <div className="col-span-2 flex items-center space-x-2">
                    {getSourceIcon(item.type)}
                    <span className="text-sm font-medium text-gray-700">
                      {getSourceLabel(item.type)}
                    </span>
                  </div>

                  <div className="col-span-1 text-sm text-gray-600">
                    {item.size || 'N/A'}
                  </div>

                  <div className="col-span-2 flex space-x-2">
                    <button
                      onClick={() => handleViewItem(item.viewUrl)}
                      className="inline-flex items-center px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-md hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                      disabled={!item.viewUrl}
                    >
                      <Eye className="w-3 h-3 mr-1" />
                      View
                    </button>
                    <button
                      onClick={() => handleDownloadItem(item.downloadUrl)}
                      className="inline-flex items-center px-3 py-1 bg-green-600 text-white text-xs font-medium rounded-md hover:bg-green-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1"
                      disabled={!item.downloadUrl}
                    >
                      <Download className="w-3 h-3 mr-1" />
                      Download
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Pagination Stuff */}
          {filteredData.length > 0 && (
            <footer className="px-6 py-4 border-t border-gray-200 bg-white">
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600">
                  Showing {Math.min((currentPage - 1) * ITEMS_PER_PAGE + 1, filteredData.length)} to{' '}
                  {Math.min(currentPage * ITEMS_PER_PAGE, filteredData.length)} of {filteredData.length} results
                </p>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                  >
                    Previous
                  </button>

                  <span className="text-sm font-medium text-gray-700 px-4">
                    Page {currentPage} of {totalPages}
                  </span>

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                  >
                    Next
                  </button>
                </div>
              </div>
            </footer>
          )}
        </div>
      </main>
    </div>
  );
};

export default Results;