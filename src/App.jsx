import { GiRazor } from 'react-icons/gi'
import { AiFillHeart } from 'react-icons/ai'
import { TbMoustache } from 'react-icons/tb'
import { BsInstagram, BsWhatsapp } from 'react-icons/bs'

import Button from './components/Button'
import ImagePoster from './components/ImagePoster'
import Footer from './components/Footer'

import { posters } from './services/path.js'
const [poster1, poster2, poster3, poster4, poster5] = posters

import { apiInstagram } from './services/api'
import { useQuery } from 'react-query'

import {
	urlInstagram,
	urlWhatsapp,
	urlGoogleMaps,
	urlRotaGoogleMaps,
} from './services/urls.js'

function App() {
	const { data } = useQuery(
		'postesInstagram',
		async () => {
			const res = await apiInstagram.get()
			const data = await res.data.data
			const dataImgs = await data.filter((img) => img.media_type === 'IMAGE')
			const dataThreeimgs = await dataImgs.slice(0, 3)
			return dataThreeimgs
		},
		{
			staleTime: 1000 * 60, //1 min
		},
	)

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
						<div className="row-span-2">
							<ImagePoster img={poster1} />
						</div>
						<div>
							<ImagePoster img={poster2} />
						</div>
						<div>
							<ImagePoster img={poster3} />
						</div>
						<div>
							<ImagePoster img={poster4} />
						</div>
						<div>
							<ImagePoster img={poster5} />
						</div>
					</div>
				</section>
				{/* section 3 */}
				<section className="px-7 py-3">
					<h2 className="mb-6 text-center text-4xl font-light">Galeria</h2>
					<div className="flex flex-wrap items-center justify-center gap-4">
						{data?.map((infoPoster) => {
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
