import React, { useCallback } from "react";

import {
	Chart, ChartCanvas,
	XAxis, YAxis,
	discontinuousTimeScaleProviderBuilder,
	CandlestickSeries
} from "react-financial-charts";

import Candle from "./implementations/candle.implementation";

const ChartView = (
	props: {
		data: Candle[],
		height?: number,
		margin?: { left: number, right: number, top: number, bottom: number },
		ratio?: number,
		width?: number,
	}
) => {

	const {
		data,
		height = 600,
		margin = { left: 0, right: 40, top: 0, bottom: 24 },
		ratio = 1,
		width = 600,
	} = props;

	const accesor = (candle: Candle) => candle.date;
	const xScaleProvider = discontinuousTimeScaleProviderBuilder().inputDateAccessor(accesor);
	const {
		data: xScaleData,
		xScale,
		xAccessor,
		displayXAccessor
	} = xScaleProvider(data);

	const yExtents = (candle: Candle) => [candle.high, candle.low];

	return (
		<ChartCanvas
			data={xScaleData}
			displayXAccessor={displayXAccessor}
			height={height}
			margin={margin}
			ratio={ratio}
			seriesName="ChartCanvas"
			width={width}
			xAccessor={xAccessor}
			xScale={xScale}
		>
			<Chart
				id={1}
				yExtents={yExtents}
			>
				<CandlestickSeries />
				<XAxis />
