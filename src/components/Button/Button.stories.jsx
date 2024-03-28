import Button from "./Button";
import {useArgs} from '@storybook/preview-api'


const withRed = (Story) => {
    return (<div style={{backgroundColor: "red"}}> <Story/> </div>)
}

const withPurple = (Story) => {
    return (<div style={{backgroundColor: "purple"}}> <Story/> </div>)
    //or story() instead of <Story/>
}

export default {
  title: "components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes : {
    variant : {
        options : {
            Add : 'add',
            Check : 'check'
            //or an array
        }
    }
  } , 
//   parameters : {
//     backgrounds : {
//         default : "light"
//     },
//     layout: 'centered'
//   }
};



export const Add = {
    args : {
        title : "Add",
        size : 20
    } , 
    render : (args)=> {
        const [{variant} , updateArgs]  = useArgs()


        function handleClick() {
            updateArgs({...args , variant : 20})
            console.log("hello")
        }


        return <Button {...args} onClick={handleClick}/>
    } , 
    parameters: {
        backgrounds: {
        //   grid: {
        //     disable: true,
        //   },
        default : 'dark'
        },
      }
}

// Add.decorators = withRed



export const Check = {
    args : {
       ...Add.args , 
       title : "Check"
    } , 
    render : (args)=> {
        const [{variant} , updateArgs]  = useArgs()


        function handleClick() {
            updateArgs({...args , variant : 20})
            console.log("hello")
        }


        return <Button {...args} onClick={handleClick}/>
    }
}



