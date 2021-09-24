import { Component } from "react";
class SelectLanguageMoney extends Component{
    constructor(props){
        super(props);
        this.state={
            language:true,
            money:false,
            indexLanguageActive:0,
            listLanguages:[{language:'Tiếng Việt',area:'Việt Nam'},
            {language:'Azerbaycan dili',area:'Azerbaycan'},
            {language:'Bhasa indonesia',area:'indonesia'},
            {language:'Bosanski',area:'Bosna i Hercegovina'},
            {language:'Cestina',area:'Ceska repubika'},
            {language:'Crnogorski',area:'Crna gora '},
            {language:'Dansk',area:'Danmark'},
            {language:'Deutsch',area:'Deutschland'},
            {language:'Deutsch',area:'Osterreich'},
            {language:'Deutsch',area:'Schweiz'},
            {language:'Eesti',area:'Eesti'},
            {language:'English',area:'Australia'},
            {language:'English',area:'Canada'},
            {language:'English',area:'Guyana'},
            {language:'English',area:'India'},
            {language:'English',area:'Ireland'},
            {language:'English',area:'New Zealand'},
            {language:'English',area:'Singapore'},
            {language:'English',area:'United Arab Emirates'},
            {language:'English',area:'Argentina'},
            {language:'English',area:'Belice'}, 
            {language:'Espanol',area:'Bolivia'},
            {language:'Espanol',area:'Chile'},
            {language:'Espanol',area:'Colombia'},
            {language:'Espanol',area:'Costa Rica'},
            {language:'Espanol',area:'Ecuador'},
            {language:'Espanol',area:'El Slvador'},
            {language:'Espanol',area:'Espana'},
            {language:'Espanol',area:'Estados Unidos'},
            {language:'Espanol',area:'Guetemala'},
            {language:'Espanol',area:'Honduras'},
            {language:'Espanol',area:'Latinomerica'},
            {language:'Espanol',area:'Mexico'},
            {language:'Espanol',area:'Nicaragua'},
            {language:'Espanol',area:'panama'},
            {language:'Espanol',area:'paraguay'},  
            {language:'Espanol',area:'Peru'},
            {language:'Espanol',area:'Venezuela'},    
            {language:'Espanol',area:'Belgique'},
            {language:'Islenska',area:'Island'},      
                ],
            listMoney:  [{money:'Đô la Mỹ',sign:'USD - $'},
                        {money:'Baht Thái Lan',sign:'THB - ฿'},
                        {money:'Bảng Anh',sign:'GBP - £'},
                        {money:'Colon Costa Rica',sign:'CRC - ₡'},
                        {money:'Dirham Ma-rốc',sign:'MAD'},
                        {money:'Dirham các tiểu vương quốc Ả Rập thống nhất',sign:'AED - ﺩ.ﺇ'},
                        {money:'Euro',sign:'EUR - €'},
                        {money:'Forint Hungary',sign:'HUF - Ft'},
                        {money:'Franc Thụy Sĩ',sign:'CHF'},
                        {money:'Koruna Séc',sign:'CZK - Kč'},
                        {money:'Krona Thụy Điển',sign:'SEK - kr'},
                        {money:'Krone Na Uy',sign:'NOK - kr'},
                        {money:'Krone Đan Mạch',sign:'DKK - kr'},
                        {money:'Kuna Croatia',sign:'HRK - kn'},
                        {money:'Leu Rumani',sign:'RON - lei'},
                        {money:'Lev Bulgaria',sign:'BGN - лв.'},
                        ],
            indexMoneyActive:0
        }
    }
    onClose = ()=>{
        this.props.onClose(false)
    }
    onControlSelect  = (data)=>{
        if(data===1 && this.state.money===false){
            this.setState({
                language:false,
                money:true
            })
        }
        if(data===0 && this.state.language===false){
            this.setState({
                language:true,
                money:false
            })
        }
    }
    selectLanguage = (data)=>{
        if(data !== this.state.indexLanguageActive){
            this.setState({indexLanguageActive:data})
        }
    }
    selectMoney = (data)=>{
        if(data !== this.state.indexMoneyActive){
            this.setState({indexMoneyActive:data})
        }
    }
    render(){var renderListHtml;
            if(this.props.isOpenLanguageMoney===true){
            var {language,money} = this.state;
                if(language===true && money===false){
                var {indexLanguageActive,listLanguages}=this.state;
                renderListHtml = listLanguages.map((element,index)=>
                                <div key={index} className="col-md-4 col-lg-3 col-xl-3 language-item">
                                    <div onClick={()=>{this.selectLanguage(index)}} className={index === indexLanguageActive ? "language-item-content active" : "language-item-content"} >
                                        <p className="ngon_ngu">{element.language}</p>
                                        <p className="khu_vuc">{element.area}</p>
                                    </div>
                                </div>
                            )
                }
                if(language===false && money===true){
                    var {indexMoneyActive,listMoney}=this.state;
                    renderListHtml = listMoney.map((element,index)=>
                                <div key={index} className="col-md-4 col-lg-3 col-xl-3 money-item">
                                    <div onClick={()=>{this.selectMoney(index)}} className={index === indexMoneyActive ? "money-item-content active" : "money-item-content"} >
                                        <p className="loai_tien">{element.money}</p>
                                        <p className="ki_hieu">{element.sign}</p>
                                    </div>
                                </div>
                            )
                }
            }
            var closeSelect = (event)=>{
                var selectContainer = document.querySelector(".select-language-money");
                if(event.target === selectContainer){
                    this.onClose()
                }
            }
            window.addEventListener('click',closeSelect)
            
        return(
            <div className="select-language-money" style={{display: this.props.isOpenLanguageMoney===true ?'':'none'}}>
                <div className="select-language-money-container">
                    <div className="header">
                        <span className="close-select-language" onClick={this.onClose}>X</span>
                    </div>
                    <div className="container-language">
                        <div className="select-language-control">
                        <span onClick={()=>{this.onControlSelect(0)}} className={language===true ? "control-language active":"control-language"}>Ngôn ngữ và khu vực</span>
                        <span onClick={()=>{this.onControlSelect(1)}} className={money===true ? "control-money active": "control-money"}>Loại tiền tệ</span>
                        </div>
                        <hr style={{margin:'0px 16px'}}/>
                        <div className="select-title">{language===true? "Chọn ngôn ngữ và khu vực":"Chọn loại tiền tệ"}</div>
                        <div className="row list-languages">
                            {renderListHtml}
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default SelectLanguageMoney;