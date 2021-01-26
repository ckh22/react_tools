import {Route} from 'react-router-dom'
import Homepage from './Pages/Homepage/Homepage'
import Navbar from './Components/Nav/Navbar'
import AnimateSample from './Components/Animate.css/AnimateSample'
import AnimeJSSample from './Components/AnimeJS/AnimeJSSample'
import ChartJSSample from './Components/ChartJS/ChartJSSample'
import CleaveJSSample from './Components/CleaveJS/CleaveJSSample'
import PixiJSSample from './Components/PixiJS/PixiJSSample'
import PopmotionSample from './Components/Popmotion/PopmotionSample'
import RevealJSSample from './Components/RevealJS/RevealJSSample'
import SweetAlertJSSample from './Components/SweetAlertJS/SweetAlertJSSample'
import ThreeJSSample from './Components/ThreeJS/ThreeJSSample'
import VideoJSSample from './Components/VideoJS/VideoJSSample'

function App() {
  return (
    <div className="App">
      <Navbar />
			<Route exact path="/" component={Homepage} />
      <Route
				path={'/(.+)'}
				render={() => (
					<>
						<Route exact path="/Animate" component={AnimateSample} />
						<Route exact path="/AnimeJS" component={AnimeJSSample} />
						<Route exact path="/ChartJS" component={ChartJSSample} />
						<Route exact path="/CleaveJS" component={CleaveJSSample} />
						<Route exact path="/PixiJS" component={PixiJSSample} />
						<Route exact path="/Popmotion" component={PopmotionSample} />
						<Route exact path="/RevealJS" component={RevealJSSample} />
						<Route exact path="/SweetAlertJS" component={SweetAlertJSSample} />
						<Route exact path="/ThreeJS" component={ThreeJSSample} />
            <Route exact path="/VideoJS" component={VideoJSSample} />
					</>
				)}
			/>
    </div>
  );
}

export default App;
