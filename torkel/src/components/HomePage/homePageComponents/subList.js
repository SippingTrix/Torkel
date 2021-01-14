import React from "react";
import { StateContext } from "../../../State";
import "./subList.css";

export default function SubList() {
  let { HomepageListing } = React.useContext(StateContext);

  return (
    <>
      {Object.keys(HomepageListing).map((ListingGroup) => {
        return (
          <>
            <h2 className="TitleBox">{HomepageListing[ListingGroup].title}</h2>
            <ul>
              {HomepageListing[ListingGroup].listings.map((listing) => (
                <li>{listing}</li>
              ))}
            </ul>
          </>
        );
      })}
    </>
  );
}
