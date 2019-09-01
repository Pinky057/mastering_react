import React from 'react';
import Input from "./common/input";

const SearchBox=({value, onChange})=> {
    return (
        <Input
          type="text "
          name="query"
          placeholder="Search..."
          value={value}
          onChange={e=>onChange(e.currentTarget.value)}
        />
    );
}

export default SearchBox;