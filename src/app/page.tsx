
import {config} from '../../src/app/libs/config';
import ProductList from './components/ProductList'

async function getData(path) {
    const res = await fetch(path, {
    cache: "no-store"
  });
   try {
    const data = await res.json();
    return data;
  } catch(error) {
    console.log(error)
  }
}

/**************************************************************
 * This json data is for testing purpose.
 * 
 * 
 ***********************************************************/




export default async function Products() {
  const path=config.apiPrefix + config.apiHost + "/api/products";
  //const path="http://localhost:3000/api/products"
  //const path= `${process.env.API_URL}/api/products`
  
  
    const data= await getData(path);

    
  return (
      <div className="mx-auto max-w-4xl mt-4">
        <div className="my-5 flex flex-col gap-4">
          <h1 className="text-3x1 font-bold">Products List</h1>
        </div>
        <ProductList products={data} /> 
      </div>
      
  )
}
