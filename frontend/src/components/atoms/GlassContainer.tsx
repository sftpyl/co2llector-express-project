interface GlassContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: string;
  isCardShadow?: boolean;
}

const GlassContainer = ({
  children,
  className = "",
  maxWidth = "max-w-[614px]",
  isCardShadow = false,
}: GlassContainerProps) => {
  return (
    <div
      className={`${
        isCardShadow ? "glass-ui-shadow" : "glass-ui"
      } ${maxWidth} rounded-[28px] md:rounded-4xl xl:rounded-[50px]  p-[22px] sm:p-8 gap-5 flex flex-col  ${className}`}
    >
      {children}
    </div>
  );
};

export default GlassContainer;
