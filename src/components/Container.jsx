import Header from "./Header"
import './Container.scss'
import ProsAndCons from "./ProsandCons/ProsAndCons"

const Container =(props) => {
    return <div className="Container">
        <Header/>
        <ProsAndCons/>
    </div>
}

export default Container