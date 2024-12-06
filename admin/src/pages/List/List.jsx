/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";

const List = ({url}) => {
  
  const [list, setList] = useState([]);

 const fetchData = async()=>{
  const result = await axios.get(`${url}/list`)
  if(result.data.success){
    setList(result.data.data)
  }else{
    toast.error("حدث خطأ ما")
  }
 }
  useEffect(() => {
    // axios.get(`${url}/list`)
    // .then((res) => setList(res.data.data))
    // .catch(err=>console.log(err))
   fetchData()
  }, []);
  //delet item
  const DeleteItem = async(id) => {
   const result = await axios.delete(`${url}/remove/`+id)
await fetchData()
if(result.data.success){
  toast.success("تم حذف الصنف")
}else{
  toast.error("تعذز حذف الصنف")
}

   
  };

  return (
    <div className="all-items">
      <h3>جميع الأصناف</h3>
      <div className="items title">
        <p>صورة الصنف</p>
        <p>الأسم</p>
        <p>السعر</p>
        <p>الفئة</p>
        <p>حذف</p>
      </div>
      <div >
        {list.map((item, index) => {
          
          return (
            <div key={index} className="items">
              <img src={`${url}/images/`+item.image} alt="image" />
              <p>{item.name}</p>
              <p>{item.price}  ج.م</p>
              <p>{item.category}</p>
              <p className="remove" onClick={()=>DeleteItem(item._id)}>X</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
