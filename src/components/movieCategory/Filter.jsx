import React from "react";
import { movieCategory } from "../../utils/utilities";

const movieCategory=()=>{
        const [selectedCategory,setselectedCategory]=useState("")
        const [Category,setCategory]=useState([]);
    
        const handleInput=(Categoryid,CategoryName)=>{
            setCategory(Categoryid)
        };
        const handleCategory = async()=>{
            const results = await getCategory(selectedCategory);
            setCategory(results.results)
            
        };
        return(
            <div>
                {Category.map((Category)=>(
                    <button key={Category.id}
                    onClick={()=>handleCategory(Category.id,Category.Name)}
                    className={selectedCategory===Category.id? "active":""}>{Category.Name}</button>
                ))}
            </div>
        )


}
export default movieCategory;