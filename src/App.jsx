import {Hero,Artist, FeaturedCategory, Banner, FeaturedProducts, HandMadeServices, Reviews, Subscribe, Footer} from './sections';
import Nav from './components/Nav';
const App=()=>(
<main className="relative">
  <Nav/>
  <section className="xl:padding-1 wide:padding-r padding-b"><Hero/></section>
  <section className="padding x"><Banner/></section>
  <section className=""><Artist/></section>
  <section className="padding"><FeaturedProducts/></section>
  <section className="padding"><FeaturedCategory/></section>
  <section className="padding x py-10"><HandMadeServices/></section>
  <section className="padding"><Reviews/></section>
  <section className="padding"><Subscribe/></section>
  <section className="padding"><Footer/></section>
</main>
  
)
export default App;