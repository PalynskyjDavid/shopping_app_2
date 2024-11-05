function Member({ memberId, data, handlerMap, isOwner, showRemoveButton, listId }) {
    return (
      <div>
        {data.name}
        {isOwner ? " - Majitel " : " "}
        {showRemoveButton ? (
          <button onClick={() => handlerMap.removeMember({ list_id: listId, memberId: data.id })}>
            {/* {console.log("list_id"+listId+"memberId"+memberId)} */}
            remove
          </button>
        ) : null}
      </div>
    );
  }
  
  export default Member;