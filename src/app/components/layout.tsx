// Make a nav bar
// make a grid that houses the children
import Image from "next/image"
import logo from "../assets/images/pokemon.jpeg"
const Layout = ({ children }: { children: any }) => {
	return (
		<div className='container px-8 py-2 my-2 box-border flex-col min-w-full bg-gray-100			text-black min-h-screen decoration'>
			<div className='mb-4 p-2 min-w-full flex justify-between text-center items-center bg-gray-50 rounded-lg'>
				<Image
					className='rounded-xl'
					src={logo}
					width={80}
					height={30}
					alt='logo'></Image>
				<h1>Navbar</h1>
			</div>
			{/* we want a grid right here! */}
			{/* <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'> */}
			{children}
			{/* </div> */}
		</div>
	)
}

export default Layout
