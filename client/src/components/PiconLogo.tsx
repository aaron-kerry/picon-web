interface PiconLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  withTagline?: boolean;
  theme?: "dark" | "light";
}

const logoSizes = {
  sm: "w-[96px] sm:w-[104px]",
  md: "w-[144px] sm:w-[160px]",
  lg: "w-[192px] sm:w-[224px]",
};


const taglineSizes = {
  sm: "text-[12px]",
  md: "text-[14px] sm:text-[16px]",
  lg: "text-[18px] sm:text-[20px]",
};


export function PiconLogo({
  className = "",
  size = "md",
  withTagline = true,
  theme = "dark",
}: PiconLogoProps) {
  const taglineColor =
    theme === "dark" ? "text-white/60" : "text-[#666666]";

  return (
    <div className={`flex flex-col items-start gap-1 ${className}`}>
      <img
        src="/images/pro.png"
        alt="PICON"
        className={`${logoSizes[size]} h-auto object-contain object-left`}
      />
      {withTagline && (
        <span
          className={`pl-1 font-medium tracking-[0.15em] uppercase ${taglineColor} ${taglineSizes[size]}`}
        >
          Ce qui compte vraiment
        </span>
      )}
    </div>
  );
}