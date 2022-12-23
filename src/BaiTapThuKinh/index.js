import React, { Component } from "react";
import dataGlasses from "../dataGlasses.json"

export default class BaiTapThuKinh extends Component {

    state = {
        glassCurrent: {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./imgGlass/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    }

    changeGlass = (newGlass) => {
        this.setState({
            glassCurrent: newGlass
        })
    }

    renderGlassList = () => {
        return dataGlasses.map((glassItem, index) => {
            return <img onClick={() => { this.changeGlass(glassItem) }} className="ml-3 border" style={{ width: '100px', cursor: 'pointer' }} key={index} src={glassItem.url} />
        })
    }

    render() {
        const keyframe = `@keyframes animateGlass${Date.now()}{
            from{
                width: 0;
                transform: rotate(60deg)
            }
            to{
                width: 118px;
                transform: rotate(0deg)
            }
        }`

        const styleGlass = {
            width: '117px',
            top: '68px',
            right: '212px',
            opacity: '.7',
            animation: `animateGlass${Date.now()} 1.5s`
        }
        const infoGlass = {
            backgroundColor: 'rgba(255,127,0,.5)',
            width: '220px',
            left: '160px',
            bottom: '90px',
            textAlign: 'left',
            height: '90px',
            opacity: '.8'
        }

        return (
            <div style={{ backgroundImage: 'url(./imgGlass/background.jpg)', backgroundSize: '1500px', minHeight: '2000px' }}>

                <style>
                    {keyframe}
                </style>

                <div style={{ backgroundColor: 'rgba(0, 0, 0, .5)', minHeight: '2000px' }}>
                    <h3 style={{ backgroundColor: 'rgba(0, 0, 0, .3)', marginTop: '0px' }} className='text-center text-light p-4'>TRY GLASS APP ONLINE</h3>
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <div className="position-relative">
                                    <img style={{ width: '220px' }} src="./imgGlass/model.jpg" alt="model.jpg" />
                                    <img className="position-absolute" style={styleGlass} src={this.state.glassCurrent.url} alt="v1.png" />
                                    <div style={infoGlass} className="position-relative">
                                        <p className="font-weight-bold m-0" style={{ color: 'red' }}>Tên kính: {this.state.glassCurrent.name}</p>
                                        <span style={{ fontSize: '12px' }} className="font-weight-bold">Mô tả: {this.state.glassCurrent.desc}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <img style={{ width: '200px' }} src="./imgGlass/model.jpg" alt="model.jpg" />
                            </div>
                        </div>
                        <div className="bg-light mt-4 d-flex text-center justify-content-center p-5">
                            {this.renderGlassList()}
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}