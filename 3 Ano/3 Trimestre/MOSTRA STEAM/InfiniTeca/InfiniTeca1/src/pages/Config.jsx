import Infos from "../components/configp/Infos";
import NavBC from "../components/NavBC";
import "../css/config.css";
import "../css/navc.css";

export default function Config() {
  return (
    <>
      <NavBC User={"@Garsa"} Email={"garsa@gmail.com"} />

      <Infos Senha={"garsa2276-"} Email={"garsa@gmail.com"} />
    </>
  );
}
