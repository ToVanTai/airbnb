import { Component } from "react";
class AddClient extends Component{
    constructor(props){
        super(props);
        this.state={
            addClient:[{
                for:'Người lớn',
                description:'Từ 13 tuổi trở lên',
                quantity:0
            },
            {
                for:'Trẻ em',
                description:'Độ tuổi 2 - 12',
                quantity:0
            },
            {
                for:'Em bé',
                description:'Dưới 2',
                quantity:0
            },]
        }
    }
    onChangeQuantity = (data,index,quantity)=>{
        var {addClient}=this.state;
        if(data===-1 ){
            if(quantity !==0){
                addClient[index].quantity--;
                this.setState({addClient})
            }
        }else{
                addClient[index].quantity++;
                this.setState({addClient})
        }
    }
    render(){
        var {addClient}=this.state;
        var innerHtmlAddClient =addClient.map((element,index)=>{
            return <div className="add_client-item" key={index}>
                        <div className="add_client-item-left">
                            <b>{element.for}</b>
                            <p>{element.description}</p>
                        </div>
                        <div className="add_client-item-right">
                            <span className="reduce" onClick={()=>{this.onChangeQuantity(-1,index,element.quantity)}}><i className="fas fa-minus"></i></span>
                            <span className="quantity">{element.quantity}</span>
                            <span className="increase" onClick={()=>{this.onChangeQuantity(1,index,element.quantity)}}><i className="fas fa-plus"></i></span>
                        </div>
                    </div>
        }) 
        return (
            <div className="add_client" style={{display: this.props.openAddClient === 3 ?'block':'none'}}>
                {innerHtmlAddClient}
            </div>
        )
    }
}
export default AddClient;