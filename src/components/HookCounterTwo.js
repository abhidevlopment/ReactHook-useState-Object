import React, { useState } from "react";

function HookCounterTwo() {
  const [name, setName] = useState({ firstname: "", lastName: "" });
  return (
    <form>
      <input
        type="text"
        value={name.firstName}
        onChange={e => setName({ ...name, firstName: e.target.value })}
      />

      <input
        type="text"
        value={name.lastName}
        onChange={e => setName({ ...name, lastName: e.target.value })}
      />

      <h2>Your First name is-{name.firstName}</h2>
      <h2>Your Last name is-{name.lastName}</h2>
    </form>
  );
}
export default HookCounterTwo;
