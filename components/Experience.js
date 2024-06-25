import { useState } from "react";

export default function Experience(params) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <li>
      <span style={{ display: "flex", alignItems: "center", fontWeight: 1000 }}>
        {params.details.jobTitle} @
        <span style={{ visibility: "hidden" }}>i</span>
        {params.details.employerURL != "" ? (
          <a href={params.details.employerURL}>{params.details.employer}</a>
        ) : (
          <>{params.details.employer}</>
        )}
        <span style={{ visibility: "hidden" }}>ii</span>(
        {params.details.startDate} - {params.details.endDate})
        <span style={{ visibility: "hidden" }}>iii</span>
        <span
          style={{ fontSize: 12 }}
          onClick={() => setShowDetails(!showDetails)}
        >
          <a href="javascript: void(0)">
            {showDetails ? <>[hide details]</> : <>[show details]</>}
          </a>
        </span>
      </span>
      {showDetails ? (
        <ul>
          {params.details.bullets.map((bullet) => (
            <li>
              <span
                dangerouslySetInnerHTML={{
                  __html: params.applyStyling(bullet, "white"),
                }}
              />
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
}
