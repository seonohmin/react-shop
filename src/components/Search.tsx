import React from 'react';

function Search() {
  return (
    <>
      <button
        className="btn btn-ghost btn-circle hidden"
      >
      </button>
      <input
        type={'search'}
        placeholder="검색"
        className="input w-full h-fulltransition ease-in-out duration-300"
        id="search"
      />
    </>
  );
}

export default Search;
