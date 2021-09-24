import {Component} from 'react';
import './style/style.css';
import SelectLanguageMoney from './components/selectLanguage';
import Header from './components/header';
import BodyContent from './components/bodyContent';
import BodyFooter from './components/bodyFooter';
class App extends Component{
    constructor(props){
        super(props);
        this.state={
            isOpenLanguageMoney:false
        }
    }
    closeSelectLanguageMoney = (data)=>{
        this.setState({
            isOpenLanguageMoney:data
        })
    }
    closeSelectLanguageMoney = (data)=>{
        this.setState({
            isOpenLanguageMoney:data
        })
    }
    render(){
        return(
            <div style={{height:'100%'}}>
                <Header openSelectLanguageMoney={this.closeSelectLanguageMoney}></Header>
                <SelectLanguageMoney onClose={this.closeSelectLanguageMoney} isOpenLanguageMoney={this.state.isOpenLanguageMoney}></SelectLanguageMoney>
                <BodyContent></BodyContent>
                <BodyFooter></BodyFooter>
            </div>
        )
    }
}
export default App;