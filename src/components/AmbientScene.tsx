const stars = [
  [4, 12, 1.2, 0.2, 4.8, 0.78], [9, 37, 1.8, 1.7, 6.2, 0.58],
  [14, 22, 1, 3.1, 5.4, 0.9], [18, 7, 2.2, 0.8, 7.1, 0.62],
  [22, 45, 1.4, 4.5, 5.9, 0.72], [27, 16, 1, 2.2, 4.6, 0.82],
  [31, 31, 2.4, 5.2, 7.8, 0.54], [35, 9, 1.3, 1.1, 5.2, 0.76],
  [39, 52, 1.7, 3.8, 6.6, 0.66], [43, 20, 1, 0.4, 4.9, 0.88],
  [48, 6, 1.9, 4.1, 7.4, 0.58], [52, 38, 1.2, 2.7, 5.6, 0.74],
  [56, 14, 2.5, 1.4, 8.2, 0.5], [61, 27, 1, 5.6, 4.7, 0.86],
  [65, 48, 1.5, 0.9, 6.1, 0.7], [69, 8, 1.1, 3.3, 5.3, 0.82],
  [73, 34, 2.1, 2, 7.5, 0.56], [77, 18, 1.4, 4.8, 6.8, 0.7],
  [81, 43, 1, 1.8, 4.5, 0.88], [85, 11, 2.3, 3.6, 7.9, 0.54],
  [89, 29, 1.5, 0.6, 5.7, 0.72], [94, 17, 1, 5.1, 6.4, 0.8],
  [7, 56, 1, 4.2, 5.1, 0.72], [24, 61, 1.6, 1.3, 6.9, 0.58],
  [46, 59, 1.1, 3.5, 4.8, 0.8], [58, 65, 1.8, 0.1, 7.2, 0.56],
  [72, 58, 1.2, 4.7, 5.5, 0.74], [91, 63, 1.5, 2.5, 6.3, 0.62],
] as const;

const shootingStars = [
  [13, 18, 2.4, 10.5],
  [46, 8, 7.1, 13.5],
  [72, 24, 10.8, 16],
] as const;

export function AmbientScene() {
  return (
    <div className="ambient-scene" aria-hidden="true">
      <div className="ambient-stars">
        {stars.map(([left, top, size, delay, duration, opacity], index) => (
          <span
            key={index}
            className="ambient-star"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: `${size}px`,
              height: `${size}px`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              opacity,
            }}
          />
        ))}
        {shootingStars.map(([left, top, delay, duration], index) => (
          <span
            key={`shooting-${index}`}
            className="shooting-star"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          />
        ))}
      </div>
      <div className="celestial-orbit">
        <div className="celestial-sun" />
        <div className="celestial-moon" />
      </div>
      <div className="ambient-cloud ambient-cloud-one" />
      <div className="ambient-cloud ambient-cloud-two" />
      <div className="ambient-hill ambient-hill-back" />
      <div className="ambient-hill ambient-hill-front" />
    </div>
  );
}
