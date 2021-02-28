import React, {useEffect} from 'react';
import './App.scss';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./redux/store";
import {GroceryType} from "./api/api";
import {setGroceryTC} from "./redux/app-reducer";
import {GroceryLists} from "./components/GroceryLists/GroceryLists";

function App() {

  const grocery = useSelector<AppRootStateType, Array<GroceryType>>((state) => state.grocery.grocery);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setGroceryTC())
  }, [dispatch])

  console.log(grocery)
  return (
    <div className="App">
      <GroceryLists products={grocery}/>
    </div>
  );
}

export default App;
