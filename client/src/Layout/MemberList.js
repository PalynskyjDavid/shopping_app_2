import { useState } from "react";
import AddMemberForm from "./AddMemberForm.js";
import Member from "./Member";

//Destructure props nebo budou undefined!!!!!!!!!
export default function MemberList({ data, userList, handlerMap, loggedInUser, handleClose }) {

  const [show, setShow] = useState(false);

  return (
    <div style={{ border: "1px solid grey", margin: "8px", padding: "8px" }}>
      {/* Renders add member button */}
      <AddMemberForm
        show={show}
        data={data}
        userList={userList}
        handlerMap={handlerMap}
        handleClose={() => setShow(false)}
      />

      <div>
        <p>Member List</p>
        {data.owner === loggedInUser ? (
          <button onClick={() => setShow(true)}>add member</button>
        ) : (
          ""
        )}
      </div>

      {/* Renders owner */}
      <Member memberId={data.owner} data={userList[data.owner]} isOwner={true} />

      {/* Renders colaborating users */}
      {data.memberList.map((memberId) => (
        <Member
          key={memberId}
          memberId={memberId}
          data={userList[memberId]}
          handlerMap={handlerMap}
          showRemoveButton={
            loggedInUser === data.owner || memberId === loggedInUser
          }
        />
      ))}
    </div>
  );
}