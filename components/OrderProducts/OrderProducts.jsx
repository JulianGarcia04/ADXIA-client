import React from "react";
import View from "./View";

function OrderProducts({addHref, editHref}) {
  return (
    <View addHref={addHref} editHref={editHref}/>
  )
}

export { OrderProducts };
