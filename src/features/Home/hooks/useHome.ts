import { useSelector } from "react-redux";
import { DashboardAnalyticsType } from "../types";
import { useEffect, useState } from "react";
import { Product } from "../../../types/product";
import { MainStore } from "../../../types/storeType";

/**
 * Custom hook for managing dashboard analytics data
 * Processes product data to generate statistics for categories, stock status, and prices
 */
export const useHome = () => {
  const products = useSelector((state: MainStore) => state.mainStore.products);
  const [dashboardAnalytics, setDashboardAnalytics] =
    useState<DashboardAnalyticsType>({
      category: {},
      prices: {},
      stocks: {},
    });

  useEffect(() => {
    if (products?.length) {
      getDashboardAnalytics();
    }
  }, [products]);

  /**
   * Processes products array to generate analytics data
   * Uses reduce to accumulate counts and arrays for different metrics
   */
  const getDashboardAnalytics = () => {
    const chartData = products.reduce(
      (accumulator: DashboardAnalyticsType, product: Product) => {
        const { category, stockStatus, price } = product;

        // Count products per category
        {
          if (accumulator.category[category]) accumulator.category[category]++;
          else accumulator.category[category] = 1;
        }

        // Count products per stock status
        {
          if (accumulator.stocks[stockStatus])
            accumulator.stocks[stockStatus]++;
          else accumulator.stocks[stockStatus] = 1;
        }

        // Collect prices per category
        {
          if (!accumulator?.prices[category]) accumulator.prices[category] = [];
          accumulator.prices[category].push(price);
        }

        return accumulator;
      },
      { category: {}, stocks: {}, prices: {} }
    );
    setDashboardAnalytics(chartData);
  };

  return {
    dashboardAnalytics, // Return processed analytics data
  };
};
