import { Component } from "react";
class BodyContent extends Component{
    constructor(props){
        super(props);
        this.state={
            discoverNear:[
                {
                    name:'Thành phố Kansas',
                    description:'4,5 giờ lái xe',
                    pickture:require('./../image/discoverNear/kansas.jpg').default
                },
                {
                    name:'Thành phố Oklahoma',
                    description:'4 giờ lái xe',
                    pickture:require('./../image/discoverNear/oklahoma.jpg').default
                },
                {
                    name:'Branson',
                    description:'7 giờ lái xe',
                    pickture:require('./../image/discoverNear/branson.jpg').default
                },
                {
                    name:'Omaha',
                    description:'6,5 giờ lái xe',
                    pickture:require('./../image/discoverNear/omaha.jpg').default
                },
                {
                    name:'Tulsa',
                    description:'4,5 giờ lái xe',
                    pickture:require('./../image/discoverNear/tulsa.jpg').default
                },
                {
                    name:'Mmarillo',
                    description:'8 giờ lái xe',
                    pickture:require('./../image/discoverNear/amarillo.png').default
                },
                {
                    name:'Thành phố Kansas',
                    description:'4,5 giờ lái xe',
                    pickture:require('./../image/discoverNear/kansas2.jpg').default
                },
                {
                    name:'Fayetteville',
                    description:'6,5 giờ lái xe',
                    pickture:require('./../image/discoverNear/fayetteville.png').default
                }
            ],
            everyWhere:[
                {
                    name:'Nơi nghỉ dưỡng ngoài trời',
                    pickture:require('./../image/everyWhere/noiNghiDuongNgoaiTroi.jpg').default
                },
                {
                    name:'Chỗ ở độc đáo',
                    pickture:require('./../image/everyWhere/choODocDao.jpg').default
                },
                {
                    name:'Toàn bộ nhà',
                    pickture:require('./../image/everyWhere/toanBoNha.jpg').default
                },
                {
                    name:'Cho phép mang theo thú cưng',
                    pickture:require('./../image/everyWhere/choPhepMangTheoThuCung.jpg').default
                }
            ],
            discover:[
                {
                    pickture:require('./../image/discover/experience.jpg').default,
                    name:'Trải nghiệm',
                    description:'Tìm các hoạt động khó quên gần bạn'
                },
                {
                    pickture:require('./../image/discover/experienceOnline.jpg').default,
                    name:'Trải nghiệm trực tuyến',
                    description:'Các hoạt động tương tác trực tiếp, với sự dẫn dắt của người tổ chức'
                },
                {
                    pickture:require('./../image/discover/collectionjpg.jpg').default,
                    name:'Bộ sưu tập, nổi bật phiêu du',
                    description:'Du lịch tại nhà với trải nhiệm trực tuyến'
                }
            ]
        }
    }
    render(){
        var {discoverNear,everyWhere,discover}=this.state;
        var renderDiscoverNear = discoverNear.map((element,index)=>
                    <div key={index} className="body-item-content-col col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">
                        <div className="body-item-content-left">
                            <img src={element.pickture} alt={element.name} />
                        </div>
                        <div className="body-item-content-right">
                            <b>{element.name}</b>
                            <p>{element.description}</p>
                        </div>
                    </div>
                    )
        var renderEveryWhere = everyWhere.map((element,index)=>
                <div key={index} className="body-item-content-col col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">
                    <img alt={element.name} src={element.pickture}/>
                    <p>{element.name}</p>
                </div>
        )
        var renderDiscover= discover.map((element,index)=>
            <div key={index} className="body-item-content-col col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <img alt={element.name} src={element.pickture}/>
                <b>{element.name}</b>
                <p>{element.description}</p>
            </div>
            )
        return (
            
            <div className="body__content" style={{marginTop:'60px'}}>
                
                <div className="body__list-item">
                    <div className="body__list-item-header">
                        <p>Khám phá những điểm đến gần đây</p>
                    </div>
                    <div className="body__list-item-content-discoverNear">
                        <div className="row noSelect body-item-content-row ">
                            {renderDiscoverNear}
                        </div>
                    </div>
                </div>
                <div className="body__list-item">
                    <div className="body__list-item-header">
                        <p>Ở bất cứ đâu</p>
                    </div>
                    <div className="body__list-item-content-everyWhere">
                        <div className="row body-item-content-row noSelect">
                            {renderEveryWhere}
                        </div>
                    </div>
                </div>            
                <div className="body__list-item">
                    <div className="body__list-item-content-challenges">
                        <a style={{display:"block"}} href="!#">
                            <img  src={require('./../image/challenges/challenges.jpg').default} alt="challenges"/>
                        </a>
                        <div className="challenges-content">
                            <h3>Thử đón tiếp khách</h3>
                            <p>Kiếm thêm thu nhập và khám phá các cơ hội mới bằng cách chia sẻ nơi ở của bạn.</p>
                            <span>Tìm hiểu thêm</span>
                        </div>
                    </div>
                </div>
                <div className="body__list-item">
                    <div className="body__list-item-header">
                        <p>Khám phá những điều nên trải nghiệm</p>
                    </div>
                    <div className="body__list-item-content-discover">
                        <div className="row body-item-content-row noSelect">
                            {renderDiscover}
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}
export default BodyContent;