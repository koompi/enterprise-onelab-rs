import React, { useState } from "react";
// Icons
import Folder from "../../../Assets/folder-96px.png";
import File from "../../../Assets/document-96px.png";

export default function DocumentItem({
  data,
  parent,
  setParent,
  setSelected,
  selected,
}) {
  const [expand, setExpan] = useState(false);

  const { id, type, name } = data;
  if (data.meta.isDir) {
    const selfLocation = `${parent}${name}/`;
    return (
      <>
        <li
          className={`w-full block p-2 ${
            selected === selfLocation ? "bg-blue-200" : ""
          }`}
          onClick={(e) => {
            setExpan(!expand);
            setSelected(selfLocation);
            console.log(`${selfLocation} is dir`);
          }}
          onContextMenu={(e) => {
            alert("helloworld");
            return false;
          }}
        >
          <div className="flex">
            <img src={Folder} alt="" className="mr-4 w-12 h-12" />
            <p className="mt-3">{name}</p>
          </div>
        </li>

        {!expand ? (
          ""
        ) : (
          <ul className="ml-8">
            {data.children.map((child) => (
              <DocumentItem
                data={child}
                parent={selfLocation}
                setParent={setParent}
                setSelected={setSelected}
                selected={selected}
              />
            ))}
          </ul>
        )}
      </>
    );
  } else {
    const selfLocation = `${parent}${name}`;
    return (
      <li
        className={`w-full block p-2 ${
          selected === selfLocation ? "bg-blue-200" : ""
        }`}
        onClick={(e) => {
          setSelected(selfLocation);
          console.log(`${selfLocation} is file`);
        }}
        onContextMenu={(e) => {
          alert("helloworld");
          return false;
        }}
      >
        <div className="flex">
          <img src={File} alt="" className="mr-4 w-12 h-12" />
          <p className="mt-3">{name}</p>
        </div>
      </li>
    );
  }
  //   if (data.meta.isDir) {
  //     return (
  //       <div className="h-[180px] rounded-xl bg-blue-200 flex justify-center items-center transition hover:bg-blue-400 cursor-pointer">
  //         <center>
  //           <img src={Folder} alt="" />
  //           <div>
  //             {location}
  //             {name}
  //           </div>
  //         </center>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div className="h-[180px] rounded-xl bg-blue-200 flex justify-center items-center transition hover:bg-blue-400 cursor-pointer">
  //         <center>
  //           <img src={File} alt="" />
  //           <div>
  //             {location}
  //             {name}
  //           </div>
  //         </center>
  //       </div>
  //     );
  //   }
}
