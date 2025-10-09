import React, { useMemo } from "react";

const LEVELS = ["easy", "medium", "hard", "insane"];
const COLORS = {
	easy: "#f5d142",
	medium: "#f0a542",
	hard: "#e15b3a",
	insane: "#b00020",
};

// Helpers
const deg2rad = (deg) => (deg * Math.PI) / 180;
const polar = (cx, cy, r, deg) => ({
	x: cx + r * Math.cos(deg2rad(deg)),
	y: cy + r * Math.sin(deg2rad(deg)),
});

const DifficultyGauge = ({ level = "easy", label = true }) => {
	const normalized = LEVELS.includes(level?.toLowerCase())
		? level.toLowerCase()
		: "easy";
	const idx = LEVELS.indexOf(normalized);

	// Geometry (larger canvas so everything breathes)
	const W = 200;
	const H = 100;
	const cx = 100;
	const cy = 100;
	const R = 80; // arc radius
	const start = -180; // left
	const end = 0; // right

	// 4 stops evenly across the 180° arc
	const tickAngles = [-180, -120, -60, 0];

	// Needle angle maps to those stops
	const angle = useMemo(() => tickAngles[idx], [idx]);

	// Needle length
	const needleLen = 90;
	const needleEnd = polar(cx, cy, needleLen, angle);

	// Tick line coords + dynamic label coords (centered under each tick)
	const ticks = tickAngles.map((a) => {
		const inner = polar(cx, cy, R - 8, a);
		const outer = polar(cx, cy, R, a);
		const label = polar(cx, cy, R - 16, a); // push a bit below the arc
		return { inner, outer, label, a };
	});

	// Simple large-arc path for background track
	const arcPath = `M ${polar(cx, cy, R, start).x},${polar(cx, cy, R, start).y}
                   A ${R},${R} 0 0 1 ${polar(cx, cy, R, end).x},${
		polar(cx, cy, R, end).y
	}`;

	return (
		<div
			className="difficulty-gauge"
			style={{ width: "100%", height: "100%" }}
		>
			<svg
				viewBox={`0 0 ${W} ${H}`}
				width="100%"
				height="100%"
				aria-label={`Difficulty: ${normalized}`}
			>
				{/* Track */}
				<path
					d={arcPath}
					fill="none"
					stroke="#474747ff"
					strokeWidth="14"
					strokeLinecap="round"
				/>

				{/* Ticks */}
				{ticks.map((t, i) => (
					<line
						key={i}
						x1={t.inner.x}
						y1={t.inner.y}
						x2={t.outer.x}
						y2={t.outer.y}
						stroke={i === idx ? "#bbb" : "#777"}
						strokeWidth={i === idx ? 3.5 : 2.5}
						opacity={i === idx ? 1 : 0.85}
					/>
				))}

				{/* Needle */}
				<line
					x1={cx}
					y1={cy}
					x2={needleEnd.x}
					y2={needleEnd.y}
					stroke={COLORS[normalized]}
					strokeWidth="6"
					strokeLinecap="round"
				/>
				<circle cx={cx} cy={cy} r="6" fill={COLORS[normalized]} />

				{/* Labels under ticks (centered on tick x) */}
				<g fontSize="11" fill="#cfcfcf">
					{ticks.map((t, i) => (
						<text
							key={`lbl-${i}`}
							x={t.label.x}
							y={t.label.y + 10}
							textAnchor="middle"
						>
							{LEVELS[i]}
						</text>
					))}
				</g>

				{/* Bubble label near top center */}
				{label && (
					<g>
						<rect
							x={cx - 36}
							y={8}
							rx="6"
							ry="6"
							width="72"
							height="22"
							fill="#262626"
							stroke="#3a3a3a"
						/>
						<text
							x={cx}
							y={24}
							textAnchor="middle"
							fontSize="12"
							fontWeight="700"
							fill={COLORS[normalized]}
						>
							{normalized.toUpperCase()}
						</text>
					</g>
				)}
			</svg>
		</div>
	);
};

export default DifficultyGauge;
