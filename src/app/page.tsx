import Head from "next/head"
import Layout from "./components/layout"
import { Button } from "antd"
import Link from "next/link"

export default async function Home() {
	const pokemons = await getData()

	return (
		<Layout>
			<Head>
				<title>Create Next App | Pokemons</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			{/* fix this */}
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 p-4'>
				{pokemons?.results?.map((p: any) => {
					const match = p.url.match(/\/(\d+)\/$/)

					return (
						// Make these into cards and take a break
						<div className='w-3/4 p-2	flex border-2 flex-col items-center gap-3'>
							<h1 className='min-w-full text-center '>{p.name}</h1>
							<Link href={`/${match[1]}`}>
								<Button type='link'>See More</Button>
							</Link>
						</div>
					)
				})}
			</div>
		</Layout>
	)
}

export const getData = async () => {
	const api = "https://pokeapi.co/api/v2/pokemon/"
	const res = await fetch(api, { cache: "no-store" })
	if (!res.ok) {
		throw new Error("Failed to fetch data")
	}
	return res.json()
}
