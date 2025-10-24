import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface DataTableProps {
  headers: string[];
  rows: (string | number)[][];
  className?: string;
}

export const DataTable = ({ headers, rows, className }: DataTableProps) => {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-primary/10 border-b border-border">
              {headers.map((header, idx) => (
                <th
                  key={idx}
                  className="px-6 py-4 text-left text-sm font-semibold text-foreground"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIdx) => (
              <tr
                key={rowIdx}
                className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors"
              >
                {row.map((cell, cellIdx) => (
                  <td
                    key={cellIdx}
                    className="px-6 py-4 text-sm text-foreground"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};
