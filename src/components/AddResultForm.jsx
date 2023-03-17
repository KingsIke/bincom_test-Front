import React, { useState } from "react";
import axios from "axios";

const AddResultForm = () => {
  const [wardId, setWardId] = useState("");
  const [lgaId, setLgaId] = useState("");
  const [stateId, setStateId] = useState("");
  const [pdp, setPdp] = useState("");
  const [dpp, setDpp] = useState("");
  const [acn, setAcn] = useState("");
  const [ppa, setPpa] = useState("");
  const [cdc, setCdc] = useState("");
  const [jp, setJp] = useState("");

  const uniqueId = Math.floor(Math.random() * 100000);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3200/polling-units", {
        id: uniqueId,
        wardId,
        lgaId,
        stateId,
        pdp,
        dpp,
        acn,
        ppa,
        cdc,
        jp,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wardId">Ward ID:</label>
      <input
        type="text"
        id="wardId"
        value={wardId}
        onChange={(e) => setWardId(e.target.value)}
      />

      <label htmlFor="lgaId">LGA ID:</label>
      <input
        type="text"
        id="lgaId"
        value={lgaId}
        onChange={(e) => setLgaId(e.target.value)}
      />

      <label htmlFor="stateId">State ID:</label>
      <input
        type="text"
        id="stateId"
        value={stateId}
        onChange={(e) => setStateId(e.target.value)}
      />

      <label htmlFor="pdp">PDP:</label>
      <input
        type="text"
        id="pdp"
        value={pdp}
        onChange={(e) => setPdp(e.target.value)}
      />

      <label htmlFor="dpp">DPP:</label>
      <input
        type="text"
        id="dpp"
        value={dpp}
        onChange={(e) => setDpp(e.target.value)}
      />

      <label htmlFor="acn">ACN:</label>
      <input
        type="text"
        id="acn"
        value={acn}
        onChange={(e) => setAcn(e.target.value)}
      />

      <label htmlFor="ppa">PPA:</label>
      <input
        type="text"
        id="ppa"
        value={ppa}
        onChange={(e) => setPpa(e.target.value)}
      />

      <label htmlFor="cdc">CDC:</label>
      <input
        type="text"
        id="cdc"
        value={cdc}
        onChange={(e) => setCdc(e.target.value)}
      />

      <label htmlFor="jp">JP:</label>
      <input
        type="text"
        id="jp"
        value={jp}
        onChange={(e) => setJp(e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default AddResultForm;
