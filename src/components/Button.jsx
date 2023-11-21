import React from "react";

function Button({ MainClass, Link, LinkClass, Text, TextClass, Icon }) {
  return (
    <div className={MainClass}>
      <a href={Link} className={LinkClass}>
        <span className={TextClass}>{Text}</span>
        <i className={Icon}></i>
      </a>
    </div>
  );
}

export default Button;
