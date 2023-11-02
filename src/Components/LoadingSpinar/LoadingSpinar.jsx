import AtomicSpinner from "atomic-spinner";

const LoadingSpinar = () => {
  return (
    <div className="min-h-[70vh] flex justify-center items-center">
      <AtomicSpinner
        atomSize={292}
        displayElectronPaths={false}
        displayNucleus={false}
        electronSize={1.4}
    electronPathCount={44} electronPathWidth={7.8} nucleusSpeed={.8}
></AtomicSpinner>
    </div>
  );
};

export default LoadingSpinar;
