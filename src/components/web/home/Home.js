import './Home.css';
import Video from "./Video";
import Introduction from "./introduction/Introduction";
import Services from "./Services";
import Links from "./Links";

const Home = () => {
	return (
		<div className='home page'>
			<Video />
			<Introduction />
			<Services />
			<Links />
		</div>
	)
}

export default Home
