import { logo ,logo_sum} from '../assets'

const Hero = () => {
    return (
        <header className='w-full flex justify-center items-center flex-col'>
            <nav className='flex justify-between items-center w-full mb-10 pt-3'>
                <img src={logo_sum} alt="sumz-logo" className='w-28 object-contain' />
                <button type='button' onClick={() => window.open('https://swarup-chanda.vercel.app/')}>
                    <button className='shadow__btn'>Portfolio</button>
                </button>
            </nav>
            <h1 className='head_text'>
                Summarize Articles with <br className='max-md:hidden' />
                <span className='orange_gradient '>OpenAI GPT-4</span>
            </h1>
            <h2 className='desc'>
                "Make reading easier with Summarize, an open-source tool that transforms lengthy articles into clear and concise summaries"
            </h2>
        </header>
    )
}

export default Hero