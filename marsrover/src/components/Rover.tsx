import React from 'react'

interface Props {
    facing: any;
    ghost: any;
}

class Rover extends React.Component<Props> {
    

    render(){
        const { facing, ghost} = this.props
    
        return (
            <span className={`rover ${facing} ${ghost ? 'ghost' : ''} `}>
            🛦   
            </span>
        )
    } 
}



export default Rover;
