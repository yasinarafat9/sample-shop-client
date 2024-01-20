import React from "react";

const UploadProducts = () => {

const handleUploadProduct = event =>{
  event.preventDefault();
  const form = event.target;
  const productUrl = form.productUrl.value;
  const title = form.title.value;
  const brand = form.brand.value;
  const tags = form.tags.value;
  const category = form.category.value;
  const subCategory = form.subCategory.value;
  const price = form.price.value;
  const ageGroup = [{form.kids.value}, {form.teenager.value}]
  const discount = form.discount.value;
  const discount = form.discount.value;
  
}



  return (
    <div className="m-auto ">
      <div className="text-center m-auto total-box	">
        <h1 className="h1-dashboard">Upload Products</h1>
        <br />
        <div className="">
          <form className="flex flex-col">
            <div>
              <div className="div-input">
                <h3 className="h3-dashboard">Product Image :</h3>
                <input className="input-field" type="text" name="productUrl" placeholder="Product img URL" id="" />
              </div>
              <div className="div-input">
                <h3 className="h3-dashboard">Name or Title :</h3>
                <input className="input-field" type="text" name="title" placeholder="Enter Product name" id="" />
              </div>
              <div className="div-input">
                <h3 className="h3-dashboard">Brand Name :</h3>
                <input className="input-field" type="text" name="brand" id="" placeholder="Brand Name" />
              </div>

              {/* description */}
              <div className="div-input">
                <h3 className="h3-dashboard">Description :</h3>
                <textarea className="input-field" type="text" name="description" id="description-field" placeholder="Write description of this product">  </textarea>
              </div>

              {/* tags */}
              <div className="div-input">
                <h3 className="h3-dashboard">Tags :</h3>
                <input className="input-field" type="text" name="tags" id="" placeholder="Tags for this product" />
              </div>
            </div>

            {/* category */}
            <div className="flex flex-col justify-between">
              <div className="div-input">
                <h3 className="h3-dashboard">Category :</h3>
                <input className="input-field" type="text" name="category" id="category" placeholder="Category Name" />
              </div>
              <div className="div-input">
                <h3 className="h3-dashboard">Sub-Category :</h3>
                <input className="input-field" type="text" name="subCategory" id="category2" placeholder="Sub Category Name"/>
              </div>
            </div>

            {/* price */}
            <div className="flex flex-col justify-between">
              <div className="div-input flex">
                <h3 className="h3-dashboard">Price :</h3>
                <input className="input-field " type="number" name="price" id="price-field" placeholder="Regular Price" />
              </div>
              <div className="div-input">
                <h3 className="h3-dashboard">Discount Rate :</h3>
                <input className="input-field" type="number" name="discount" id="price-field2" placeholder="Discount rate" />
              </div>
            </div>



            {/* Age Gorup */}
            <div className="flex flex-col justify-around">
              <div className="div-input flex flex-row justify-between">
                <h3 className="h3-dashboard" >Age Group :</h3>
                <div className="flex flex-row justify-between ">
                  <label className="flex items-center checkbox-font justify-start " id="">
                    <input className="checkbox-text" type="checkbox" value='kids' name="kids" id="checkbox-text" />Kids
                  </label>
                  <label className="flex items-center checkbox-font justify-start " id="">
                    <input className="checkbox-text" type="checkbox" value='teenager' name="teenager" id="checkbox-text" />Teenager
                  </label>
                  <label className="flex items-center checkbox-font justify-start " id="">
                    <input className="checkbox-text" type="checkbox" value='adult' name="adult" id="checkbox-text" />Adult
                  </label>
                  <label className="flex items-center checkbox-font justify-start " id="">
                    <input className="checkbox-text" type="checkbox" value='middleAge' name="middleAge" id="checkbox-text" />Middleage
                  </label>
                  <label className="flex items-center checkbox-font justify-start " id="">
                    <input className="checkbox-text" type="checkbox" value='old' name="old" id="checkbox-text" />Old
                  </label>
                </div>
              </div>

              {/* Gender */}
              <div className="div-input flex flex-row justify-betweend">
                <h3 className="h3-dashboard">Gender : </h3>
                <div className="flex flex-row">
                  <label className="flex items-center checkbox-font justify-start " id="">
                    <input className="checkbox-text" type="checkbox" value='male' name="male" id="checkbox-text" />Male
                  </label>
                  <label className="flex items-center checkbox-font justify-start " id="">
                    <input className="checkbox-text" type="checkbox" value='female' name="female" id="checkbox-text" />Female
                  </label>
                </div>
              </div>
            </div>
            <button type="submit" className="btn-upload">UPLOAD</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadProducts;
