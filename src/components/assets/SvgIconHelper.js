import { m } from "framer-motion";

const SvgIconHelper = ({ name, icon, pass }) => {
  return (
    <m.a whileHover={{ scale: 1.1 }} target="_blank" href={pass}>
      {icon}
    </m.a>
  );
};

export default SvgIconHelper;
