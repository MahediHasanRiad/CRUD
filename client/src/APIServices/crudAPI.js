import axios from "axios";

// create function
export function Create(ProductName, ProductCode, img, UnitPrice, Quantity, TotalPrice) {

  const url = "/Product/CreateProduct";
  const data = {
    ProductName: ProductName,
    ProductCode: ProductCode,
    img: img,
    UnitPrice: UnitPrice,
    Quantity: Quantity,
    TotalPrice: TotalPrice,
  };
  return axios.post(url, data).then((res)=> {    // when any property return in axios then hole axios also return
    if(res.status === 200){
        return true
    }
  }).catch(e => {
    console.log(e)
    return false
  });
}



// Read function
export function Read() {

  const url = "/Product/ShowProducts";
  return axios.get(url).then(res => {       // when any property return in axios then hole axios also return
    if(res.status === 200){
        return res.data['data']
    }
  }).catch(e => {
    console.log(e)
    return false
  });
}



// Update function
export function Update(id, ProductName, ProductCode, img, UnitPrice, Quantity, TotalPrice) {

  const url = "/Product/UpdateProduct" + id;
  const data = {
    ProductName: ProductName,
    ProductCode: ProductCode,
    img: img,
    UnitPrice: UnitPrice,
    Quantity: Quantity,
    TotalPrice: TotalPrice,
  };
  return axios.post(url, data).then(res => {    // when any property return in axios then hole axios also return
    if(res.status === 200){
        return true
    }
  }).catch(e => {
    console.log(e)
    return false
  });
}




// Delete function
export function Delete(id) {
  
  const url = "/Product/DeleteProduct" + id;
  return axios.get(url).then(res => {       // when any property return in axios then hole axios also return
    if(res.status === 200){
        return true
    }
  }).catch(e => {
    console.log(e)
    return e
  });
}
