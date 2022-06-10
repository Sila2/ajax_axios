import React, { Component } from 'react'
//class
//this.eventMethod -- bu objedeki eventMethod gibi

export default class Person extends Component {
//1-) constructor  
//--------ilk adımda çalışır. 
//--------constructor seviyesinde verilerin kaybolmasını istemezsek bind işlemi yapmalıyız.
//2-) render
//3-) conponentDidMount --daha çok serbest bileşenleri çalıştırmak için yazarız.

    //constructor : projemiz çalıştığında ilk çalışacak kısımdır.
    constructor(props){
        console.log("1. adım : constructor çalıştı.")
        //üst atadaki verileri almak ve işlemek için kullanılır.
        super(props);
        //bind : obje verilerini almak ve bağlamak için kullanırız.
        this.eventMethod=this.eventMethod.bind(this);

        //state: durum belirtir.
        //state yapısı--o andaki durumlar neler
        this.state={
            name:"Sila",
        }
    }

    //3-) ün çalışma adımları:
    //1- cdm --> TAB -- ComponentDidMount
    componentDidMount() { 
        console.log("3. adım : componentDidMount")
    }

    //2- cdu -- ComponentDidUpdate -- state yapısında güncelleme olduğunda çalışır
    componentDidUpdate(prevProps, prevState) { 
        console.log("4. adım : state değişti : componentDidUpdate")
    } 

    //3- cwu -- component yapısı silindiğinde çalışır.
    // componentWillUnmount() {

    //  }

    eventMethod(){
        console.log(this);
        console.log(this.state);
        console.log(this.state.name);
        this.setState({name:"isim değişti"})
    }

  render() {
      console.log("2. adım : render")
    return (
      <div>
          <p>{this.state.name}</p>
          <button onClick={this.eventMethod} className="btn btn-primary" style={{fontSize:"2rem"}}>Gönder</button>
      </div>
    )
  }
}
