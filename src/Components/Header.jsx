import SearchIcon from '@mui/icons-material/Search';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import Body from './Body';

const Header = () => {
    const [searchValue, setSearchValue] = useState();
    const [sendInputValue, setSendInputValue] = useState(" ");
    const [isMobile,setIsMobile]=useState(false);


    // this function pushes the value from the input to the body component when a user clicks on the search icon

    const getSearchValue = ()=>{
        setSendInputValue(searchValue);
    }

    // to enable users to get their search results by clicking on the enter button after typing
    window.addEventListener("keydown", (e)=>{
        if(e.key==="Enter"){
            getSearchValue()
        }
    })
    // this function ensures that the mobile menu closes automatically when a user increases the width of their browser above 727 when the mobile menu is active
    window.addEventListener("resize", ()=>{
        if(window.innerWidth > 727 && isMobile === true){
            setIsMobile(false)
        }
    })
    return ( 
        <nav>
            <div className="nav-con">
                <div className="enter-dates-con">
                <NewspaperIcon/>
                    <h2>Enter dates</h2>
                </div>
                <div className="search-bar-nav-con">
                    <SearchIcon className="search-icon" onClick={getSearchValue}/>
                    <input type="text" placeholder="Where to?" value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} />
                </div>

                <div className="filters-attractions-con">
                    <select name="Filters">
                        <option value="">filter 1</option>
                        <option value="">filter 2</option>
                        <option value="">filter 3</option>
                        <option value="">filter 4</option>
                    </select>
                    <select name="Attractions" id="" >
                        <option value="" >Attractions 1</option>
                        <option value="">Attractions 2</option>
                        <option value="">Attractions 4</option>
                        <option value="">Attractions 5</option>
                    </select>
                </div>
                <div className="mobile-icon-con" onClick={()=>setIsMobile(!isMobile)}>
                    {isMobile?<CloseIcon/>:<DehazeIcon className="bar-icon"/>}
                    
                </div>
            </div>
            { isMobile &&
                <div className="filters-attractions-mobile-con">
                <select name="Filters">
                    <option value="">filter</option>
                    <option value="">Bars</option>
                    <option value="">Restaurants</option>
                    <option value="">Hotels</option>
                </select>
                <select name="Attractions" id="" >
                    <option value="" >Attractions </option>
                    <option value="">Bar</option>
                    <option value="">Restaurants </option>
                    <option value="">Hotels</option>
                    <option value="">Beachs</option>
                </select>
            </div>
            }
            
            <Body searchValueProp={sendInputValue}/>
        </nav>
     );
}
 
export default Header;