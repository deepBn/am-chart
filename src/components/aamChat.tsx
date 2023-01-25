import * as am5 from '@amcharts/amcharts5';
import * as am5stock from '@amcharts/amcharts5/stock';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Dark';
import { useLayoutEffect } from 'react';
import React from 'react';
import { data } from './data';

const AamChat = () => {
    useLayoutEffect(() => {
        /**
  * ---------------------------------------
  * This demo was created using amCharts 5.
  * 
  * For more information visit:
  * https://www.amcharts.com/
  * 
  * Documentation is available at:
  * https://www.amcharts.com/docs/v5/
  * ---------------------------------------
  */

        // Create root element
        // -------------------------------------------------------------------------------
        // https://www.amcharts.com/docs/v5/getting-started/#Root_element
        let root = am5.Root.new("chartdiv");


        // Set themes
        // -------------------------------------------------------------------------------
        // https://www.amcharts.com/docs/v5/concepts/themes/
        root.setThemes([
            am5themes_Animated.new(root)
        ]);


        // Create a stock chart
        // -------------------------------------------------------------------------------
        // https://www.amcharts.com/docs/v5/charts/stock-chart/#Instantiating_the_chart
        let stockChart = root.container.children.push(am5stock.StockChart.new(root, {
        }));


        // Set global number format
        // -------------------------------------------------------------------------------
        // https://www.amcharts.com/docs/v5/concepts/formatters/formatting-numbers/
        root.numberFormatter.set("numberFormat", "#,###.00");


        // Create a main stock panel (chart)
        // -------------------------------------------------------------------------------
        // https://www.amcharts.com/docs/v5/charts/stock-chart/#Adding_panels
        let mainPanel = stockChart.panels.push(am5stock.StockPanel.new(root, {
            panX: false,
            panY: false,
            // wheelX: "panY",
            wheelY: "zoomX"
        }));


        // Create value axis
        // -------------------------------------------------------------------------------
        // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
        let valueAxis = mainPanel.yAxes.push(am5xy.ValueAxis.new(root, {
            renderer: am5xy.AxisRendererY.new(root, {
                // pan: "zoom"
            }),
            extraMin: 0.2, // adds some space for for main series
            tooltip: am5.Tooltip.new(root, {}),
            numberFormat: "#,###.00",
            extraTooltipPrecision: 2
        }));

        let dateAxis = mainPanel.xAxes.push(am5xy.GaplessDateAxis.new(root, {
            baseInterval: {
                timeUnit: "minute",
                count: 1
            },
            renderer: am5xy.AxisRendererX.new(root, {
                // pan: 'zoom'
            }),
            extraMin: 0.2,
            tooltip: am5.Tooltip.new(root, {})
        }));


        // Add series
        // -------------------------------------------------------------------------------
        // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
        let valueSeries = mainPanel.series.push(am5xy.CandlestickSeries.new(root, {
            name: "MSFT",
            clustered: false,
            valueXField: "Date",
            valueYField: "Close",
            highValueYField: "High",
            lowValueYField: "Low",
            openValueYField: "Open",
            calculateAggregates: true,
            xAxis: dateAxis,
            yAxis: valueAxis,
            legendValueText: "open: [bold]{openValueY}[/] high: [bold]{highValueY}[/] low: [bold]{lowValueY}[/] close: [bold]{valueY}[/]",
            legendRangeValueText: ""
        }));


        // Set main value series
        // -------------------------------------------------------------------------------
        // https://www.amcharts.com/docs/v5/charts/stock-chart/#Setting_main_series
        stockChart.set("stockSeries", valueSeries);


        // Add a stock legend
        // -------------------------------------------------------------------------------
        // https://www.amcharts.com/docs/v5/charts/stock-chart/stock-legend/
        let valueLegend = mainPanel.plotContainer.children.push(am5stock.StockLegend.new(root, {
            stockChart: stockChart
        }));

        valueLegend.settingsButtons.template.set("visible", false);
        valueLegend.closeButtons.template.set("visible", false);


        // Create volume axis
        // -------------------------------------------------------------------------------
        // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
        let volumeAxisRenderer = am5xy.AxisRendererY.new(root, {
            inside: true
        });

        volumeAxisRenderer.labels.template.set("forceHidden", false);
        volumeAxisRenderer.grid.template.set("forceHidden", true);

        let volumeValueAxis = mainPanel.yAxes.push(am5xy.ValueAxis.new(root, {
            numberFormat: "#.#a",
            height: am5.percent(20),
            y: am5.percent(100),
            centerY: am5.percent(100),
            renderer: volumeAxisRenderer
        }));

        // Add series
        // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
        let volumeSeries = mainPanel.series.push(am5xy.ColumnSeries.new(root, {
            name: "Volume",
            clustered: false,
            valueXField: "Date",
            valueYField: "Volume",
            xAxis: dateAxis,
            yAxis: volumeValueAxis,
            legendValueText: "[bold]{valueY.formatNumber('#,###.0a')}[/]"
        }));

        volumeSeries.columns.template.setAll({
            strokeOpacity: 0,
            fillOpacity: 0.5
        });

        // color columns by stock rules
        volumeSeries.columns.template.adapters.add("fill", function (fill, target) {
            let dataItem = target.dataItem;
            if (dataItem) {
                return stockChart.getVolumeColor(dataItem);
            }
            return fill;
        })


        // Set main series
        // -------------------------------------------------------------------------------
        // https://www.amcharts.com/docs/v5/charts/stock-chart/#Setting_main_series
        stockChart.set("volumeSeries", volumeSeries);
        valueLegend.data.setAll([valueSeries, volumeSeries]);


        // Add cursor(s)
        // -------------------------------------------------------------------------------
        // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
        var cursor = mainPanel.set("cursor", am5xy.XYCursor.new(root, {
            // behavior: 'zoomY',   
        }));

        // Add scrollbar
        // -------------------------------------------------------------------------------
        // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
        let scrollbar = mainPanel.set("scrollbarX", am5xy.XYChartScrollbar.new(root, {
            orientation: "horizontal",
            // height: 50
        }));
        stockChart.toolsContainer.children.push(scrollbar);

        let sbDateAxis = scrollbar.chart.xAxes.push(am5xy.GaplessDateAxis.new(root, {
            baseInterval: {
                timeUnit: "minute",
                count: 1
            },
            renderer: am5xy.AxisRendererX.new(root, {})
        }));

        let sbValueAxis = scrollbar.chart.yAxes.push(am5xy.ValueAxis.new(root, {
            renderer: am5xy.AxisRendererY.new(root, {})
        }));

        let sbSeries = scrollbar.chart.series.push(am5xy.LineSeries.new(root, {
            valueYField: "Close",
            valueXField: "Date",
            xAxis: sbDateAxis,
            yAxis: sbValueAxis
        }));

        sbSeries.fills.template.setAll({
            visible: true,
            fillOpacity: 0.3
        });

        // add Bollinger Bands indicator
        let bollingerBands = stockChart.indicators.push(am5stock.BollingerBands.new(root, {
            stockChart: stockChart,
            stockSeries: valueSeries,
            legend: valueLegend
        }));


        // Interval switcher
        // -------------------------------------------------------------------------------
        // https://www.amcharts.com/docs/v5/charts/stock/toolbar/interval-control/
        var intervalSwitcher = am5stock.IntervalControl.new(root, {
            stockChart: stockChart,
            items: [
                { id: "1 minute", label: "1 minute", interval: { timeUnit: "minute", count: 1 } },
                { id: "2 minute", label: "2 minutes", interval: { timeUnit: "minute", count: 2 } },
                { id: "5 minute", label: "5 minutes", interval: { timeUnit: "minute", count: 5 } },
                { id: "15 minute", label: "15 minutes", interval: { timeUnit: "minute", count: 15 } },
                { id: "30 minute", label: "30 minutes", interval: { timeUnit: "minute", count: 30 } },
                { id: "1 hour", label: "1 hour", interval: { timeUnit: "hour", count: 1 } },
                { id: "4 hour", label: "4 hours", interval: { timeUnit: "hour", count: 4 } },
                { id: "1 day", label: "1 day", interval: { timeUnit: "day", count: 1 } },
                { id: "1 week", label: "1 week", interval: { timeUnit: "week", count: 1 } },
                { id: "1 month", label: "1 month", interval: { timeUnit: "month", count: 1 } },
                { id: "1 year", label: "1 year", interval: { timeUnit: "year", count: 1 } }
            ]
        });
        // const setDataInterval = (interval) => {

        // }

        // intervalSwitcher.events.on("selected", function (ev) {
        //     // Determine selected granularity
        //     setDataInterval(ev.item.interval)
        // })


        // Stock toolbar
        // -------------------------------------------------------------------------------
        // https://www.amcharts.com/docs/v5/charts/stock/toolbar/
        let toolbar = am5stock.StockToolbar.new(root, {
            container: document.getElementById("chartcontrols")!,
            stockChart: stockChart,
            controls: [
                am5stock.IndicatorControl.new(root, {
                    stockChart: stockChart,
                    legend: valueLegend
                }),
                am5stock.DateRangeSelector.new(root, {
                    stockChart: stockChart
                }),
                // am5stock.PeriodSelector.new(root, {
                //     stockChart: stockChart
                // }),

                am5stock.DrawingControl.new(root, {
                    stockChart: stockChart
                }),
                am5stock.ResetControl.new(root, {
                    stockChart: stockChart
                }),
                am5stock.SettingsControl.new(root, {
                    stockChart: stockChart
                }),
                intervalSwitcher

            ]
        })



        // set data to all series
        valueSeries.data.setAll(data.reverse());
        volumeSeries.data.setAll(data.reverse());
        // sbSeries.data.setAll(data);


        return () => {
            root.dispose();
        };
    }, []);

    return (
        <div style={{ backgroundColor: "black" }}>
            <div id="chartcontrols" style={{ height: 'auto', padding: '5px 5px 0 16px', maxWidth: '100%' }} />
            <div id="chartdiv" style={{ width: '100%', height: '500px', maxWidth: '100%' }}></div>
        </div >
    );
};

export default AamChat;
