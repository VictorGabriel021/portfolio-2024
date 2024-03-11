export const ReactIcon: React.FC<{ height?: number; width?: number }> = ({
  height,
  width,
}) => {
  return (
    <img
      alt="react"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
      height={height ?? 50}
      width={width ?? 50}
    />
  );
};

export const NodeIcon: React.FC<{ height?: number; width?: number }> = ({
  height,
  width,
}) => {
  return (
    <img
      alt="nodejs"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
      height={height ?? 50}
      width={width ?? 50}
    />
  );
};
