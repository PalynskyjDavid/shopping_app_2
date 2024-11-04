function Member({ memberId, data, handlerMap, isOwner, showRemoveButton }) {
    return (
      <div>
        {data.name}
        {isOwner ? " - Majitel " : " "}
        {showRemoveButton ? (
          <button onClick={() => handlerMap.removeMember({ memberId: data.id })}>
            remove
          </button>
        ) : null}
      </div>
    );
  }
  
  export default Member;