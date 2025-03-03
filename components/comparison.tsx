'use client';

import React from 'react';

interface ComparisonProps {
  columns: string[];
  rows: Record<string, string>[];
}

export function Comparison({ columns, rows = [] }: ComparisonProps) {
  if (!columns || columns.length === 0) {
    console.error("Comparison: columns is undefined or empty");
    return null;
  }

  if (!rows || rows.length === 0) {
    console.error("Comparison: rows is undefined or empty");
    return null;
  }

  return (
    <div className="prose my-6 overflow-auto prose-no-margin">
      <table className="w-full whitespace-nowrap text-sm text-fd-muted-foreground">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index} className="px-4 py-2 text-left bg-fd-secondary/50">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b border-fd-border">
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="px-4 py-2">
                  {row[column] || "—"} {/* Fallback for missing data */}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}