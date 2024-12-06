/* eslint-disable react/prop-types */
import { useState } from 'react';
import { assets } from '../../assets/assets';
import './Add.css'
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = ({url}) => {
    const[image,setImage]=useState(false)
    const [values,setValues]=useState({
        name:"",
        description:"",
        price:"",
        category:"سلطات",
        image:""
    })
    const onChangeHandel=(e)=>{
setValues({...values,[e.target.name]:e.target.value})
console.log(values)
    }
   
    //on submit handel
   const onSubmitHandel= async(e)=>{
    e.preventDefault()
    const formdata = new FormData()
    formdata.append("name",values.name)
    formdata.append("description", values.description);
    formdata.append("price", Number(values.price));
    formdata.append("category", values.category);
    formdata.append("image", image);

   const result = await axios.post(
     `${url}/add`,
     formdata
    
   );
   if(result.data.success){
setValues({
  name: "",
  description: "",
  price: "",
  category: "سلطات",
});
setImage(false)
toast.success("تم اضافة صنف")
   }else{
toast.error("تعذز اضافة صنف");
   }

   }
  return (
    <div className="add">
      <form className="add-container" >
        <h3>اضافة الأصناف</h3>
        <div className="inputs">
          <div className="title">
            <p>اسم الصنف</p>
            <input
              type="text"
              placeholder="الصنف"
              name="name"
              value={values.name}
              onChange={onChangeHandel}
            />
          </div>
          <div className="description">
            <p>معلومات الصنف</p>
            <textarea
              name="description"
              value={values.description}
              id="description"
              rows={6}
              placeholder="اكتب الوصف هنا"
              onChange={onChangeHandel}
            />
          </div>
          <div className="price-category">
            <div className="price">
              <p>سعر الصنف</p>
              <input type="Number" name="price" value={values.price} placeholder="السعر"  onChange={onChangeHandel}/>
            </div>
            <div className="category">
              <p>نوع الصنف</p>

              <select name="category" value={values.category} onChange={onChangeHandel}>
                <option value="سلطات">سلطات</option>
                <option value="رولز">رولز</option>
                <option value="سفاري">سفارى</option>
                <option value="ساندوتش">ساندوتش</option>
                <option value="كيك">كيك</option>
                <option value="خضروات">فطيرة خضروات</option>
                <option value="بستا">بستا</option>
                <option value="نودلز">نودلز</option>
              </select>
            </div>
          </div>
          <div className="upload-image">
            <p>تحميل صورة للصنف</p>

            <label htmlFor="image">
              <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
            </label>
            <input type="file" id="image" hidden required  onChange={(e)=>setImage(e.target.files[0])}/>
          </div>
        </div>
        <button onClick={onSubmitHandel}>اضافة</button>
      </form>
    </div>
  );
}

export default Add
