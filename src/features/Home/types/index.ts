export interface DashboardAnalyticsType {
  prices: {
    [key: string]: number[];
  };
  category: ChartDataType;
  stocks: ChartDataType;
}

export interface LineChartDataType {
  [key: string]: number[];
}
export interface ChartDataType {
  [key: string]: number;
}
