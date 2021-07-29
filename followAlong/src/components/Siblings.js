import React, {useContext} from "react";
import { FamilyContext } from "../App";

const Siblings = () => {
  const family = useContext(FamilyContext)
  console.log("🚀 ~ file: Siblings.js ~ line 6 ~ Siblings ~ family", family)
  
  return (
    <section className="parents">
      {family.siblings.map((p) => (
        <div className="person" key={p.name}>
          <img width="150" src={p.img} alt={p.name} />
          <strong>{p.name}</strong>
        </div>
      ))}
    </section>
  );
};

export default Siblings;