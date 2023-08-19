import { useState, useEffect } from 'react'
import { GiRazor } from 'react-icons/gi'
import { AiFillHeart } from 'react-icons/ai'
import { TbMoustache } from 'react-icons/tb'
import { BsInstagram, BsWhatsapp } from 'react-icons/bs'

import Button from './components/Button'
import Footer from './components/Footer'

import poster1 from './assets/postes/poster-1.jpg'
import poster2 from './assets/postes/poster-2.jpg'
import poster3 from './assets/postes/poster-3.jpg'
import poster4 from './assets/postes/poster-4.jpg'
import poster5 from './assets/postes/poster-5.jpg'

import { apiInstagram } from './services/api'

function App() {
	const [postesInstagram, setPostesInstagram] = useState([])
	const urlInstagram = 'https://www.instagram.com/donbarbone/'
	const urlWhatsapp =
		'https://api.whatsapp.com/send?phone=5538999033144&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio.'
	const urlGoogleMaps =
		'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.757885474843!2d-43.8777979!3d-16.7389281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xab5368941a2eaf%3A0x33200e014599e5db!2sDon%20Barbone%20-%20Barber%20Shop%20%26%20Bar!5e0!3m2!1sen!2sbr!4v1692414002621!5m2!1sen!2sbr'
	const urlRotaGoogleMaps =
		'https://www.google.com/maps/dir//Don+Barbone+-+Barbearia+%26+Bar/data=!4m8!4m7!1m0!1m5!1m1!1s0xab5368941a2eaf:0x33200e014599e5db!2m2!1d-43.8777979!2d-16.7389281'

	useEffect(() => {
		async function getPostesInstagram() {
			const res = await apiInstagram.get()
			const data = await res.data.data
			const dataImgs = await data.filter((img) => img.media_type === 'IMAGE')
			const dataThreeimgs = await dataImgs.slice(0, 3)
			setPostesInstagram(dataThreeimgs)
		}

		getPostesInstagram()
	}, [])

	return (
		<>
			<main>
				{/* section 1 */}
				<section className="relative z-10 flex h-screen flex-col items-start justify-center gap-1 bg-[url('/src/assets/fundo.jpg')] bg-cover bg-center px-7 py-3 sm:items-center">
					<div className="absolute left-1/2 top-0 flex w-full max-w-screen-sm -translate-x-1/2 items-center justify-between px-7 py-1 duration-200 sm:top-3 sm:rounded-full sm:bg-[rgba(200,200,200,.18)] sm:backdrop-blur-sm">
						<BsWhatsapp
							onClick={() => redirectToURL(urlWhatsapp)}
							className="cursor-pointer text-2xl text-zinc-100 duration-200 hover:text-zinc-400"
						/>
						<TbMoustache className="text-6xl text-emerald-500" />
						<BsInstagram
							onClick={() => redirectToURL(urlInstagram)}
							className="cursor-pointer text-2xl text-zinc-100 duration-200 hover:text-zinc-400"
						/>
					</div>
					<div className="pointer-events-none absolute left-0 top-0 -z-10 h-full w-full bg-gradient-radial from-transparent to-black" />
					<h1 className="text-start text-3xl font-light sm:text-center sm:text-4xl md:text-6xl">
						Bem-vindo à Barbearia Don Barbone!
					</h1>
					<p className="mb-12 text-start text-sm font-light sm:text-center md:text-lg">
						onde o estilo encontra a autenticidade. Cuidado excepcional para
						homens modernos que buscam o melhor.
					</p>
					<Button onClick={() => scrollToDiv('section-2')}>
						Conheça-nos Agora
					</Button>
				</section>
				{/* section 2 */}
				<section
					id="section-2"
					className="flex min-h-screen flex-col justify-center px-7 py-24 md:items-center"
				>
					<span className="mb-7 flex flex-col items-center gap-4 before:h-12 before:w-0.5 before:bg-zinc-500">
						<GiRazor className="text-5xl" />
					</span>
					<h1 className="font-regular text-start text-3xl sm:text-center sm:text-4xl lg:text-5xl">
						Bem-vindo à nossa Barbearia
					</h1>
					<p className="mb-9 max-w-4xl text-start text-sm font-light sm:text-center">
						Desde 2007 oferecemos corte de cabelo masculino, adulto, e infantil,
						e também fazemos todos os tipos de barba, com qualidade e bom
						atendimento.
					</p>
					<div className="grid h-auto w-full max-w-4xl grid-cols-3 grid-rows-2 gap-1 rounded bg-zinc-800 p-2">
						<div className="row-span-2 bg-blue-500">
							<img
								src={poster1}
								alt="poster"
								className="h-full w-full object-cover object-right"
							/>
						</div>
						<div className="bg-blue-500">
							<img
								src={poster2}
								alt="poster"
								className="h-full w-full object-cover object-center"
							/>
						</div>
						<div className="bg-blue-500">
							<img
								src={poster3}
								alt="poster"
								className="h-full w-full object-cover object-center"
							/>
						</div>
						<div className="bg-blue-500">
							<img
								src={poster4}
								alt="poster"
								className="h-full w-full object-cover object-center"
							/>
						</div>
						<div className="bg-blue-500">
							<img
								src={poster5}
								alt="poster"
								className="h-full w-full object-cover object-center"
							/>
						</div>
					</div>
				</section>
				{/* section 3 */}
				<section className="px-7 py-3">
					<h2 className="mb-6 text-center text-4xl font-light">Galeria</h2>
					<div className="flex flex-wrap items-center justify-center gap-4">
						{postesInstagram.map((infoPoster) => {
							return (
								<div
									key={infoPoster.id}
									className="flex flex-col gap-3 rounded-md bg-zinc-800 p-3 "
								>
									<img
										src={infoPoster.media_url}
										alt="Poster"
										className="h-auto max-h-64 w-64 rounded object-cover object-center"
									/>
									<div className="flex items-center justify-between">
										<span className="w-40 overflow-hidden text-ellipsis whitespace-nowrap">
											{infoPoster.caption}
										</span>
										<AiFillHeart className="text-2xl text-zinc-50" />
									</div>
								</div>
							)
						})}
					</div>
				</section>
				{/* section 4 */}
				<section className="px-7 py-12 pt-16">
					<h2 className="mb-6 text-center text-2xl">Tá esperando o que?</h2>
					<iframe
						src={urlGoogleMaps}
						style={{ border: '0' }}
						allowfullscreen=""
						loading="lazy"
						className="mx-auto h-96 w-full max-w-4xl rounded"
					></iframe>
					<div className="mx-auto mt-6 flex max-w-4xl flex-col gap-12 md:flex-row">
						<div className="flex flex-1 flex-col items-start justify-start gap-2">
							<p className="text-xl">Contato</p>
							<Button onClick={() => redirectToURL(urlWhatsapp)}>
								Whatsapp
							</Button>

							<ul className="font-light">
								<li>(38)99903-3144</li>
							</ul>
						</div>
						<div className="flex flex-1 flex-col items-start justify-start gap-2">
							<p className="text-xl">Endereço</p>
							<Button onClick={() => redirectToURL(urlRotaGoogleMaps)}>
								Ver Rotas
							</Button>
							<p className="max-w-sm font-light">
								Rua Raul Corrêa, 766 - Funcionários Montes Claros - MG 39401-029
								Brasil
							</p>
						</div>
						<div className="flex flex-1 flex-col items-start justify-start gap-2">
							<p className="text-xl">Horário de funcionamento</p>
							<ul className="font-light">
								<li>seg.: 09:00 - 20:00</li>
								<li>ter.: 09:00 - 20:00</li>
								<li>qua.: 09:00 - 20:00</li>
								<li>qui.: 09:00 - 20:00</li>
								<li>sex.: 09:00 - 21:00</li>
								<li>sab.: 09:00 - 20:00</li>
								<li>Dom.: Fechado</li>
							</ul>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}

function scrollToDiv(divId) {
	let div = document.getElementById(divId)
	div.scrollIntoView({ behavior: 'smooth' })
}

function redirectToURL(url) {
	window.open(url, '_blank')
}

export default App
