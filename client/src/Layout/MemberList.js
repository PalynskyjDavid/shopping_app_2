import { useState } from "react";
import AddMemberForm from "./AddMemberForm.js";
import Member from "./Member";

//Destructure props nebo budou undefined!!!!!!!!!
export default function MemberList({ data, userList, handlerMap, loggedInUser }) {

  const [show, setShow] = useState(false);

  return (
    <div style={{ border: "1px solid grey", margin: "8px", padding: "8px" }}>
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

      {/* Renders add member button */}
      <AddMemberForm key={data.id + "form"}
        show={show}
        data={data}
        userList={userList}
        handlerMap={handlerMap}
        handleClose={() => setShow(false)}
        listId={data.id}
      />


      {/* Renders colaborating users */}
      {data.memberList.map((memberId) => (
        <Member
          key={memberId + "member"}
          memberId={memberId}
          data={userList[memberId]}
          handlerMap={handlerMap}
          showRemoveButton={
            loggedInUser === data.owner || memberId === loggedInUser
          }
          listId={data.id}
        />
      ))}
    </div>
  );
}