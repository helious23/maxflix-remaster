import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

interface ChartProps {
  coinId: string;
}

interface IHistoryData {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

export const Chart = ({ coinId }: ChartProps) => {
  const { isLoading, data } = useQuery<IHistoryData[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  return (
    <div>
      {isLoading ? (
        "Loading Chart..."
      ) : (
        <>
          <ApexChart
            type="line"
            series={[
              {
                name: "Close Price",
                data: data?.map((price) => price.close),
              },
            ]}
            options={{
              theme: {
                mode: "dark",
              },
              chart: {
                height: 300,
                width: 500,
                toolbar: {
                  show: false,
                },
                background: "transparent",
              },
              stroke: {
                curve: "smooth",
                width: 5,
              },
              grid: {
                show: false,
              },
              yaxis: {
                show: false,
              },
              xaxis: {
                axisBorder: {
                  show: false,
                },
                labels: {
                  show: false,
                },
                axisTicks: {
                  show: false,
                },
                categories: data?.map((price) => price.time_close),
                type: "datetime",
              },
              fill: {
                type: "gradient",
                gradient: {
                  gradientToColors: ["#0be881"],
                  stops: [0, 100],
                },
              },
              colors: ["#0fbcf9"],
              tooltip: {
                y: {
                  formatter: (value) => `$ ${value.toFixed(2)}`,
                },
              },
            }}
          />
          <ApexChart
            type="candlestick"
            series={[
              {
                data: data?.map((price) => ({
                  x: price.time_close,
                  y: [
                    price.open.toFixed(2),
                    price.high.toFixed(2),
                    price.close.toFixed(2),
                    price.low.toFixed(2),
                  ],
                })),
              },
            ]}
            options={{
              theme: {
                mode: "dark",
              },
              chart: {
                type: "candlestick",
                toolbar: {
                  show: false,
                },
                background: "transparent",
              },

              xaxis: {
                type: "datetime",
              },
              yaxis: {
                show: false,
              },
              plotOptions: {
                candlestick: {
                  colors: {
                    upward: "#3b72eb",
                    downward: "#fd3b3b",
                  },
                },
              },
            }}
          />
        </>
      )}
    </div>
  );
};
