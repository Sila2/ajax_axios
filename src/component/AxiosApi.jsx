import axios from 'axios'
import React, { Component } from 'react'

export default class AxiosApi extends Component {
    //state
    state={
        users:[],
    }

    //cdm
    componentDidMount=async()=>{
        const resp=await axios.get('http://localhost:3000/posts');
        console.log(resp)
    }

  render() {
    return (
      <div>

      </div>
    )
  }
}
