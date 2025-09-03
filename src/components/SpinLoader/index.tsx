import clsx from "clsx";

type SpinLoaderProps = {
  containerClasses?: string;
};

export function SpinLoader({ containerClasses }: SpinLoaderProps) {
  return (
    <div className={clsx("flex", "items-center", "justify-center", containerClasses)}>
      <div className={clsx("w-10", "h-10", "border-4", "border-t-transparent", "rounded-full", "animate-spin")}></div>
    </div>
  );
}
