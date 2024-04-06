import { Button ,styled,ButtonGroup} from "@mui/material";

const Component=styled(ButtonGroup)`
margin-top:30px;
`

const Styledbutton=styled(Button)`
border-radius:50%;
`
function Groupedbutton(){
    return (
        <Component>
            <Styledbutton>-</Styledbutton>
            <Button>1</Button>
            <Styledbutton>+</Styledbutton>
        </Component>
    )
}

export default Groupedbutton;