import {ReactElement} from "react";
import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Homepage from "./pages/Homepage/Homepage";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Navbar from "./components/Navbar/Navbar";
import ProductAdd from "./pages/ProductAdd/ProductAdd";

function App(): ReactElement {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Homepage />}></Route>
				<Route path="/product-detail/:id" element={<ProductDetail />}></Route>
				<Route path="/product-add" element={<ProductAdd />}></Route>				
			</Routes>
		</>
	);
}

export default App;


///Fonksiyon oluşturma ve kullanımı////

// function myfunc(num1:number,num2:number)
// { return (num1+num2);}
// console.log(myfunc(7,6));

// function myfunc(num1:number,num2:number=2)
// { return (num1+num2);}
// console.log(myfunc(3));

// function myfunc(num1:number,num2:number=2):string
// {
//  return "Result: "+(num1+num2).toString();
// }
// console.log(myfunc(5));

// function myfunc(num1:number,num2?:number):string
// {
// 	if(num2 !==undefined)
// 	{
// 		return "Result: "+(num1+num2).toString();
// 	}
// 	else
// 	return "Result: "+(num1).toString();
 
// }
// console.log(myfunc(2));

// function myFunc2(...num:number[])
// {
// 	let r=0;
// 	for (let i = 0; i <num.length;i++) {
// 		r +=num[i];
// 	}
// 	return r;
// }
// console.log(myFunc2(1,2,3,4,10));