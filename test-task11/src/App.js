import './App.css';
import Header from "./components/Header/Header";
import TabContentContainer from "./components/TabContentContainer/TabContentContainer";
import {useState} from "react";

function App({data}) {
    const [tabIndex,setTabIndex] = useState(0)
    const tabIndexChange = (index)=>{
        setTabIndex(index)
    }
    return (
        <div className="App">
            <Header tabIndex={tabIndex} data={data} tabIndexChange={tabIndexChange}/>
            <TabContentContainer tabIndex={tabIndex} data={data}/>
        </div>
    );
}

export default App;
