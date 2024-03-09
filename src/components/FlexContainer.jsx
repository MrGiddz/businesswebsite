import clsx from "clsx";

const FlexContainer = ({ as: Component = "div", className, flexProps, children }) => {
  return (
    <Component className={clsx("max-w-7xl mx-auto px-6 lg:px-8", className)}>
      <div className={clsx("max-w-2xl mx-auto lg:max-w-none", flexProps)}>{children}</div>
    </Component>
  );
};

export default FlexContainer;
