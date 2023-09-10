"use client"
import Link from "next/link"
import Layout from "../components/layout"
import { Button } from "antd"
import { useState, useEffect } from "react"

// I want this to be a client component
const Pokemon = async ({ params }: { params: any }) => {
	console.log({ params })
	const url = "https://pokeapi.co/api/v2/pokemon/"
	// const pokemon = await getData(params.id)
	// console.log({ pokemon })
	const [pokemon, setPokemon] = useState<any>({})

	useEffect(() => {
		const getPokemon = async () => {
			try {
				const pokemon = await fetch(`${url}/${params.id}`)
				console.log({ pokemon })
			} catch (e: any) {
				console.log({ e })
			}
		}
		getPokemon()
	}, [])

	return (
		<Layout>
			<Button type='dashed'>
				<Link href='/'>Home</Link>
			</Button>
			<div className='w-full p-2	flex border-2 flex-col items-center gap-3'>
				<h1 className='min-w-full text-center '>
					{" "}
					{/* Name:{pokemon?.forms[0].name} */}
				</h1>
				<h1 className='min-w-full text-center '>
					{" "}
					Experience:{pokemon.base_experience}
				</h1>
				<h1>Moves:</h1>
				{/* flex flex-wrap gap-4 justify-between */}
				<div className='grid grid-cols-9 gap-4'>
					{pokemon?.moves?.map((m: any) => (
						<div className='p-2 bg-slate-300 w-30'>
							<h1>{m.move.name}</h1>
						</div>
					))}
				</div>
			</div>
		</Layout>
	)
}

// export const getData = async (id: any) => {
// 	const api = `https://pokeapi.co/api/v2/pokemon/${id}/`
// 	const res = await fetch(api, { cache: "no-store" })
// 	if (!res.ok) {
// 		throw new Error("Failed to fetch data")
// 	}
// 	return res.json()
// }

export default Pokemon
