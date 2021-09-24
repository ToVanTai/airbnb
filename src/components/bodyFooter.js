import { Component } from "react";
class BodyFooter extends Component{
    constructor(props){
        super(props);
        this.state={
            gioiThieu:{
                name:'Giới thiệu',
                data:{
                    left:[
                        {description:'Phương thức hoạt động của Airbnb'},
                        {description:'Nhà đầu tư'},
                        {description:'HotelTonight'},
                        {description:'Cơ hội nghề nghiệp'},
                    ],
                    center:[
                        {description:'Trang tin tức'},
                        {description:'Airbnb Plus'},
                        {description:'Airbnb for Work'},
                        {description:'Thư của nhà sáng lập'},
                    ],
                    right:[
                        {description:'Airbnb 2021'},
                        {description:'Airbnb Luxe'},
                        {description:'Nhờ có Host, mọi điều đều có thể'},
                    ]
                }
            },
            congDong:{
                name:'Cộng đồng',
                data:{
                    left:[
                        {description:'Sự đa dạng và Cảm giác thân thuộc'},
                        {description:'Đón tiếp người tị nạn Afghanistan'}
                    ],
                    center:[
                        {description:'Tiện nghi phù hợp với người có nhu cầu đặc biệt'},
                        {description:'Lượt giới thiệu của khách'}
                    ],
                    right:[
                        {description:'Đối tác liên két Airbnb'},
                        {description:'Airbnb.org'}
                    ]
                }
            },
            donTiepKhach:{
                name:'Đón tiếp khách',
                data:{
                    left:[
                        {description:'Cho thuê nhà'},
                        {description:'đón tiếp khách có trách nhiệm'}
                    ],
                    center:[
                        {description:'Tổ chức Trải nghiệm trực tuyến'},
                        {description:'Trung tâm tài nguyên'},
                        
                    ],
                    right:[
                        {description:'Tổ chức trải nghiệm'},
                        {description:'Trung tâm cộng đồng'}
                    ]
                }
            },
            hoTro:{
                name:'Hỗ trợ',
                data:{
                    left:[
                        {description:'Biện pháp ứng phó với đại dịch COVID-19 của chúng tôi'},
                        {description:'Hỗ trợ khu dân cư'}
                    ],
                    center:[
                        {description:'Trung tâm trợ giúp'},
                        {description:'Tin cậy và an toàn'}
                    ],
                    right:[
                        {description:'Các tùy chọn hủy'}
                    ]
                }
            }
        }
    }
    renderHtml = (data)=>{
        let result = data.map((element,index)=>
            <a key={index} href="!#">{element.description}</a>
        )
        return result;
    }
    render(){
        var {gioiThieu,congDong,donTiepKhach,hoTro}=this.state;
        
        return(
            <div className="body__footer">
                <div className="body__footer-item noSelect">
                    <div className="body__footer-item-header">
                        <b>{gioiThieu.name.toUpperCase()}</b>
                    </div>
                    <div className="body__footer-item-header-row row" >
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            {this.renderHtml(gioiThieu.data.left)}
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        {this.renderHtml(gioiThieu.data.center)}
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        {this.renderHtml(gioiThieu.data.right)}
                        </div>
                    </div>
                </div>
                <div className="body__footer-item noSelect">
                    <div className="body__footer-item-header">
                        <b>{congDong.name.toUpperCase()}</b>
                    </div>
                    <div className="body__footer-item-header-row row" >
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            {this.renderHtml(congDong.data.left)}
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        {this.renderHtml(congDong.data.center)}
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        {this.renderHtml(congDong.data.right)}
                        </div>
                    </div>
                </div>
                <div className="body__footer-item noSelect">
                    <div className="body__footer-item-header">
                        <b>{donTiepKhach.name.toUpperCase()}</b>
                    </div>
                    <div className="body__footer-item-header-row row" >
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            {this.renderHtml(donTiepKhach.data.left)}
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        {this.renderHtml(donTiepKhach.data.center)}
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        {this.renderHtml(donTiepKhach.data.right)}
                        </div>
                    </div>
                </div>
                <div className="body__footer-item noSelect">
                    <div className="body__footer-item-header">
                        <b>{hoTro.name.toUpperCase()}</b>
                    </div>
                    <div className="body__footer-item-header-row row" >
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            {this.renderHtml(hoTro.data.left)}
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        {this.renderHtml(hoTro.data.center)}
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        {this.renderHtml(hoTro.data.right)}
                        </div>
                    </div>
                </div>
                <div className="footer noSelect">
                    <div className="footer-left">
                        <p>© 2021 Airbnb, Inc</p> <span>-</span>
                        <a href="/#">Quyền riêng tư</a><span>-</span>
                        <a href="/#">Điều khoản</a><span>-</span>
                        <a href="/#">Sơ đồ trang web</a>
                    </div>
                    <div className="footer-right">
                        <a href="/#"><i className="fas fa-globe"></i> Tiếng Việt(VN)</a>
                        <a href="/#">$ USD</a>
                        <a href="/#"><i className="fab fa-facebook-f"></i></a>
                        <a href="/#"><i className="fab fa-twitter"></i></a>
                        <a href="/#"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        )
    }
}
export default BodyFooter;