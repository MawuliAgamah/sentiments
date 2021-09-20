import React, { useState } from "react";
import AllPosts from "../Components/DisplayAllPosts"
import axios from "axios";
import { Search } from '../Components/SubredditSearch';
import { Button } from '../Components/Button'

export const MainScreen = () => {


  const [globalSearchTerm, setGlobalSearchTerm] = useState(false)

  const [value, setValue] = useState('');

  const onClick = (data) => {

    setValue(data)
    console.log('hi')

  };

  return (
    <>
      <Search data={value} onClick={(e) => { onClick(e) }} setGlobalSearchTerm={setGlobalSearchTerm} className='subreddit-search' />
      <AllPosts globalSearchTerm={globalSearchTerm} numberOfPosts={100} />
    </>
  )


};


